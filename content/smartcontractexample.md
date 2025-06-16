---
title: Smart Contract Example
geekdocBreadcrumb: false
aliases: ["/smartcontract", "/about/smartcontract", "/contributing/smartcontract"]
---


## Voting Contract

This contract allows users to **register a color**, **vote** for one, and **retrieve the winning color**. It's written in **Rust**, compiled to **WASM**, and deployed on the **Rubix blockchain**.

**To set up a Rubix Node, [click here](https://learn.rubix.net/testnet/).**

---

## Project Structure

```
voting_contract/                              # Rust smart contract
│── Cargo.toml                                # Rust config
│── src/
│    └── lib.rs                               # Contract code
│
├── dapp_server/                              # Go DApp server
│   ├── main.go                               # Entry point for DApp server
│   └── go.mod / go.sum                       # Go module files
│
└── artifacts/
     └── voting_contract.wasm                 
```

---

## Prerequisites

* Rust (with `wasm32-unknown-unknown` target)
* Go (to run the DApp server)
* Rubix Node 
* DIDs created on the node.

---

## Build Instructions

```bash
cargo build --release --target wasm32-unknown-unknown
```

This generates the `.wasm` contract file in `target/wasm32-unknown-unknown/release`.
Create a folder `artifacts` and copy the wasm file into it.

---

## Host Functions

Rubix smart contracts are compiled into WebAssembly (WASM) and executed within a secure runtime. However, since WASM modules are sandboxed by design, they cannot directly perform operations like accessing the network, filesystem, or persistent storage. To bridge this gap, Rubix exposes a set of host functions through its WASM runtime.

```rust
extern "C" {
    fn read_state(key_ptr: *const u8, key_len: usize, val_ptr: *mut u8, val_len: usize) -> i32;
    fn write_state(key_ptr: *const u8, key_len: usize, val_ptr: *const u8, val_len: usize) -> i32;
}
```

These are used for:
- Reading/writing blockchain key-value storage
- Transferring tokens (if needed)
- Calling external APIs

---

## Contract Logic (`lib.rs`)

Rubix follows a stateless smart contract model, where the contract itself does not maintain or store state on-chain. Instead, all inputs and stateful data are handled off-chain through external resources such as files (JSON, CSV), databases (like SQLite or NoSQL), or even decentralized storage like IPFS. To interface with these external sources, Rubix uses host functions, which act as bridges between the contract logic and the external state. 

---

### Structs & Helpers

```rust
#[derive(Serialize, Deserialize, Debug)]
pub struct ContractResponse {
    pub msg: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ContractError {
    pub msg: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Vote {
    pub voter_id: String,
    pub color: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct CastAndTally {
    pub voter_id: String,
    pub color: String,
}

static mut VOTES: Option<Vec<Vote>> = None;
````

* `ContractResponse` and `ContractError` are used to serialize success or error messages.
* `Vote` stores a single voter’s choice.
* `CastAndTally` is the struct used for deserializing inputs to the `cast_and_tally` function.
* `VOTES` stores the in-memory list of all vote entries globally.

---

### Vote Storage Helper

```rust
fn get_votes() -> &'static mut Vec<Vote> {
    unsafe {
        if VOTES.is_none() {
            VOTES = Some(Vec::new());
        }
        VOTES.as_mut().unwrap()
    }
}
```

* Lazily initializes the in-memory vote store when first accessed.
* Ensures votes are accumulated across multiple calls during runtime.

---

### Core Functions

### `cast_and_tally`

```rust
#[contract_fn]
pub fn cast_and_tally(input: CastAndTally) -> Result<String, ContractError> {
    if !ALLOWED_COLORS.contains(&input.color.as_str()) {
        return Err(ContractError::new("Invalid color"));
    }

    let votes = get_votes();
    votes.push(Vote {
        voter_id: input.voter_id.clone(),
        color: input.color.clone(),
    });

    let mut color_counts: HashMap<String, usize> = HashMap::new();
    for vote in votes.iter() {
        *color_counts.entry(vote.color.clone()).or_insert(0) += 1;
    }

    let winner = color_counts
        .iter()
        .max_by_key(|entry| entry.1)
        .map(|(color, _)| color.clone())
        .unwrap_or_else(|| "No votes yet".to_string());

    let msg = format!(
        "Vote cast for '{}'. Tally: {:?}. Winner: {}",
        input.color, color_counts, winner
    );

    let response = ContractResponse { msg };
    serde_json::to_string(&response)
        .map_err(|e| ContractError::new(&format!("Serialization error: {}", e)))
}
```

* Validates if the provided color is allowed (`Red`, `Green`, `Blue`).
* Adds the vote to the internal memory store.
* Tallies votes across all colors using a HashMap.
* Calculates the color with the maximum number of votes and includes it in the output.
* Returns the result as a serialized JSON message.

---

## State Management

* Votes are stored in memory via a lazily initialized global static variable (`VOTES`).
* State is retained across multiple function calls during a runtime session.
* The function currently does not prevent duplicate votes or persist them permanently to chain state.

---

## Voting DApp Server

This **Go-based DApp server** acts as the execution environment for the compiled WASM voting contract deployed on the **Rubix blockchain**. It exposes a REST API to receive smart contract calls via callback, invokes the appropriate contract method, and returns the result.

---

## Purpose

The DApp server:

* Loads environment variables (Rubix Node URL, WASM file path).
* Accepts contract execution inputs over HTTP.
* Loads and runs the WASM smart contract.
* Parses the input and returns structured results.

---

## Environment Setup

Create a `.env` file based on `.env.sample`:

```env
RUBIX_NODE_ADDRESS=http://localhost:20009
VOTING_CONTRACT_PATH=/absolute/path/to/voting_contract.wasm
```

Install dependencies:

```bash
go mod tidy
```

Run the server:

```bash
go run main.go
```

---

## Sample .env File

```env
RUBIX_NODE_ADDRESS=http://localhost:20009
VOTING_CONTRACT_PATH=/Users/arnab/TRIE-internal/contracts/voting_contract/artifacts/voting_contract.wasm
```

---

## Core Logic: `main.go`

### 1. Import Packages

```go
import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path"
	"sync"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	wasmbridge "github.com/rubixchain/rubix-wasm/go-wasm-bridge"
)
```

* `godotenv`: loads `.env` file.
* `wasmbridge`: interfaces with Rubix WASM runtime.
* `sync`: protects in-memory vote storage.

### 2. Global Variables

```go
var (
	voteStore = make(map[string]string)
	storeLock = sync.Mutex{}
)
```

* A thread-safe in-memory map to track votes.

### 3. Main Function

```go
func main() {
	_ = godotenv.Load() // Load .env
	r := gin.Default()
	r.POST("/api/voting-contract", handleVotingContract)
	r.Run(":8080")
}
```

* Exposes one POST endpoint.

### 4. Voting Contract Handler

```go
func handleVotingContract(c *gin.Context) {
	nodeAddress := os.Getenv("RUBIX_NODE_ADDRESS")
	contractPath := os.Getenv("VOTING_CONTRACT_PATH")

	var contractInput struct {
		Method  string                 `json:"method"`
		Payload map[string]interface{} `json:"payload"`
	}
	if err := c.ShouldBindJSON(&contractInput); err != nil {
		wrapError(c.JSON, "Invalid request body")
		return
	}

	switch contractInput.Method {
	case "cast_and_tally":
		// Handle directly
		castAndTally(contractInput.Payload, c)
	default:
		// Fallback to WASM invocation
		invokeWasmMethod(nodeAddress, contractPath, contractInput, c)
	}
}
```

### 5. `cast_and_tally` Logic in Go

```go
func castAndTally(payload map[string]interface{}, c *gin.Context) {
	voterID := payload["voter_id"].(string)
	color := payload["color"].(string)

	storeLock.Lock()
	voteStore[voterID] = color
	tally := make(map[string]int)
	for _, c := range voteStore {
		tally[c]++
	}

	winner := ""
	maxVotes := -1
	for color, count := range tally {
		if count > maxVotes {
			maxVotes = count
			winner = color
		}
	}
	storeLock.Unlock()

	wrapSuccess(c.JSON, fmt.Sprintf("Vote recorded. Tally: %v. Current winner: %s", tally, winner))
}
```

* Votes are saved per voter ID.
* Computes real-time tally and winner.

### 6. WASM Invocation (Default Case)

```go
func invokeWasmMethod(nodeAddr, contractPath string, input struct {
	Method  string
	Payload map[string]interface{}
}, c *gin.Context) {
	hostFnRegistry := wasmbridge.NewHostFunctionRegistry()
	wasmModule, err := wasmbridge.NewWasmModule(
		path.Clean(contractPath),
		hostFnRegistry,
		wasmbridge.WithRubixNodeAddress(nodeAddr),
	)
	if err != nil {
		wrapError(c.JSON, fmt.Sprintf("failed to load wasm module: %v", err))
		return
	}

	inputBytes, _ := json.Marshal(map[string]interface{}{input.Method: input.Payload})
	result, err := wasmModule.CallFunction(string(inputBytes))
	if err != nil {
		wrapError(c.JSON, fmt.Sprintf("contract function call failed: %v", err))
		return
	}

	msg, errMsg := extractContractOutput(result)
	if errMsg != "" {
		wrapError(c.JSON, errMsg)
		return
	}
	wrapSuccess(c.JSON, msg)
}
```

---

## Example Input & Output

### Input 

To test the voting contract using the DApp server, open your terminal, navigate to the `dapp_server` folder (which contains the main.go file), and make sure the server is running by running `go run main.go` . Once the server is up and listening on port 8080, use the following curl command in a separate terminal window to send a request:

```bash
curl -X POST http://localhost:8080/api/voting-contract \
  -H "Content-Type: application/json" \
  -d '{
    "method": "cast_and_tally",
    "payload": {
      "voter_id": "voter1",
      "color": "Red"
    }
  }'
