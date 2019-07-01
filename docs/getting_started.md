# Getting Started

Epirus supports a number of different hosting options which all come with support from the 
Web3 Labs team. You can find it in the Azure Marketplace, with a free trial, and we also 
provide hosted SaaS versions with authenticated access.


## Azure

The [Azure Marketplace offer](https://web3labs.com/azure-offer) is the simplest full version of Epirus 
to get up and running with. It requires an active Azure cloud subscription

![Azure Marketplace offer](img/azure_offer.png)

You will need to provide details of your managed ledger (or Ethereum/Quorum) node. In your Azure portal, navigate to the Azure Blockchain Service instance you wish to use. From here click `Transaction nodes -> <your-transaction-node> -> Connection strings`

Then copy the HTTPS access keys with node URL, such as `https://<your-service>.blockchain.azure.com:3200/<acess-key>`

You will be able to access the Explorer UI via `http://<instance-name>.<region>.cloudapp.azure.com`

To view the actual URL, navigate to the Overview page for the resource group you used for Epirus, then head to `Deployments -> blk-technologies.... -> Outputs -> epirusUrl`.

Please allow a few minutes for the service to fully initialise and display data when initially run. You will see the below loading screen while it is initially loading.

![loading screen](img/loading.png)

Please note, it can take a while (multiple hours) to display token and contract details as it needs to process the entire blockchain history.


## Enterprise

Web3 Labs also provides hosted Blockchain Explorer instances - these can be hosted within your cloud subscription or hosted by us.

Some of the features include:

- SSO authentication (Active Directory, SAML, Okta, etc)
- Dedicated database
- Data encryption at rest and in transit
- Continuous backup and point in time data recovery
- Full access to backups
- Tableau integration support 

For further information please [email us](mailto:hi@web3labs.com). 


## Free 

A free, feature limited version of Epirus is available [here](https://github.com/blk-io/epirus-free). This version is updated periodically, unlike the Azure and SaaS offerings which are constantly being updated with the latest features.
