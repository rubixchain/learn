## Linux

1) Download the setup for installing all the dependencies for setting up Rubix node from the link below.

    [Linux](https://github.com/rubixchain/rubixnetwork/blob/master/setupscripts/OneClickSetup/RubixOneClickSetup-Linux)

2) Open a fresh instance of terminal under download path and run the following commands (without $)

    a) $ chmod +x RubixOneClickSetup-Linux
  
    b) $ ./RubixOneClickSetup-Linux
  
    c) Provide user password when asked 

3) After the setup is completed open a new terminal and try the following commands (without $) :
    
    a) $ ipfs --version
    ``` 
        ipfs version 0.6.0
        
     ```
       
    b) $ java --version
    ```
         openjdk 11.0.2 2019-01-15
         OpenJDK Runtime Environment 18.9 (build 11.0.2+9)
         OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)
         
    ```
    c) $ ipfs bootstrap list
     ```
        /ip4/115.124.117.37/tcp/4001/p2p/QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV
        /ip4/13.76.134.226/tcp/4001/p2p/QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib
        
     ```
     d) $ cat ~/.ipfs/swarm.key
     ```
        /key/swarm/psk/1.0.0/
        /base16/
        278b9a199c43fa84178920bd9f5cbcd69e933ddf02a8f69e47a3ea5a1705512f
        
     ```
     e) $ ipfs daemon
     ```
        Initializing daemon...
        go-ipfs version: 0.6.0
        Repo version: 10
        System version: amd64/linux
        Golang version: go1.14.4
        Swarm is limited to private network of peers with the swarm key
        Swarm key fingerprint: a5ef5059eede91e09c9994d112fd1e05
        Swarm listening on /ip4/10.10.3.107/tcp/4001
        Swarm listening on /ip4/127.0.0.1/tcp/4001
        Swarm listening on /ip4/169.254.15.195/tcp/4001
        Swarm listening on /ip4/169.254.242.48/tcp/4001
        Swarm listening on /ip6/::1/tcp/4001
        Swarm listening on /p2p-circuit
        Swarm announcing /ip4/10.10.3.107/tcp/4001
        Swarm announcing /ip4/103.60.213.75/tcp/2613
        Swarm announcing /ip4/127.0.0.1/tcp/4001
        Swarm announcing /ip6/::1/tcp/4001
        API server listening on /ip4/127.0.0.1/tcp/5001
        WebUI: http://127.0.0.1:5001/webui
        Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
        Daemon is ready
        
   ```
 4) Now open a new terminal and try the following commands :
   
     a) $ ipfs swarm connect /ip4/115.124.117.37/tcp/4001/p2p/QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV
     ```
        connect QmWXELAoKJsCMFoW3j6pFmXEhouwKgWiK7wN6uLyuX6ULV success
     ```  
     b) $ ipfs swarm connect /ip4/13.76.134.226/tcp/4001/p2p/QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib
     ```
        connect QmYthCYD5WFVm6coBsPRGvknGexpf9icBUpw28t18fBnib success
     ```
        
     
     
     

