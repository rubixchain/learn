---
title: Example Smart Contracts
sidebar_label: Example Smart Contracts
---

<!-- File: docs/developer-guides/smart-contracts/examples.md -->
# Example Smart Contracts

## Voting Contract

This contract allows users to **register a color**, **vote** for one, and **retrieve the winning color**. It's written in **Rust**, compiled to **WASM**, and deployed on the **Rubix blockchain**.



# Smart Contract Setup Steps for Voting Contract

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

---

### 3. Generate the Smart Contract 

Open Swagger at: `http://localhost:<port at which rubix node is running>/swagger/index.html`

From the deployer node, we will generate the contract using `/api/genarate-smart-contract` . It has 4 params:
    - `did` : Provide the Deployer DID
    - `binaryCodePath` :  Upload WASM contract here
    - `rawCodePath` : Upload the contract source code file (`voting_contract/src/lib.rs`)
    - `schemaFilePath` : Upload the Schema File Path (`store_state/vote_contract/votefile.json`)

![Generate smart contract](/img/smart-contract-images/generate-smart-contract.png)

Get the contract tokenID from the output (example: `QmXyz...`)

---
- **Note:** For all the following steps you can use either swagger or CLI.

### 4. Subscribe to Smart Contract

In Rubix’s stateless, event-driven architecture, not all nodes are aware of every smart contract by default. To participate in or track the execution of a specific contract, a node must explicitly subscribe to it. This subscription uses a publish-subscribe (pub-sub) mechanism that ensures only interested nodes receive updates or execution events related to the contract. By subscribing, a node signals that it wants to stay in sync with the contract’s state transitions and be notified when actions like execution or deployment occur. Without subscribing, a node would remain unaware of these updates, as Rubix does not broadcast all contract activity globally like traditional blockchains.

![Subscribe smart contract](/img/smart-contract-images/subscribe.png)

---

```bash
curl -X POST http://localhost:20000/api/subscribe-smart-contract \
-H 'Content-Type: application/json' \
-d '{"smartContractToken": "<Smart Contract Token Hash>"}'
```

### 5. Register Callback URL

Since Rubix is designed to be stateless, it ensures that the blockchain itself does not bear the computational or storage load of executing smart contract logic.

To facilitate this, when a smart contract is executed via the Rubix node, the node sends a POST request to a Callback URL registered by the developer or user. This URL typically points to a server (e.g., `http://localhost:8080/api/contract-input`) which:

* Receives the smart contract execution request.

* Loads the corresponding WASM file.

* Calls the appropriate function inside the WASM using a compatible runtime.

* Reads/writes to external state (like JSON, databases, or other storage).

![Register callback](/img/smart-contract-images/register-call-back.png)

---

```bash
curl -X POST http://localhost:20000/api/register-callback-url \
-H 'Content-Type: application/json' \
-d '{
  "CallBackURL": "http://localhost:8080/api/v1-contract-input",
  "SmartContractToken": "<Smart Contract TokenID>"
}'
```



### 6. Deploy the Smart Contract 
- We will now proceed to deploy the contract from the Deployer node and commit 1 RBT to it:

![Deploy smart contract](/img/smart-contract-images/deploy.png)

-you will get response with an ID, use it to do the signature. 

![Deploy response](/img/smart-contract-images/deploy-response.png)

- confirm deployment of the smart contract by doing the signature

![Signature](/img/smart-contract-images/deploy-signature.png)


```

```bash
curl -X POST http://localhost:20000/api/deploy-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "deploying..",
  "deployerAddr": "<Deployer DID>",
  "quorumType": <Type of the quorum>,
  "rbtAmount": <RBT amount to deploy the contract>,
  "smartContractToken": "<Smart Contract TokenID>"
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

- we can now proceed to execute the contract with "Red" as a vote.

![Execute smart contract](/img/smart-contract-images/execute.png)

- similar to deployment of the smart contract, use the output of the execute smart contract to go ahead with the signature response.

```bash
curl -X POST http://localhost:20000/api/execute-smart-contract \
-H 'Content-Type: application/json' \
-d '{
  "comment": "executing..",
  "executorAddr": "<Executor DID>",
  "quorumType": 2,
  "smartContractData": "Red",
  "smartContractToken": "<Smart Contract TokenID>"
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
  "token": "<Smart Contract TokenID>"
}'
```

**Latest Block:**

```bash
curl -X POST http://localhost:20000/api/get-smart-contract-token-chain-data \
-H 'Content-Type: application/json' \
-d '{
  "latest": true,
  "token": "<Smart Contract TokenID>"
}'
```
## Explanation of Voting contract

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

## DApp Server

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
VOTING_CONTRACT_PATH=/Users/arnab/TRIE-internal/contracts/voting_contract/artifacts/voting_contract.wasm
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
This function acts as the entry point for all smart contract API requests coming into the DApp server.
- Reads the contract execution request (method + payload) from the incoming JSON body.
- Ensures extensibility: new smart contract methods can be added either as direct Go implementations or via WASM execution without changing the endpoint.

This separation allows optimization for commonly used functions (direct Go handling) while preserving flexibility for all other contract methods (via WASM runtime).

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

The `cast_and_tally` function is implemented natively in Go for faster execution and easy debugging.
- **Vote Recording** – Saves the incoming vote (`voter_id → color`) into an in-memory map (voteStore).
- **Duplicate Handling** – If a voter casts multiple votes, their latest choice automatically overwrites the old one (ensuring one vote per voter).
- **Tallying** – Iterates over all votes in the map and counts the number of votes per color.
- **Winner Calculation** – Finds the color with the maximum votes and marks it as the current winner.
- **Thread-Safety** – Uses a mutex (`storeLock`) to ensure consistency when multiple users vote simultaneously.

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
When the requested method is not implemented natively in Go, the server falls back to invoking the compiled WASM contract.
- Loads the `.wasm` file using `wasmbridge`, a Rubix library for executing WASM modules.
- Passes the input payload as JSON to the WASM function.
- Executes the contract logic securely inside the Rubix WASM runtime.
- Extracts the result from the WASM execution and formats it for the API response.
This ensures that all contract logic remains decentralized and verifiable on Rubix, while still allowing selective optimization via Go-native handlers.


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