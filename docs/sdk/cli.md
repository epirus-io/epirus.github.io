# CLI

An Epirus binary is distributed, providing an interactive command line (CLI). It supports a number of key Epirus project features including the creation of:

- Ethereum applications in Java or Kotlin
- OpenAPI services for Ethereum smart contracts

These projects can then be run by the Epirus CLI either natively as an application binary or within a Docker container.

Epirus provides the following infrastructure behind the scenes to make the user process as seamless as possible:

- Public network connectivity (Rinkeby or Ropsten test networks)
- Transaction fee management so the user does not need to be concerned with obtaining Ether to run their application.

Behind the scenes there are some more granular commands that you can also use, including:

- Wallet creation
- Wallet password management
- Ether transfer from one wallet to another
- Generation of Solidity smart contract wrappers
- Generation of unit tests for Java smart contract wrappers
- Smart contract auditing
- Account creation & management

## Installation

The simplest way to install the Epirus CLI is via the following script:

``` shell
curl -L get.epirus.io | sh && source ~/.epirus/source.sh
```

You can verify the installation was successful by running `epirus -v`, which should output as follows:

``` shell
$ epirus -v
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|                     
Version: 1.0.0
Build timestamp: 2020-08-10 22:42:28.435 UTC
```

Alternatively you can download the latest CLI release [here](https://github.com/epirus-io/epirus-cli/releases/latest).

## Project creation

The `epirus new` and `epirus import` commands provide a convenient way to create a new Java or Kotlin project, or OpenAPI service using Epirus's Command Line Tools.

For Java or Kotlin projects, they provide the following functionality:

- Base project creation.
- Generation of a simple *Hello World* Solidity contract or import an existing Solidity project from a file or directory.
- Compilation of the Solidity files.
- Configure the project to use the Gradle build tool.
- Generate Java smart contract wrappers for all provided Solidity files.
- Add the required Epirus dependencies, to run and interact with the contracts.
- Generate unit tests for the Java smart contract wrappers.

In the case of an OpenAPI service, with the command `epirus openapi new`, Epirus creates a runnable OpenAPI service for deploying and interacting with smart contracts via OpenAPI compliant endpoints with full Swagger documentation provided.

Epirus also gives you the ability to do more via:

- Base OpenAPI project creation : `epirus openapi new`.
- Create an OpenAPI project using specific contracts : `epirus openapi import`.
- Generate an OpenAPI executable JAR : `epirus openapi jar`.
- Generate RESTful endpoints and their implementation : `epirus openapi generate`.

### Create a new project

To generate a new project :

``` shell
epirus new [--kotlin|-o <output path>|-n <project name>|-p <package name>] [helloworld|erc777]
``` 

Where supported `new` command arguments are as follows:

- `--kotlin`
  Creation of a new Kotlin project instead of the default Java one
- `helloworld`
  Use a simple Hello World Solidity smart contract (default)
- `erc777`
  Create an [ERC777](https://eips.ethereum.org/EIPS/eip-777) compliant token

The `project name ` and `package name` values must comply with the JVM standards. The project name is also used as the main class name.

If no arguments are specified, the default project creation used is:

``` shell
epirus new helloworld
```

Details of the created project structure are [below](#generated-project-structure).

### Import an existing project

Similarly, to `epirus new`, `epirus import` will create a new  project but with user defined smart contracts. By default a Java project will be generated if no option is provided.

``` shell
epirus import -s <path to solidity sources> [-o <path>|-n <project name>|-p <package name>] -t
```

The `-s` option will work with a single Solidity file or a folder containing Solidity files.
The `-t` option is false by default. By passing `-t` unit tests will be generated for the Java wrappers.

or 

``` shell
epirus import 
```
 
Then, you will be prompted to set the Solidity files directory:
    
``` 

You will be prompted to answer a series of questions to create your project:

``` shell
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|  

Please enter the path to your solidity file/folder [Required Field]: 
/path/to/solidity
Would you like to generate unit test for your solidity contracts [Y/n] ? 
n
...
```

## Running your application

The `epirus run <network>` command can be used to run your application without having to specify an Ethereum network endpoint or wallet yourself. Instead the Epirus Platform is used to provide network connectivity and cover network transaction fees.

To take advantage of this, you simply need to run the followinig command in your project directory:

`epirus run <network>` 

Where `network` is one of the followinig:

- `rinkeby`
- `ropsten`

In order to use this functionality you must be logged in. Behind the scenes, Epirus will build and run your project jar file.

If you created an OpenAPI service, by default it binds to port 9090 on your host. You can access the SwaggerUI for the service via the URL <http://localhost:9090/swagger-ui>.

However, if you'd like your application to be bundled up as a container instead, simply run:

`epirus docker run [-l] <network>`

This will build a container containing your application and inject your Epirus Platform credentials to continue to take advantage of the provided network connectivity and transaction fees. If you use the `-l` parameter, it will not create a new wallet, and use your local wallet for funding transactions.

### Environment variables

A number of properties can be configured for your Epirus applications to customise them at runtime. By default if you use `epirus run` you shouldn't need to alter them, however, for production deployments you may wish to change some of them.

The following configuration properties can be used for Java or OpenAPI projects:

- `WEB3J_ENDPOINT`
  Ethereum node URL
- `WEB3J_WALLET_PATH`
  Path to Ethereum wallet
- `WEB3J_WALLET_PASSWORD`
  Ethereum wallet password
- `WEB3J_PRIVATE_KEY`
  Hex-encoded private key string (0x...) 
  
Additionally, for OpenAPI services, the following properties can be used:

- `WEB3J_OPENAPI_NAME`
  Project name. This will also be the default Open API context path but can be changed through the Open API Gradle plugin.
- `WEB3J_OPENAPI_CONTRACT_ADDRESSES`
  Pre-deployed contract addresses as a comma-separated list of pairs `<contract name>=<hex address>` (ie. Contract1=0x...,Contract2=0x...)
- `WEB3J_OPENAPI_HOST`
  Hostname for service, defaults to `localhost`
- `WEB3J_OPENAPI_PORT`
  Port to bind to, defaults to `9090`

## Running your application without an Epirus account

You can run your Epirus applications without an Epirus account using the following mechanisms. However, in doing this you need to provide node and wallet details manually. Additionally you will have to cover network transaction fees yourself.

### Running with the Java Runtimie Environment (JRE)

These properties can be used as environment variables if running project using the Java JRE:

``` shell
export VAR1=value
...
java -jar <app>.jar
```

You can find the relevent application binary in the following locations:

Java or Kotlin projects:

- `build/libs/<project-name>-0.1.0-all.jar`

OpenAPI projects

- `build/libs/<projectName>-server-all.jar`

### Running with Docker

If running the built container with Docker, you should use the following syntax to pass in environment variables:

``` shell
docker run -e VAR1=value1 -e VAR2=value2 web3app
```

### Running with Gradle

If you wish to use the Gradle build tool to run your application, you should pass in the required variables in using the following syntax, where variable names are in lowercase and understcores are replaced with hyphens in their names.

``` shell
./gradlew run --args="--<var1> <value1> --<var2> <value2> ..."
```

## Generated Java/Kotlin project structure

Your application code and tests will be located in the following project directories:

For Java:

- `src/main/java` - Generated Java application code stub
- `src/test/java` - Generated Java test code stubs
- `src/main/solidity` - Solidity source code

For Kotlin:

- `src/main/kotlin` - Generated Kotlin application code stub
- `src/test/kotlin` - Generated Kotlin test code stubs
- `src/main/solidity` - Solidity source code

If you need to edit the build file, it is located in the project root directory:

- `build.gradle` - Gradle build configuration file

Additionally, there are the following Gradle artifacts which you can ignore.

- `gradle` - local Gradle installation
- `.gradle` - local Gradle cache
- `build` - compiled classes including smart contract bindings

If you need to view any of the generated Solidity or contract artifacts, they are available in the following locations.

Solidity `bin` and `abi` files are located at:

- `<project directory>/build/resources/main/solidity/`

The source code for the generated smart contract bindings can be found at:

- `<project directory>/build/generated/sources/epirus/main/java/<your-package>/generated/contracts`

The compiled code for the generated smart contracts bindings is available at the below location. These are the artifacts used to deploy, transact and query your smart contracts.

- `build/classes/java/main/<your-package>/generated/contracts/`

## Generated OpenAPI project structure

Similar to the Java/Kotlin projects. The Solidity files are located in the following `src/main/solidity`.

Additionally, the generated OpenAPI code resides in `build/generated/sources/web3j/main`, and is structured as follows :
 
- Java smart contract wrappers :  `java/<package name>/wrappers`
- REST endpoints interfaces : `kotlin/<package name>/core`
- REST endpoints implementations : `kotlin/<package name>/server`
- SwaggerUI : `resources/static/swagger-ui`

For the ERC777 OpenAPI generated API, it is not intended to be modified once generated. I.e. it is only meant to be run by the user to deploy and interact directly with the token.

## Build commands

Epirus projects use the Gradle build tool under the covers. Gradle is a build DSL for JVM projects used widely in Java, Kotlin and Android projects. You shouldn't need to be too concerned with the semantics of Gradle beyond the following build commands:

To build the project run:

``` shell
./gradlew build
```

To update just the smart contract bindings following changes to the Solidity code run:

``` shell
./gradlew generateContractWrappers
```

To update the OpenAPI code, when using an OpenAPI project, following changes to the Solidity code run:

``` shell
./gradlew generateWeb3jOpenApi
```

To update the generated SwaggerUI, when using an OpenAPI project, following changes to the Solidity code run:

``` shell
./gradlew generateWeb3jSwaggerUi
```

To delete all project build artifacts, creating a clean environment, run:

``` shell
./gradlew clean
```

## Stand-alone unit test generation

When creating a new project or importing solidity contracts, by using:

``` shell
epirus generate tests
```

You will be prompted to answer a series of questions to generate your tests:

``` shell
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|                     
Please enter the path of the generated contract wrappers.
<source contract wrappers>
Where would you like to save your tests.
<path to tests>
Unit tests were generated successfully at location: .
```
The command can also be used non-interactively

``` shell
epirus generate tests -i <Solidity Java wrappers> -o <output path>
```

When adding the path to your Java wrappers make sure you specify the path up to the package root e.g:
If a class with name HelloWorld and package name `io.epirus` is located under `/home/user/code/myproject/io/epirus/HelloWorld.java`, the correct way to point to that class is `/home/user/code/myproject/`

## Wallet tools

To generate a new Ethereum wallet:

``` shell
$ epirus wallet create
```

To update the password for an existing wallet:

``` shell
$ epirus wallet update <walletfile>
```

To send Ether to another address:

``` shell
$ epirus wallet send <walletfile> 0x<address>|<ensName>
```

When sending Ether to another address you will be asked a series of questions before the transaction takes place. Check below for a full example.

The following example demonstrates using Epirus to send Ether to another wallet.

With the following input:
``` shell
epirus wallet send <walletfile> 0x<address>|<ensName>
```

Epirus proceeds as follows:

``` shell
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|  
Please enter your existing wallet file password:
Wallet for address 0x19e03255f667bdfd50a32722df860b1eeaf4d635 loaded
Please confirm address of running Ethereum client you wish to send the transfer request to [http://localhost:8545/]:
Connected successfully to client: Geth/v1.4.18-stable-c72f5459/darwin/go1.7.3
What amound would you like to transfer (please enter a numeric value): 0.000001
Please specify the unit (ether, wei, ...) [ether]:
Please confim that you wish to transfer 0.000001 ether (1000000000000 wei) to address 0x9c98e381edc5fe1ac514935f3cc3edaa764cf004
Please type 'yes' to proceed: yes
Commencing transfer (this may take a few minutes)...................................................................................................................$

Funds have been successfully transferred from 0x19e03255f667bdfd50a32722df860b1eeaf4d635 to 0x9c98e381edc5fe1ac514935f3cc3edaa764cf004
Transaction hash: 0xb00afc5c2bb92a76d03e17bd3a0175b80609e877cb124c02d19000d529390530
Mined block number: 1849039
```

To fund a wallet on the Rinkeby or Ropsten testnet using the faucets provided by Web3 Labs, use the following command:

``` shell
epirus wallet fund <network name> 0x<address> 
```

For instance, to fund the address `0xc6c7224128b9714b47009be351d0ea5bcb16da29`, on Rinkeby:

``` shell
epirus wallet fund rinkeby 0xc6c7224128b9714b47009be351d0ea5bcb16da29
```

Please note that this functionality requires a proof-of-work based captcha, and is rate-limited. [Rinkeby](https://rinkeby.faucet.epirus.io/),and [Ropsten](https://ropsten.faucet.epirus.io/) Web3 Labs faucets can also be accessed from your browser.


## Auditing Tools

Smart contracts written in Solidity often include logic bugs and other issues which might compromise their security. These are not always obvious to programmers. Issues can include [integer precision problems](https://github.com/smartdec/classification#arithmetic), [re-entrancy attacks](https://github.com/smartdec/classification#contract-interaction), and many other flaws. As Ethereum smart contracts are immutable once they have been deployed, it is important that they are bug-free at this point. Epirus is able to audit smart contracts for certain common issues and vulnerabilities using static code analysis. 

To audit a smart contract (in this instance, Campaign.sol):

``` shell
$ epirus audit Campaign.sol
```

An example of the output from this command is as follows:
``` shell
  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|  
./Campaign.sol
   131:58   severity:2   Multiplication after division                  SOLIDITY_DIV_MUL_09hhh1                              
   91:8     severity:1   Revert inside the if-operator                  SOLIDITY_REVERT_REQUIRE_c56b12                       
   5:4      severity:1   Use of SafeMath                                SOLIDITY_SAFEMATH_837cac                             
   148:4    severity:1   Replace multiple return values with a struct   SOLIDITY_SHOULD_RETURN_STRUCT_83hf3l                 
   125:4    severity:1   Prefer external to public visibility level     SOLIDITY_UNUSED_FUNCTION_SHOULD_BE_EXTERNAL_73ufc1   

✖ 5 problems (5 errors)

```

The output is in the form of a list of issues/errors detected by the static analysis tool. The first column of output shows the line and the character at which the issue was encountered. The second column shows the severity; this ranges from 1 to 3, with 3 being the most severe. The next column contains a description of the issue found, and the final column provides a reference to the rule used to find the issue.


This functionality is provided by [SmartCheck](https://github.com/smartdec/smartcheck).


## Solidity smart contract wrapper generator

Please refer to [solidity smart contract wrappers](https://docs.web3j.io/smart_contracts/#solidity-smart-contract-wrappers).


## Account Creation

If you wish to make use of the more powerful features of Epirus such as deployment, you will need to sign up for a free account via the [Epirus website](https://www.web3labs.com/epirus).

Once your email address has been confirmed, you will have an account on the Epirus platform and will be able to make use of all features.

You will need to be logged in to deploy Epirus applications. Use `epirus login` and follow the prompt to do this.
