# Frequently Asked Questions

## Where can I get support?

Please [email us](mailto:support@web3labs.com) with your query and a member of our team will come back to you promptly.

## Is it possible to customise Epirus?

Yes, its possible to customise numerous parts of Epirus, including the logos, colors and currency that users see. Please [email us](mailto:support@web3labs.com) for more information.
        
## Are you hiring?
    
Please head to our [jobs portal](https://angel.co/company/web3labs/jobs) for current listings.

## Error: When running `epirus run` I receive an error: `Invalid response received: 502`

The console output after running `epirus run <network>` shows:

``` shell
Running your Web3App

Exception in thread "main" java.lang.RuntimeException: org.web3j.protocol.exceptions.ClientConnectionException: Invalid response received: 502; <html>
<head><title>502 Bad Gateway</title></head>
<body>
<center><h1>502 Bad Gateway</h1></center>
<hr><center>openresty/1.15.8.2</center>

```

Try running `epirus logout` followed by `epirus run <network>` again to refresh your login.
