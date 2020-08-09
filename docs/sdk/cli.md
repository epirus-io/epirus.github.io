# CLI

An Epirus binary is distributed, providing an interactive command line (CLI). It supports a number of key Epirus project features including:

- New Java or Kotlin project creation using a Hello World smart contract or existing contract(s)
- The ability to run your project againist a live network without having to manage network connectivity or transaction fees yourself
- Java binary or Dockerized deployment

Behind the scenes there are some more granular commands that you can also use, includinig:

- Wallet creation
- Wallet password management
- Ether transfer from one wallet to another
- Generation of Solidity smart contract wrappers
- Generation of unit tests for Java smart contract wrappers
- Smart contract auditing
- Account creation & management
- Wallet funding

## Installation

The simplest way to install the Epirus CLI is via the following script:

``` shell
curl -L get.epirus.io | sh && source ~/.epirus/source.sh
```

You can verify the installation was successful by running `epirus version`, which should output as follows:

``` shell

  ______       _                
 |  ____|     (_)               
 | |__   _ __  _ _ __ _   _ ___ 
 |  __| | '_ \| | '__| | | / __|
 | |____| |_) | | |  | |_| \__ \
 |______| .__/|_|_|   \__,_|___/
        | |                     
        |_|                     
Version: 0.9.1
Build timestamp: 2020-03-31 11:39:28.526 UTC
```

Alternatively you can download the latest CLI release [here](https://github.com/epirus-io/epirus-cli/releases/latest).

## Project creation

The `epirus new` and `epirus import` commands provide a convenient way to create a new Kotlin/Java project using Epirus's Command Line Tools.

These commands provide the following functionality:

- Creation of a new Java/Kotlin project.
- Generation of a simple *Hello World* Solidity contract or import an existing Solidity project from a file or directory.
- Compilation of the Solidity files.
- Configure the project to use the Gradle build tool.
- Generate Java smart contract wrappers for all provided Solidity files.
- Add the required Epirus dependencies, to deploy and interact with the contracts.
- Generate unit tests for the Java smart contract wrappers.


### Create a new project

To generate a new project interactively:

``` shell
epirus new [--java|--kotlin]
``` 

Where supported `new` command arguments are as follows:

- `--java`
  Creation of a new Java project
- `--kotlin`
  Creation of a new Kotlin project

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
Please enter the project name [Web3App]:

Please enter the package name for your project [io.epirus]:

Please enter the destination of your project [/home/user/project]: 

[ | ] Creating Web3App
Project Created Successfully

Commands
./gradlew test               Test your application
epirus run <network>         Runs your application
epirus docker run <network>  Runs a dockerized version of your application
```

Details of the created project structure are [below](#generated-project-structure).


Or using non-interactive mode:

``` shell
epirus new [--java|--kotlin] -n <project name> -p <package name> [-o <path>]
```

The `-o` option can be omitted if you want to generate the project in the current directory.

The `project name ` and `package name` values must comply with the JVM standards. The project name is also used as the maini class name.


### Import an existing project

Similarly to `epirus new`, `epirus import` will create a new  project but with user defined smart contracts. By default a Java project will be generated if an option is not provided.

Again, to generate a new project interactively:

``` shell
epirus import [--java|--kotlin]
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
Please enter the project name [Web3App]:
MyImportedProject
Please enter the package name for your project [io.epirus]:

Please enter the path to your solidity file/folder [Required Field]: 
/path/to/solidity
Please enter the destination of your project [/home/user/Documents/myfolder]: 
.
Would you like to generate unit test for your solidity contracts [Y/n] ? 
n
Project created with name: myimportedproject at location: .
$
```

This command can also be used non-interactively

``` shell
epirus import -n <project name> -p <package name> -s <path to solidity sources> [-o <path>] -t
```

or 

``` shell
epirus import 
```

The `-s` option will work with a single Solidity file or a folder containing solidity files.
The `-t` option is false by default. By passing `-t` unit tests will be generated for the java wrappers.

## Running your application

The `epirus run <network>` command can be used to run your application without having to specify an Ethereum network endpoint or wallet yourself. Instead the Epirus Platform is used to provide network connectivity and cover network transaction fees.

To take advantage of this, you simply need to run the followinig command in your project directory:

`epirus run <network>` 

Where `network` is one of the followinig:

- `rinkeby`
- `ropsten`

In order to use this functionality you must be logged in. Behind the scenes, Epirus will build and run your project jar file.

However, if you'd like your application to be bundled up as a container instead, simply run:

`epirus docker run <network>`

This will build a container containing your application and inject your Epirus Platform credentials to continue to take advantage of the provided network connectivity and transaction fees.


### Stand-alone unit test generation

When creating a new project or importing solidity contracts, by using:

``` shell
epirus generate-tests
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
epirus generate-tests -i <Solidity Java wrappers> -o <output path>
```

When adding the path to your Java wrappers make sure you specify the path up to the package root e.g:
If a class with name HelloWorld and package name `io.epirus` is located under `/home/user/code/myproject/io/epirus/HelloWorld.java`, the correct way to point to that class is `/home/user/code/myproject/`

## Generated project structure

Your application code and tests will be located in the following project directories:

For Java:

- `./src/main/java` - Generated Java application code stub
- `./src/test/java` - Generated Java test code stub
- `./src/main/solidity` - Solidity source code

For Kotlin:

- `./src/main/kotlin` - Generated Kotlin application code stub
- `./src/test/kotlin` - Generated Kotlin test code stub
- `./src/main/solidity` - Solidity source code

If you need to edit the build file, it is located in the project root directory:

- `./build.gradle` - Gradle build configuration file

Additionally there are the following Gradle artifacts which you can ignore.

- `/gradle` - local Gradle installation
- `/.gradle` - local Gradle cache
- `/build` - compiled classes including smart contract bindings

If you need to view any of the generated Solidity or contract artifacts, they are available in the following locations.

Solidity `bin` and `abi` files are located at:

- `./build/resources/main/solidity/`

The source code for the generated smart contract bindings can be found at:

- `./build/generated/source/epirus/main/java/<your-package>/generated/contracts`

The compiled code for the generated smart contracts bindings is available at the below location. These are the artifacts that you use to deploy, transact and query your smart contracts.

- `./build/classes/java/main/<your-package>/generated/contracts/`


## Build commands

Epirus projects use the Gradle build tool under the covers. Gradle is a build DSL for JVM projects used widely in Java, Kotlin and Android projects. You shouldn't need to be too concerned with the semantics of Gradle beyond the following build commands:

To build the project run:

``` shell
./gradlew build
```

To update the just the smart contract bindings following changes to the Solidity code run:

``` shell
./gradlew generateContractWrappers
```

To delete all project build artifacts, creating a clean environment, run:

``` shell
./gradlew clean
```


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

When sending Ether to another address you will be asked a series of questions before the transaction takes place. See the below for a full example

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

Please note that this functionality requires a proof-of-work based captcha, and is rate-limited. [Rinkeby](https://rinkeby.faucet.epirus.io/) and [Ropsten](https://ropsten.faucet.epirus.io/) Web3 Labs faucets can also be accessed from your browser.


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