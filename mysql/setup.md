
# [Microsoft Visual C++ Redistributable Version](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
## Steps to Download and Install:  
* Click the appropriate link based on your processor type.  
* Run the downloaded file (e.g., vc_redist.x64.exe for x64 or vc_redist.arm64.exe for ARM).  
* Follow the prompts to complete the installation, and restart your computer if prompted.  


# [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)
## Steps to Download and Install
* Choose your operating system (e.g., Windows) and the version (usually MySQL 8.0).  
* Download the installer (preferably the MSI installer for ease of setup) and run it.  
* Follow the installation steps, which will guide you through configuring MySQL Server. Make sure to take note of the root password you set up.


# [MySQL Workbench](https://dev.mysql.com/downloads/windows/installer/8.0.html)
## Steps to Downlode and Install
* Choose the latest version for Windows and download the installer.  
* Run the installer and follow the setup steps to install MySQL Workbench.  
* MySQL Workbench is the GUI tool you can use for connecting to, managing, and querying your MySQL databases.  


# Start and Configure MySQL Server
## Start MySQL Installer:
* After installing MySQL using the MSI installer, launch the MySQL Installer.  
* If the MySQL Server is not started automatically, you can start it from the MySQL Installer interface.

## Configure MySQL Server:
* You will be asked to choose the Setup Type. Select Developer Default for a development environment, which includes all necessary tools (e.g., MySQL Server, MySQL Workbench, and more).  
* Choose the configuration options:  
  * Server Configuration Type: Select Development Machine (this is for local development).  
  * Authentication Method: Choose Use Strong Password Encryption for Authentication.   
  * Root Password: Set the root password (e.g., root123), which is the default MySQL administrative account. You will need to remember this password for logging in to MySQL via Workbench and command line.  
  * Configure MySQL as a Windows Service: This allows MySQL to start automatically when your computer starts.
 

## Complete Configuration:
* Once you've configured the options, proceed with the remaining steps to finish setting up MySQL Server. The installation will complete, and you will be able to run MySQL on your local machine.

# Open MySQL Workbench to Start Writing Queries
## Launch MySQL Workbench:
* Open MySQL Workbench from the Start Menu (or search for it).  
* When you launch MySQL Workbench, you will see a "MySQL Connections" window. This is where you can set up connections to your local MySQL server.  
* Connect to MySQL Server:

  * Click on the + icon next to "MySQL Connections" to create a new connection.  
  * In the connection setup window:
  ```
  Connection Name: Give your connection a name (e.g., "Local MySQL").
  Connection Method: Leave this as Standard (TCP/IP).
  Hostname: Enter localhost (since the MySQL server is running locally).
  Port: Use the default port 3306.
  Username: Use root (the default MySQL administrative username).
  Password: Enter the password you set during the MySQL server configuration (e.g., root).
  ```
  
  * Test Connection: Click on Test Connection to ensure everything is configured correctly. If the connection is successful, you should see a confirmation message.
 

## Start Writing Queries:
* Once the connection is successful, click OK to save the connection.  
* Now, click on the connection you just created to open a new SQL query tab. 
 
* In the SQL editor, you can start writing your MySQL queries. For example, to show the databases, you can run:
```mysql
show databases;
```
