---
title: General and server security guidelines
sidebar_position: 5
description: General security measures. Cyberattacks and fraud protection. Server protection.
keywords:
  - Security
  - Wallet
  - Password
  - Server
  - Protection
  - Fraud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

Navigating the internet and being part of a crypto project can be exciting! But it's crucial to use best security practices. Here is a general guide to security and safety advice, including basic measures for securing servers and home PCs. This is your contribution to keeping Subspace network up and running and of course the safety of the community's cryptoassets. 

Enjoy Subspace journey with peace of mind!


# Wallet security

### Passwords
*
 Be sure to make the password long enough, combining both registers letters, numbers and special characters. An 11-character password increases the bruteforce attack time to normally impossible limit but please take a look at [passwords brutforce time illustrating table](https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-password-could-be-cracked-in-just-a-few-minutes-770x404.jpg). However, even a complex password is not all, that is required for proper protection. This will be discussed in this article.
*
 Avoid using common or easily guessed combinations of words or letters, as well as parts of your online data or reusing any of your existing passwords.

Weak password example:
```
S0methin9C00l!
```
Strong password example:
```
^p$O_~a!4h{G'9C*
```
*
 Consider using a password manager to generate complex passwords and store them securely. There are plenty of password managers available. Ensure that your choice stores data in encrypted form, boasts a robust password generator, receives positive reviews, and has a history of consistent updates. **For example, well-regarded options include KeePass, Bitwarden, 1Password, LastPass, Dashlane, and Keeper.**
 However, it's crucial to do your own research and consult ratings before making a decision.
*
 Do not share your 12-word seed phrase or private keys.
*
 A hardware wallet is by far the most secure way to store your private keys. Unlike online exchanges and wallets, hardware wallets store the keys offline and protect from potential malware or hacking attempts.
