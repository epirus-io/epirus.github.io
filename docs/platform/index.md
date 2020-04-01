# Overview & QuickStart

The Epirus platform consists of a suite of tools and services to enable rapid and efficent development, deployment and monitoring of blockchain applications.   

The Epirus CLI allows you to create and deploy new blockchain applications as a developer on your local machine. Epirus simplifies the creation of smart contracts & their integration with your application logic. Once development is completed, the CLI allows you to deploy and monitor your contracts with ease.


## Installation
To install the Epirus CLI on your local machine (MacOS, Windows & Linux supported), run the following:

```
curl -L get.epirus.io | sh && source ~/.epirus/source.sh
```

## QuickStart
To get up & running fast with Epirus, this quickstart will guide you through the account creation process, and subsequently the process of setting up a new Ethereum smart contract project.

In order to create a new account, use the command `epirus account create`, and enter your email address when prompted. You will be sent an activation email. Once your email address has been confirmed, you will have an account on the Epirus platform and will be able to make use of all features.

After having created a new account, use the command `epirus new` to create a new project. Epirus will use sensible defaults for all the questions asked during the project setup process, so if you hit enter on each question, the output should be similar to the following:
```
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|                     
Please enter the project name [Web3App]:

Please enter the package name for your project [io.epirus]:

Please enter the destination of your project [/home/user/project]: 

[ \ ] Creating Web3App
Project Created Successfully

Project information
Wallet Address      0xd66aa9b52a33f0318fbe609142db46156c176c04

Commands
./gradlew run       Runs your application
./gradlew test      Test your application
epirus deploy       Deploys your application
```

Epirus has now created a new project using Gradle, which includes a demo smart contract, and all the necessary code to interact with it, test it, and deploy it. Using the `epirus deploy` command, you will be able to deploy your code to the Rinkeby and Ropsten Ethereum test networks, from the wallet address that Epirus generated for you (this wallet will be automatically funded with testnet Ether by Epirus during the contract deploy process).
