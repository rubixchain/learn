---
title: Become a Fullnode

---
# Become a Fullnode

This guide walks you through the complete fullnode setup: installing PostgreSQL, preparing your database, fetching Rubix executables, and running the fullnode.

To install the required Rubix binaries (Rubix Node, IPFS, swarm key etc.), refer to:  
[Install Rubix](../../developer-guides/setup/install-rubix.md)



## 1. Install PostgreSQL

```bash
sudo apt update
sudo apt install postgresql
```
## 2.Create PostgreSQL User and Database 
Switch to the postgres user:
```
sudo -i -u postgres
psql
```
Create a database user, password, and database.
You may choose any username, password, and database name.

Example (replace placeholders):
```
CREATE USER <your_username> WITH PASSWORD '<your_password>';
CREATE DATABASE <your_database_name>;
GRANT ALL PRIVILEGES ON DATABASE <your_database_name> TO <your_username>;
```
## 3. Run the fullnode
Start your fullnode by passing your PostgreSQL username and password:
```
./rubixgoplatform run \
  -p fullnode18 \
  -n 1800 \
  -s \
  -grpcPort 10518 \
  -testNet \
  -fullnode \
  -pgsqlDBName <your_DB_Name> \
  -pgsqlDBUserName <your_username> \
  -pgsqlDBPassword <your_password>
``` 
Arguments explained:

- `-p`: node name

- `-n`: port for Rubix node(default is 20000, if we pass 100 node will run on 20100)

- `-s`: enable HTTP server

- `-grpcPort`: port number for grpc communication

- `-testNet` or `-mainNet`: If you want to run testnet fullnode, use `-testNet` as flag, to run mainnet fullnode use `-mainNet` as flag.

- `-fullnode`: run as fullnode

- `-pgsqlDBUserName` / `-pgsqlDBPassword`/ `-pgsqlDBName`: PostgreSQL credentials

If you get any permission issues while running the fullnode, do the following:

1. Enter PostgreSQL shell again:
```
sudo -u postgres psql
```
2. Connect to your database:
```
\c <your_database_name>

```
3. Grant required privilages:
```
ALTER SCHEMA public OWNER TO <your_username>;

GRANT ALL ON SCHEMA public TO <your_username>;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO <your_username>;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO <your_username>;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO <your_username>;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO <your_username>;

```
4. Verify:
```
\dn+

```
you should see:
```
public | <your_username> | ...
```
5.Exit:
```
\q
```







