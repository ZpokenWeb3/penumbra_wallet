you need to add penumbra in other directory

1.  git clone https://github.com/penumbra-zone/penumbra.git

2.  git fetch --all; git reset --hard origin/main; cargo build --release --bin pcli

3.  cargo build --release --bin pd  

4. cargo run --bin pd --release -- start --home ~/.penumbra/testnet_data/node0/pd 

start tendermint

1. tendermint start --home ~/.penumbra/testnet_data/node0/tendermint


dev
yarn start

prod 
yarn build