# Supported Networks

The Epirus Portal supports the following test public Ethereum networks:

- Rinkeby
- Ropsten

These networks are known as testnets, i.e. they are test Ethereum networks that run in the public 
domain, which require test cryptocurrency that has no real monetary value. The production network
known as mainnet requires real cryptocurrency in order to execute transactions on it.

We plan to add full support for the Ethereum mainnet in the second half of 2020.

## Ropsten

The Ropsten testnet mirrors the live main Ethereum network (mainnet) as closely as possible. As 
a result it is harder to provide a consistent user experience as the test cryptocurrency it 
consumes has no realy monetary value. Hence it is harder to stop malicious actors as the 
financial barriers to entry for participants is low.

## Rinkeby

The Rinkeby testnet is considered to be more reliable then the Ropsten network, as it does not 
use proof of work consensus (PoW) to reach network consensus. Instead a pre-defined list of 
nodes are used to reach consensus and authorise transactions. Although not a trustless 
decentralised approach, what this means is that participents have a realiable experience 
when working with this network, making it ideal for testing. Hence it is our recommended 
network for testing scenarios.

The consensus mechanism that it uses is known as *Clique* proof of 
authority (PoA) which you can read more about in 
[EIP-225](https://eips.ethereum.org/EIPS/eip-225) where it was first proposed.

## Cryptocurrency

Cryptocurrency is required to participate on all public Ethereum networks. This is to pay 
for transaction costs. The cryptocurrency consumed by test networks is test cryptocurrency 
so has no real monetary value. Whereas on the mainnet, cryptocurrency has real monetary 
value.

The Epirus Portal ensures that all registered accounts are kept funded with 
cryptocurrency, to ensure that user's applications work seamlessly. As test network 
cryptocurrency has not real monetary value a fair usage policy applies. 
