# Web3j Integration

The [Web3j](https://web3j.io) JVM integration library can be configured to work with Epirus. 

![Web3j Website](img/web3j_website.png)

When a Web3j project uses the Epirus integration, all smart contract metadata is automatically uploaded into Epirus. This will guarantee that all contract, method, event names and associated parameter names will be registered in Epirus, greatly improving the experience for end-users.

![Contract with metadata](img/contract_with_metadata.png)

It also assists developers if they are using Epirus to support their test environment.

The Epirus integration for Web3j uses the Gradle build tool. To use it, you can follow the instructions on the project [README](https://github.com/web3j/epirus-gradle-plugin).
