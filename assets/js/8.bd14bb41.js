(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{426:function(t,a,e){t.exports=e.p+"assets/img/portal_contracts.17fd4514.png"},427:function(t,a,e){t.exports=e.p+"assets/img/explorer_contract.a8c55dce.png"},428:function(t,a,e){t.exports=e.p+"assets/img/explorer_helloworld.28d94222.png"},429:function(t,a,e){t.exports=e.p+"assets/img/explorer_wallet.cde95ba2.png"},430:function(t,a,e){t.exports=e.p+"assets/img/explorer_dashboard.583247bc.png"},449:function(t,a,e){"use strict";e.r(a);var s=e(9),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quickstart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" QuickStart")]),t._v(" "),s("p",[t._v("The Epirus Platform consists of a suite of tools and services to enable rapid and efficient development, deployment and monitoring of blockchain applications.")]),t._v(" "),s("p",[t._v("All it takes is three commands to go from zero to having your first live blockchain application:")]),t._v(" "),s("ol",[s("li",[t._v("Install the Epirus SDK")]),t._v(" "),s("li",[t._v("Create your first applicaiton")]),t._v(" "),s("li",[t._v("Run your application against a live public network")])]),t._v(" "),s("p",[t._v("Read on to super-charge your blockchain journey!")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("To install the Epirus CLI run the following command in your terminal:")]),t._v(" "),s("CodeSwitcher",{attrs:{languages:{shell:"Mac/Linux",powershell:"Windows"}},scopedSlots:t._u([{key:"shell",fn:function(){return[s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L get.epirus.io "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.epirus/source.sh\n")])])])]},proxy:!0},{key:"powershell",fn:function(){return[s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" Bypass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Process")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/epirus-io/epirus-installer/master/installer.ps1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),s("p",[t._v("Alternatively, you can head "),s("a",{attrs:{href:"https://github.com/epirus-io/epirus-cli/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" to download the latest release.")]),t._v(" "),s("h2",{attrs:{id:"project-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-creation"}},[t._v("#")]),t._v(" Project Creation")]),t._v(" "),s("p",[t._v("After having created a new account, use the command "),s("code",[t._v("epirus new")]),t._v(" to create a new Hello World blockchain application for Ethereum. Epirus will use sensible defaults for all the questions asked during the project setup process, so if you hit enter on each question, the output should be similar to the following:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus new\n  ______       _                \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__   _ __  _ _ __ _   _ ___ \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| | '")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("______"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" .__/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__,_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("___/\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating and building project "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". Subsequent builds will be faster\n\nProject Created Successfully\n\nCommands\n./gradlew "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("                          Test your application\nepirus run rinkeby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ropsten              Runs your application\nepirus docker run rinkeby"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ropsten       Runs your application "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a docker container\n")])])]),s("p",[t._v("Epirus has now created and built a full project, which includes a "),s("em",[t._v("Hello World")]),t._v(" smart contract, and all the necessary code to interact with it, test it, and run it.")]),t._v(" "),s("p",[t._v("Alternatively, if you'd like to try a more advanced option, you can run:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus openapi new erc777\n")])])]),s("p",[t._v("This will create an OpenAPI service for deploying and managing ERC777 compliant tokens on the Ethereum network.\nOther alternatives, such as ERC20 contracts, will be discussed below.")]),t._v(" "),s("p",[t._v("Check the "),s("a",{attrs:{href:"https://docs.web3j.io/latest/web3j_openapi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web3j-OpenAPI"),s("OutboundLink")],1),t._v(" documentation for more information.")]),t._v(" "),s("h2",{attrs:{id:"account-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account-creation"}},[t._v("#")]),t._v(" Account Creation")]),t._v(" "),s("p",[t._v("If you wish to make use of the more powerful features of Epirus such as its node connectivity and transaction fee management, you will need to sign up for a free account via the "),s("a",{attrs:{href:"https://www.web3labs.com/epirus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Epirus website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Once your email address has been confirmed, you will have an account on the Epirus platform and will be able to make use of all features.")]),t._v(" "),s("p",[t._v("You will need to be logged in to deploy Epirus applications. Use "),s("code",[t._v("epirus login")]),t._v(" and follow the prompt to do this.")]),t._v(" "),s("h2",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),s("p",[t._v("Using the "),s("code",[t._v("epirus run")]),t._v(" command, you will be able to run your application against the Rinkeby and Ropsten Ethereum test networks.")]),t._v(" "),s("p",[t._v("This application will transact with the network via a local wallet that Epirus generated for you, the wallet will automatically be funded with testnet Ether by Epirus when you deploy and transact with your application contract.")]),t._v(" "),s("p",[t._v("Connectivity to the relevant network is also provided by Epirus.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus run rinkeby\n  ______       _                \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__   _ __  _ _ __ _   _ ___ \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| | '")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("______"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" .__/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__,_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("___/\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \nPreparing to run your Web3App\n\nAccount status      ACTIVE \nWallet balance      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0984925612")]),t._v(" ETH\nUploading metadata  DONE\n\nRunning your Web3App\n\nContract address    https://rinkeby.epirus.io/contracts/0xa12dda51eac72ffd6dc4f9ccc6fb6bbdd8b97892\nWallet address      https://rinkeby.epirus.io/accounts/0x1f17c4af8313f5923a05b1dc6c262bb0b9c90c27\n")])])]),s("p",[t._v("Once completed you can use the provided links to examine your live blockchain application and account!")]),t._v(" "),s("p",[t._v("If you created an OpenAPI service, you will be able to access it via "),s("a",{attrs:{href:"http://localhost:9090/swagger-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9090/swagger-ui"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"containerised-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#containerised-deployment"}},[t._v("#")]),t._v(" Containerised deployment")]),t._v(" "),s("p",[t._v("Epirus also provides containerised deployment, packaging up the application into a Docker image. This is achieved via the "),s("code",[t._v("epirus docker")]),t._v(" command.")]),t._v(" "),s("h3",{attrs:{id:"building-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-a-container"}},[t._v("#")]),t._v(" Building a container")]),t._v(" "),s("p",[t._v("To build a new Docker image, use "),s("code",[t._v("epirus docker build")]),t._v(" in your project directory:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ epirus docker build\n  ______       _                \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("__   _ __  _ _ __ _   _ ___ \n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_ \\| | '")]),t._v("__"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("______"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" .__/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("__,_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("___/\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                     \nSending build context to Docker daemon  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(".19MB\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" FROM ubuntu as Build\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bb0eaf4eee00\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" COPY "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /root/app\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" d026d00a2b22\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" RUN "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y \t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" openjdk-11-jre \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /var/cache/apk/* \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L get.epirus.io "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" /root/.epirus/epirus \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root/app \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./gradlew generateContractWrappers\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 29dc085b698c\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" FROM alpine\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a24bb4013296\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" COPY --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Build /root /root/\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 871dbb346cb2\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" RUN apk "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --no-cache "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" openjdk11-jre\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /var/cache/apk/* \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /opt/app\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 012de0ea89e4\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" WORKDIR /root/app\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 0f75612f7a98\nStep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("/8 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ENTRYPOINT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/root/.epirus/epirus"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"run"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rinkeby"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Using cache\n ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 0b206554fa1e\nSuccessfully built 0b206554fa1e\nSuccessfully tagged web3app:latest\n")])])]),s("p",[t._v("Once built, you can run your container using the "),s("code",[t._v("epirus docker run <network>")]),t._v(" command.")]),t._v(" "),s("h3",{attrs:{id:"running-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-locally"}},[t._v("#")]),t._v(" Running locally")]),t._v(" "),s("p",[t._v("Use the "),s("code",[t._v("-l")]),t._v(" (local) parameter to run the container using the default wallet file configured for Epirus ("),s("code",[t._v("~/.epirus/.config")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("epirus docker run -l "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("network"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"running-externally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-externally"}},[t._v("#")]),t._v(" Running externally")]),t._v(" "),s("p",[t._v("To run in an external environment, such as a Kubernetes cluster, you will need to ensure that the credentials used by the project are defined - transaction fees will still be maintained by Epirus.")]),t._v(" "),s("p",[t._v("To do so, you can either specify a wallet via defining the following variable:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("WEB3J_WALLET_PATH")]),t._v("\nPath to Ethereum wallet")]),t._v(" "),s("li",[s("code",[t._v("WEB3J_WALLET_PASSWORD")]),t._v("\nEthereum wallet password")])]),t._v(" "),s("p",[t._v("Or use private key:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("WEB3J_PRIVATE_KEY")]),t._v("\nHex-encoded private key string (0x...)")])]),t._v(" "),s("p",[t._v("Same goes for running an OpenAPI service.")]),t._v(" "),s("p",[t._v("If you need to create a new wallet, you can use the "),s("code",[t._v("epirus wallet create")]),t._v(" command. Further details are available "),s("RouterLink",{attrs:{to:"/sdk/cli/#wallet-tools"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("p",[t._v("Then you can run the container as follows:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("epirus docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("network"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"running-without-an-epirus-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-without-an-epirus-account"}},[t._v("#")]),t._v(" Running without an Epirus account")]),t._v(" "),s("p",[t._v("If you wish to run your Epirus applications without creating an Epirus account, you can use the Gradle, Java or Docker application runners to run them manually. However, you will need to provide environment variables or configuration parameters with details of the following configuration items:")]),t._v(" "),s("ul",[s("li",[t._v("Ethereum wallet or private key")]),t._v(" "),s("li",[t._v("Ethereum node endpoint")])]),t._v(" "),s("h3",{attrs:{id:"required-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-properties"}},[t._v("#")]),t._v(" Required properties")]),t._v(" "),s("p",[t._v("The below configuration properties can be used for Java, Kotlin or OpenAPI projects:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("WEB3J_ENDPOINT")]),t._v("\nEthereum node URL")]),t._v(" "),s("li",[s("code",[t._v("WEB3J_PRIVATE_KEY")]),t._v("\nHex-encoded private key string (0x...)")]),t._v(" "),s("li",[s("code",[t._v("WEB3J_WALLET_PATH")]),t._v("\nAlternatively, a wallet file can be provided")]),t._v(" "),s("li",[s("code",[t._v("WEB3J_WALLET_PASSWORD")]),t._v("\nPassword for the provided wallet file")])]),t._v(" "),s("p",[t._v("You can refer to the instructions "),s("RouterLink",{attrs:{to:"/sdk/cli/#running-your-application-without-an-epirus-account"}},[t._v("here")]),t._v(" for further details.")],1),t._v(" "),s("h2",{attrs:{id:"monitoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),s("p",[t._v("Monitoring your application is achieved via the Epirus Explorer.")]),t._v(" "),s("p",[t._v("You can login to the "),s("a",{attrs:{href:"https://portal.epirus.io/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Epirus Portal"),s("OutboundLink")],1),t._v(" to see details of the contracts you have deployed.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(426),alt:"View contracts in Epirus Portal"}})]),t._v(" "),s("p",[t._v("From here you can navigate to the Epirus Explorer for information about the transaction associated with your contracts.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(427),alt:"View contract in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("There will be a single transaction which was the transaction that deployed your contract.")]),t._v(" "),s("p",[t._v("If you hover over the "),s("code",[t._v("constructor")]),t._v(" field you will see the Hello World message that was in your smart contract that has now been deployed to the globally decentralized public Ethereum network!")]),t._v(" "),s("p",[s("img",{attrs:{src:e(428),alt:"View Hello World in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("The other view provides details of all transactions associated with your recently created wallet file. This was created when you ran the "),s("code",[t._v("epirus new")]),t._v(" command, and funded with the cryptocurrency Ether when you ran "),s("code",[t._v("epirus run")]),t._v(" as the created project deploys a real Hello World smart contract when it runs. This funding activity allows you to pay for transactions on the public Ethereum network.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(429),alt:"View wallet in Epirus Explorer"}})]),t._v(" "),s("p",[t._v("Finally, click on the Dashboard link in Epirus Explorer to see an overview of the public Ethereum network your contract was deployed to.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(430),alt:"Epirus Explorer Dashboard"}})]),t._v(" "),s("p",[t._v("You can learn more about the Epirus Explorer "),s("a",{attrs:{href:"/explorer"}},[t._v("here")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("From here you'll probably want to start digging further through the project code created by the Epirus SDK and experimenting with some of the other CLI options. Read more "),s("a",{attrs:{href:"/sdk/cli"}},[t._v("here")]),t._v(".")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);