you need to add penumbra in other directory

1.  git clone https://github.com/penumbra-zone/penumbra.git

2.  git fetch --all; git reset --hard origin/main; cargo build --release --bin pcli

3.  cargo build --release --bin pd  

4. cargo run --bin pd --release -- start --home ~/.penumbra/testnet_data/node0/pd 

start tendermint

1. tendermint start --home ~/.penumbra/testnet_data/node0/tendermint

# buf generate locale(https://docs.buf.build/how-to/replace-protoc-with-buf):
  1. The default buf.yaml configuration files shown above are created with this command: 
    - buf mod init
  2.  With this, you can verify that the workspace compiles with this command:
    - buf build
  3. With this, you can generate the Go/gRPC client and server stubs with this command:  
    - yarn buf:generate 

# buf generate remote
  - npm config set @buf:registry https://npm.buf.build
  - npm install @buf/bufbuild_connect-web_penumbra-zone_penumbra

dev
yarn start

prod 
yarn build
