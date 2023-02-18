# Additional instruction to set up environment in Windows Subsystem for Linux

In addition to the general dependencies listed on the DEVELOPING documentation, a few extra steps are needed to set up a development environment in Windows. This environment uses the Windows Subsystem for Linux, so first that and a Linux distribution must be [installed](https://www.windowscentral.com/how-install-linux-distros-windows-10). These instructions have been testing using Ubuntu 18.04 LTS running on WSL.

Once it is installed, you need to install a few more required components. To get the versions you need, use the following commands from a Linux prompt.

## Node ^16.0.0
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash –
    sudo apt-get update
    sudo apt-get install nodejs
 
## node-gyp
    npm install -g node-gyp
 
## Yarn >=1.5.1
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add –
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
 
## make
    sudo apt-get install make
 
## gcc
    sudo apt-get install gcc
 
## g++
    sudo apt-get install g++
