# Overview

The Epirus Platform is the complete solution for building and operating blockchain applications. 

It consists of three core components:

- The [Epirus SDK](/sdk) for creating and deploying Ethereum blockchain applications.
- The [Epirus Portal](/portal) for managing connecivity to Ethereum blockchain networks.
- The [Epirus Explorer](/explorer) for viewing and monitoring your applicaitons on the blockchain and the blockchain itself.

![Epirus Platform](./img/epirus_platform.png)

Simplicity is at the heart of Epirus, with much of the complexity of working with blockchain hidden behind the scenes.

To get up and running with Epirus, please head to the [Quickstart](quickstart.md) to create, deploy and monitor your first Ethereum blockchain application.

However, if you're super impatient, you could just run these commands:

``` shell
curl -L get.epirus.io | sh && source ~/.epirus/source.sh
epirus new
cd Web3App && epirus deploy rinkeby
```

However, we do encourage you to work through the [Quickstart](quickstart.md)!