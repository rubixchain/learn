## MacOS

1) Download the setup for installing all the dependencies for setting up Rubix node from the link below.

    [MacOS](https://github.com/rubixchain/rubixnetwork/blob/master/setupscripts/OneClickSetup/RubixOneClickSetup-MacOS)

2) Open a fresh instance of terminal under download path and run the following commands (without $)

    a) $ chmod +x RubixOneClickSetup-MacOS
    
    b) $ ./RubixOneClickSetup-MacOS
    
    c) Provide user password when asked

3) After the setup is completed open a new terminal and try the following commands (without $) :
    
    a)  
    ```
    ipfs --version 
    ```
    
    Expected result:
    >ipfs version 0.6.0


    b)
    ```
    java --version
    ```
    Expected result:

    >openjdk 11.0.2 2019-01-15  
     OpenJDK Runtime Environment 18.9 (build 11.0.2+9)  
    >OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)
         
    c) 
    ```
    ipfs bootstrap list  
    ```
    
    Expected result:
    >/ip4/115.124.117.37/tcp/4001/p2p/QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV  
    /ip4/13.76.134.226/tcp/4001/p2p/QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib
        
     d) 
     ```
     cat ~/.ipfs/swarm.key
     ```
     Expected result:
     >/key/swarm/psk/1.0.0/  
     /base16/  
     278b9a199c43fa84178920bd9f5cbcd69e933ddf02a8f69e47a3ea5a1705512f
        
     
     e) 
     ```
     ipfs daemon
     ```
     Expected result:
     >Initializing daemon...  
     go-ipfs version: 0.6.0  
        Repo version: 10  
        System version: amd64/darwin  
        Golang version: go1.14.4  
        Swarm is limited to private network of peers with the swarm key  
        Swarm key fingerprint: *****************  
        Swarm listening on /ip4/***.***.***.***/tcp/****  
        Swarm listening on /ip4/***.***.***.***/****  
        Swarm listening on /ip4/***.***.***.***/tcp/****  
        Swarm listening on /ip4/***.***.***.***/tcp/****  
        Swarm listening on /ip6/::1/tcp/****  
        Swarm listening on /p2p-circuit  
        Swarm announcing /ip4/***.***.***.***/tcp/****  
        Swarm announcing /ip4/***.***.***.***/tcp/****  
        Swarm announcing /ip4/***.***.***.***/tcp/****  
        Swarm announcing /ip6/::1/tcp/****  
        API server listening on /ip4/***.***.***.***/tcp/****  
        WebUI: http://127.0.0.1:5001/webui  
        Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/****  
        Daemon is ready  
        
   
 4) Now open a new terminal and try the following commands :
   
     a)
     ```
     ipfs swarm connect /ip4/115.124.117.37/tcp/4001/p2p/QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV
     ```
     
     Expected result:
     >connect QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV success


     b)
     ```
     ipfs swarm connect /ip4/13.76.134.226/tcp/4001/p2p/QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib
     ```
     Expected result:
     >connect QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib success
     
5) If the output of all the commands are as shown above, then the dependency setup is complete and you are on the final stage of setting up Rubix node.

6) The final step is to download the Rubix GUI wallet setup or the Rubix jar according to your preference.The link is given below.

    Download latest version of Rubix GUI Wallet from [here](https://github.com/rubixchain/wallet/releases)

    Download latest version of Rubix jar from [here](https://github.com/rubixchain/rubixnetwork/releases)
    
    
  ###Known Issue
    You need System Integrity Protection to be disabled

    It's simply can be done following this steps:

    Boot your Mac in recovery mode (with holding Command+R);
    Check the status: csrutil status (System Integrity Protection (SIP));
    To disable protection run the following command: csrutil disable;
    Reboot the system again.