```

### Output
```json
{
  "status": "success",
  "message": "Vote cast for 'Red'. Tally: {\"Red\": 1}. Winner: Red"
}
```

---

## Deployment Flow

1. Write logic in `lib.rs`.
2. Compile using `cargo build`.
3. Upload `.wasm` file to Rubix node.
4. Trigger function using Rubix CLI or DApp server.

---

## Security Checks

- Prevents double voting by checking `vote_<user_did>` state.
- Validates registered colors before allowing vote.
- Stores all state on-chain using Rubix's persistent storage.

---

## Summary

* Uses `gin` for REST routing.
* Integrates tightly with Rubix’s WASM smart contract architecture.
* Supports both native Go logic and dynamic WASM method execution.

---

## Smart Contract Setup Steps

### 1. Clone the Voting Smart Contract

```bash
git clone https://github.com/rubixchain/rubix-dapps
cd contracts
cd voting-contract
```

### 2. Generate WASM & Run Server

```bash
cd voting-contract
cargo build --target wasm32-unknown-unknown
```

The WASM file will be generated at:

```
target/wasm32-unknown-unknown/debug/voting_contract.wasm
```
Create a folder `artifacts` and copy the wasm file into it.

To run the DApp server:

```bash
go run main.go
```

> The server listens at: `http://localhost:8080/api/contract-input`

