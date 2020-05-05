# Faucets

The Epirus platform provides automatic wallet funding for accounts on the Rinkeby and Ropsten 
Ethereum test networks. Hence in order to test your smart contracts on a real, 
live Ethereum network, you won't need to go about obtaining testnet Ether. 

When you create an Epirus account and deploy a smart contract using the CLI, your generated wallet will 
automatically be funded by Epirus with enough testnet Ether to deploy your contracts.  
In order to fund an arbitrary account, you can use the `epirus wallet fund` command in the 
CLI application. 

For instance, in order to fund an address on the Rinkeby test network, the follwing command would be used:

```
epirus wallet fund rinkeby 0xceeeefe21b2f2ea5df62ed2efde1e3f1e5540f96
``` 

If using the CLI application is not convenient, both faucets have web interfaces which can be used to fund arbitrary accounts:

- [Rinkeby Faucet](https://rinkeby.faucet.epirus.io/)
- [Ropsten Faucet](https://ropsten.faucet.epirus.io/)