The most popular hardware wallets are [Ledger](https://www.ledger.com/) and [Tresor](https://trezor.io/).
*
 Backup your wallets: store the backups securely offline or in encrypted cloud storage. This ensures hat you can recover your funds in case of device loss, damage, or theft. There are also many encrypted cloud storage services available, like Tresorit, pCloud, Sync.com, SpiderOak, Mega (order does not matter). But always do your own research.
*
 Be cautious of public Wi-Fi.
*
 Keep all software up to date.
*
 If possible, enable 2FA (two-factor authentication) for all your cryptocurrency accounts and wallets. This provides an extra layer of security by requiring a second verification step, such as a code from a mobile app or hardware token, in addition to a password.
*
 Secure your devices! And here's a little basic guide for servers and home PCs.

# Community security
*
 Remember: Subspace team members will never send you any direct messages first. If this happens to you, ignore the message, block the sender, and report the incident to our ["scam report" channel](https://discord.com/channels/864285291518361610/982023010405990400)
*
 Be ware of fishing attacks.
Do not click on any links on our forum, Discord or Telegram, unless these links are posted by one of the team members (ambassadors or staff). Scammers may create fake links looking like legit websites, so the easiest way to stay safe is to avoid such messages at all.

# Server securing

### SSH RSA keys-based secure authentication

Let's run through some basics.

SSH is a network protocol used for secure remote access to computer systems, cloud infrastructure, secure file transfer (SFTP), and tunneling. It's a fundamental tool for system administrators and developers. SSH uses the Diffie-Hellman algorithm for secure connections and authentication methods like password or SSH key pairs. 

SSH Connection Establishment:

    When a client initiates a TCP connection, the server responds with supported protocol versions and its public host key.
    Both parties negotiate a session key using the Diffie-Hellman algorithm to ensure secure communication. This session key encrypts the entire session.

User Authentication:

    After establishing session encryption, user authentication begins.
    Password authentication involves securely transmitting the user's account password.
    SSH key pairs, consisting of public and private keys, are a recommended alternative for authentication. The client sends a key pair ID to the server, which checks for a matching public key.
    The server encrypts a random number with the public key, sent to the client, who decrypts it with the private key.
    The client computes an MD5 hash using the decrypted number and the shared session key, sending it back to the server for verification.

In RSA, encryption and decryption use different keys: the encryption key is public, and the decryption key is private. A user creates a public key based on two large prime numbers and an auxiliary value, while keeping the prime numbers secret. Messages can be encrypted with the public key but can only be decrypted by someone who knows the prime numbers.

Together, SSH and RSA provide secure, authenticated, and encrypted connections to protect sensitive information. For added security, you can create an SSH key with a passphrase.


### Creating RSA key pair
#### On the server, run: 
`vi /etc/ssh/sshd_config`
`--> PubkeyAuthentication yes`

`systemctl restart ssh`

#### Create rsa keys on home PC (if you don't have it yet).
```console
ssh-keygen
```
*you will get two keys:*

                        `$HOME/.ssh/id_rsa`     Your private RSA key to keep on local PC

                        `$HOME/.ssh/id_rsa.pub` Your public RSA key to send to a server

#### Transfer rsa keys to the server:

On a home PC: 

`sudo ssh-copy-id -p 12345 user_name@server-ip-addres`

This utility specifically designed for copying SSH keys to a remote server. 
It automatically handles the key placement and permissions on the remote server, making it more convenient. 
Use `-p` flag to specify not standard port, if you have changed it.

if you have created keys before, don't overwrite it! As you will not be able to authenticate using the previous key anymore. But you can keep them somewhere else and generate next.

Alternative ways to transfer RSA public key to a remote server:
*
If you have created keys before and store them elsewhere, you can use rsync to copy the contents of the public key from any other place to `authorized_keys` by specifying the path to the keys:
```console
sudo rsync -e "ssh -p 12345" ~/.ssh/user2/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys
```		
Use -p flag for specifying not standatr port
*
This command will create an .ssh dir on a server(or skip if it has) and add the keys to the end of `authorized_keys` file:
```console
cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
``````
-p flag make the tool to skip the error if the directory already exists
*
Manually transfer the public key file and add it to the `authorized_keys` file on the remote server. 
You can open `id_rsa.pub key` and copy-paste it's content to the end of `authorized_keys` file:
```console
echo public_key_string >> ~/.ssh/authorized_keys
```
:::note 
Make sure you have permissions 700 for `~/.ssh` directory and 600 for `authorized_keys` in it
:::

#### Test secure connection to a server
```console
ssh username@your-server-ip-addr
```


### Managing connections can be much simplier and more enjoyable by creating aliases!
Create a file named "config" in the `~/.ssh` directory (where the keys are), simply add your server or other users for the same server to it, like in example below. Feel free to add as many as you want.

```console
Host subspace                            # Just write here the any name of the alias (for ex. "subspace" or "farmer" etc..)
    HostName 123.123.123.123     # Example. Put you server's IP
    Port 12345                                 # your custom port
    User username			            # User for login (in a rescue system here must be root, change it later)
```
*indentation aren't important, use 4 spaces for readability*
*
Check connection using simpliest syntax in terminal:
```console
ssh subspace
``` 

*You will be asked if you allow the connection - reply "yes"*



### Alternate SSH Port
 By default, SSH (Secure Shell) listens on port 22. This is well-known and can be a target for automated attacks. By changing the SSH port, you make it harder for attackers to guess which port SSH is listening on, reducing the risk of automated attacks.

:::note
First, make sure you don't have UFW enabled. If you do, add a rule for the desired port.
:::
```console
sudo vi /etc/ssh/sshd_config
#Port 22  -> Port 12345             # specify a custom SSH port within the range of 1025 to 65534
sudo systemctl reload sshd    # for the changes to take effect
```

```console
sudo ufw allow 12345/tcp        #this is an example, specify your port
```
*
Checking new port from homePC:
```console
ssh -p xxxxx user@localhost
```

**Now you can log in to your server on a non-standard port using an encrypted connection without entering any credentials!**


### Additionally recommended secure measures
#### Restricting password access

```console
vi /etc/ssh/sshd_config
-->PasswordAuthentication no
systemctl restart ssh
```
#### Reducing time window for entering credentials
```console
vi /etc/ssh/sshd_config
-->LoginGraceTime 1m		#time in minutes (m) or hours (h) or seconds (s); If the authentication process is not completed within this time, the server will terminate the connection.
sudo systemctl restart ssh.service
```

#### Restricting root login

```console
sudo vi /etc/ssh/sshd_config
--> PermitRootLogin no
sudo systemctl restart ssh.service
```

Reboot to make sure everything is working.


## A few words about partitioning as a secure measure.

As a security measure, it is worth mentioning the practice of allocating separate partitions for critical directories such as /boot, /var, /tmp, and /home (in some cases). This helps isolate system files, logs, temporary files, and user data, which can improve system stability and security. But the cons are there too: 
- if one partition runs out of space while another partition has unused space, it may not be possible to easily reallocate the disk space;
- monitoring and maintaining each partition separately, including backups, permissions;
- having a separate /tmp partition may result in increased disk I/O when temporary files are created and deleted; 
- if the /home partition is separate, migrating to a new server or upgrading the operating system may require additional steps to ensure the proper migration of user data and configurations; 
- having separate partitions can increase the risk of data loss if one partition fails or becomes corrupted; 
The partitioning recommendations for farming in Subspace will be covered in the "Partitioning and mounting file system" section of the left tab menu.

# Upgrading ...
*
Upgrading server components.
While linux distributions regularly release security patches to address already known vulnerabilities in software packages, installing everything on a server without examination makes no sense because of unnecessary features. In some cases may even cause system destabilization. If you have made customizations or modifications to your server's configuration or software, an upgrade may overwrite or conflict with these changes. So ideally, decisions should be made based on understanding of what each package does and their changelogs.

To view the changelog for a particular package: `apt changelog <package_name>`
*
Upgrading Kernel.
While kernel updates often come with bug fixes and security patches, there is a possibility that the new kernel version may introduce new bugs or compatibility issues. Not every kernel update is necessary or urgent. Some updates may provide incremental improvements or additional functionality that may not be essential for your specific use case. It's important to evaluate the benefits and potential risks before deciding to update the kernel.
*
Upgrading the distribution version have both pros and cons.
Pros:
    Access to new features
    Software compatibility
    Security updates
    Long-term support (LTS)
Cons:
    Potential for compatibility issues
    Configuration changes
    May have new bugs (can be resolved by downgrading the bugged package).

To get in touch of Release Notes simply use search on [Ubuntu homepage](https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs)

# UFW

According to the ordering of UFW rules (DENY rules should be first, followed by ALLOW rules), 
new 'ALLOW' rules can simply be added to the end of existing rules:

```console
your existing rules
...
sudo ufw allow from anywhere to any proto tcp port 30333 comment 'The node port '
sudo ufw allow from anywhere to any proto tcp port 30433 comment 'DSN port'
sudo ufw allow from anywhere to any proto tcp port 30533 comment 'Farmer port'
```

Now with peace of mind you may go back to installing Node and Farmer.