---

### 3. Generate the Smart Contract 

Open Swagger at: `http://localhost:20000/swagger/index.html`

* Use `/api/genarate-smart-contract`

Get the contract token hash from the logs (example: `QmXyz...`)

---

### 4. Subscribe to Smart Contract

In Rubix’s stateless, event-driven architecture, not all nodes are aware of every smart contract by default. To participate in or track the execution of a specific contract, a node must explicitly subscribe to it. This subscription uses a publish-subscribe (pub-sub) mechanism that ensures only interested nodes receive updates or execution events related to the contract. By subscribing, a node signals that it wants to stay in sync with the contract’s state transitions and be notified when actions like execution or deployment occur. Without subscribing, a node would remain unaware of these updates, as Rubix does not broadcast all contract activity globally like traditional blockchains.

```bash
curl -X POST http://localhost:20000/api/subscribe-smart-contract \
-H 'Content-Type: application/json' \
-d '{"smartContractToken": "<Smart Contract Token Hash>"}'
```

---

### 5. Register Callback URL

Since Rubix is designed to be stateless, it ensures that the blockchain itself does not bear the computational or storage load of executing smart contract logic.

To facilitate this, when a smart contract is executed via the Rubix node, the node sends a POST request to a Callback URL registered by the developer or user. This URL typically points to a backend server (e.g., `http://localhost:8080/api/contract-input`) which:

* Receives the smart contract execution request.

* Loads the corresponding WASM file.

* Calls the appropriate function inside the WASM using a compatible runtime.

* Reads/writes to external state (like JSON, databases, or other storage).

* Updates the smart contract state (stored in a state file).

* Returns the result to the node for on-chain record keeping.

```bash
curl -X POST http://localhost:20000/api/register-callback-url \
-H 'Content-Type: application/json' \
-d '{
  "CallBackURL": "http://localhost:8080/api/contract-input",
  "SmartContractToken": "<Smart Contract Token Hash>"
}'
```

---

### 6. Deploy the Smart Contract 

```bash
curl -X POST http://localhost:20000/api/deploy-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "deploying..",
  "deployerAddr": "<Deployer DID>",
  "quorumType": 2,
  "rbtAmount": 1,
  "smartContractToken": "<Smart Contract Token Hash>"
}'
```

Then, confirm using:

```bash
curl -X POST http://localhost:20000/api/signature-response \
-H 'Content-Type: application/json' \
-d '{
  "id": "<UUID from deploy response>",
  "mode": 0,
  "password": "mypassword"
}'
```

---

### 7. Execute the Smart Contract 

```bash
curl -X POST http://localhost:20000/api/execute-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "executing..",
  "executorAddr": "<Executor DID>",
  "quorumType": 2,
  "smartContractData": "Red",
  "smartContractToken": "<Smart Contract Token Hash>"
}'
```

Then, confirm using:

```bash
curl -X POST http://localhost:20000/api/signature-response \
-H 'Content-Type: application/json' \
-d '{
  "id": "<UUID from execute response>",
  "mode": 0,
  "password": "mypassword"
}'
```

---

### 8. Display Smart Contract Chain Data

**Full Chain:**

```bash
curl -X POST http://localhost:20000/api/get-smart-contract-token-chain-data \
-H 'Content-Type: application/json' \
-d '{
  "latest": false,
  "token": "<Smart Contract Token Hash>"
}'
```

**Latest Block:**

```bash
curl -X POST http://localhost:20000/api/get-smart-contract-token-chain-data \
-H 'Content-Type: application/json' \
-d '{
  "latest": true,
  "token": "<Smart Contract Token Hash>"
}'
```

---
