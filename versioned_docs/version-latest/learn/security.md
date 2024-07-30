---
title: Safety and Security
sidebar_position: 2
description: General security measures. Cyberattacks and fraud protection. Server protection.
keywords:
  - Security
  - Wallet
  - Password
  - SSH
  - Server
  - Protection
  - Fraud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

Venturing into the digital world and engaging in a crypto project can be thrilling, but following top security practices is essential. Here is a general guide to security and safety, including basic measures for securing servers and home PCs. Your adherence to these practices contributes to the stability of the Autonomys network and, of course, the safety of the community's cryptoassets. 

Enjoy Autonomys journey with peace of mind!


## Wallet Security

- Be sure to make the password long enough, combining both registers letters, numbers, and special characters. An 11-character password increases the bruteforce attack time to normally impossible limit. Take a look at [passwords brutforce time illustrating table](https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-password-could-be-cracked-in-just-a-few-minutes-770x404.jpg). However, even a complex password is not all, that is required for proper protection.

- Avoid using common or easily guessed combinations of words or letters, as well as parts of your online data or reusing any of your existing passwords.

Weak password example:
```
S0methin9C00l!
```
Strong password example:
```
^p$O_~a!4h{G'9C*
```


- Consider using a password manager to generate complex passwords and store them securely. There are plenty of password managers available. Ensure that the password manager of your choice stores data in encrypted form, boasts a robust password generator, receives positive reviews, and has a history of consistent updates. **For example, well-regarded options include KeePass, Bitwarden, 1Password, LastPass, Dashlane, and Keeper.**
However, it's crucial to do your own research and consult ratings before making a decision.

- Boost the security of your accounts by enabling 2FA (two-factor authentication) wherever possible. This extra layer of protection requires a second verification step, such as a code from a mobile app or hardware token, in addition to your passwords.

- Do not share your 12-word seed phrase or private keys.

- A hardware wallet is by far the most secure way to store your private keys. Unlike online exchanges and wallets, hardware wallets store the keys offline and protect from potential malware or hacking attempts.
The most popular hardware wallets are [Ledger](https://www.ledger.com/) and [Tresor](https://trezor.io/).

- Back up your wallets by securely storing the backups offline or in an encrypted cloud storage. This guarantees that you can recover your funds in case of a device loss, damage, or theft. Many encrypted cloud storage services are available, such as Tresorit, pCloud, Sync.com, SpiderOak, and Mega (the order doesn't matter). However, always conduct your own research.

- Keep all software up to date.

- Be cautious of public Wi-Fi.
 

## Community Security

:::note Keep in mind
Autonomys team members will never initiate direct messages with you.
:::

Should you receive an unsolicited message, it's best to ignore it, block the sender, and promptly report the incident to our ["scam report" channel](https://discord.com/channels/864285291518361610/982023010405990400).

Exercise caution with regard to phishing attacks. Do not click on links within our forum, Discord, or Telegram, unless those links have been shared by a trusted member of our team, such as ambassadors or staff. Scammers can create deceptive links that mimic legitimate websites, so it's advisable to scrutinize the message's author (on all the mentioned platforms) before clicking any links. Trust should generally be reserved for project team members, ambassadors, or highly reputable farmers.

## Server Security

### SSH RSA Keys-based Secure Authentication

Let's run through some basics.  

SSH is a network protocol used for secure remote access to computer systems, cloud infrastructure, secure file transfer (SFTP), and tunneling. It's a fundamental tool for system administrators and developers. SSH uses the Diffie-Hellman algorithm for secure connections and authentication methods like password or SSH key pairs. 

**SSH Connection Establishment**.

When a client initiates a TCP connection, the server responds with supported protocol versions and its public host key.
Both parties negotiate a session key using the Diffie-Hellman algorithm to ensure secure communication. This session key encrypts the entire session.

**User Authentication**.

After establishing session encryption, user authentication begins.
Password authentication involves securely transmitting the user's account password.
SSH key pairs, consisting of public and private keys, are a recommended alternative for authentication. The client sends a key pair ID to the server, which checks for a matching public key.
The server encrypts a random number with the public key, sends to the client, who decrypts it with the private key.
The client computes an MD5 hash using the decrypted number and the shared session key, sending it back to the server for verification.

**RSA encryption**.

In RSA, encryption and decryption use different keys: the encryption key is public, and the decryption key is private. A user creates a public key based on two large prime numbers and an auxiliary value, while keeping the prime numbers secret. Messages can be encrypted with the public key but can only be decrypted by someone who knows the prime numbers.

Together, SSH and RSA provide secure, authenticated, and encrypted connections to protect sensitive information. To enhance security, though it is possible to create an SSH key with a passphrase.


### Creating RSA Key Pair
#### To allow PublicKey authentication on your server, as root run: 
```consol
vi /etc/ssh/sshd_config
```
`PubkeyAuthentication no --> PubkeyAuthentication yes`

```consol
systemctl restart ssh
```

#### Create RSA keys on a Home PC:  
```console
ssh-keygen
```
*you will get two keys:*

`$HOME/.ssh/id_rsa`     Your private RSA key to keep on local PC

`$HOME/.ssh/id_rsa.pub` Your public RSA key to send to a server

#### Transfer RSA Keys to a Server:

```consol
sudo ssh-copy-id -p 12345 user_name@server-ip-addres
```

This utility specifically designed for copying SSH keys to a remote server. 
It automatically handles the key placement and permissions on the remote server, making it more convenient. 
Use `-p` flag to specify not standard port, if you have changed it.

If you have created keys before, don't overwrite it! As you will not be able to authenticate using the previous key anymore. But you can keep them somewhere else and generate them next.

#### Alternative Ways to Transfer RSA Public key to a Remote Server:

If you have created keys before and store them elsewhere, you can use rsync to copy the contents of the public key from any other place to `authorized_keys` by specifying the path to the keys:
```console
sudo rsync -e "ssh -p 12345" ~/.ssh/user2/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys
```		
*Use `-p` flag for specifying non-standard port*

This command will create an .ssh dir on a server(or skip if it has) and add the keys to the end of `authorized_keys` file:

```console
cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
``````

`-p` flag make the tool to skip the error if the directory already exists

Manually transfer the public key file and add it to the `authorized_keys` file on the remote server. 
You can open `id_rsa.pub key` and copy-paste it's content to the end of `authorized_keys` file:

```console
echo public_key_string >> ~/.ssh/authorized_keys
```

:::note 
Make sure you have permissions 700 for `~/.ssh` directory and 600 for `authorized_keys` in it
:::

### Testing the Secure Connection
```console
ssh username@your-server-ip-addr
```

### Streamlining SSH Connections Management With Aliases
Managing connections can be much simpler and more enjoyable by creating aliases!
Create a file named "config" in the `~/.ssh` directory (where the keys are), simply add your server or other users for the same server to it, like in example below. Feel free to add as many as you want.

```console
Host Farm                    # Any word can be used here as an alias (for ex. "autonomys" or "Farm")
HostName 123.123.123.123     # Use you server's IP
Port 12345                                 # your custom port
User username			            # User for login (for a rescue system this must be root, change it later)
```
*indentation isn't important, 4 spaces indentation is used for a better readability*

Try to connect using simpliest syntax in terminal:  
```console
ssh subspace
``` 

*You will be asked if you allow the connection. Reply with 'yes'.*


### Alternating SSH Port
By default, SSH (Secure Shell) listens on port 22. This is well-known and can be a target for automated attacks. By changing the SSH port, you make it harder for attackers to guess which port SSH is listening on, reducing the risk of automated attacks.

:::note
First, make sure you don't have UFW enabled. If you do, add a rule for the desired port:
:::

```console
sudo ufw allow 12345/tcp        #this is an example, specify your port
```

- Changing port
```console
sudo vi /etc/ssh/sshd_config
#Port 22  -> Port 12345             # specify a custom SSH port within the range of 1025 to 65534
sudo systemctl reload sshd    # for the changes to take effect
```

Checking new port from homePC
```console
ssh -p 12345 user@localhost     # specify your port
```

Now you can log in to your server on a non-standard port using an encrypted connection without entering any credentials!


### Basic Recommendations for Configuring the SShd Configuration File

As root, edit sshd_config:  
```consol
vi /etc/ssh/sshd_config
```
- Allowing Public Key authentication:  
`PubkeyAuthentication no --> PubkeyAuthentication yes`

- Restricting password access:  
`PasswordAuthentication yes --> PasswordAuthentication no`

- Reducing time window for entering credentials:   
(If the authentication process is not completed within this time, the server will terminate the connection)  
`LoginGraceTime 120`  

- Restricting root login  
`PermitRootLogin yes --> PermitRootLogin no`

- Specifying the Users allowed to connect through SSH  
`AllowUsers user1 user2`

Reload daemon for the changes to take effect:

```consol
systemctl reload sshd
```

- Reboot your system to ensure that everything is functioning as expected.


Complete SSh manual: [SSH Academy](https://www.ssh.com/academy/ssh/sshd_config)

## A Word About Partitioning as a Security Measure.

As a security measure, it is worth mentioning the practice of allocating separate partitions for critical directories such as /boot, /var, /tmp, and /home (in some cases). This helps isolate system files, logs, temporary files, and user data, which can improve system stability and security. But the cons are there too:
- If one partition runs out of space while another partition has unused space, it may not be possible to easily reallocate the disk space
- Monitoring and maintaining each partition separately, including backups, permissions
- having a separate /tmp partition may result in increased disk I/O when temporary files are created and deleted
- If the /home partition is separate, migrating to a new server or upgrading the operating system may require additional steps to ensure the proper migration of user data and configurations
- Having separate partitions can increase the risk of data loss if one partition fails or becomes corrupted

The partitioning recommendations for farming in Autonomys will be covered in the "Partitioning and mounting file system" section of the left tab menu.

## Upgrading ...

**Upgrading packages**  

While Linux distributions regularly release security patches to address known vulnerabilities in software packages, it doesn't always make sense to install every available update on a server. Unnecessary updates can introduce features or changes that might not be needed and, in some cases, may even cause system destabilization. If you've made customizations or modifications to your server's configuration or software, an upgrade could potentially overwrite or conflict with these changes.  

Therefore, it's essential to make upgrade decisions based on a thorough understanding of what each package does and reviewing their changelogs.

To view the changelog for a particular package: `apt changelog <package_name>`

**Upgrading Kernel**  

While kernel updates often come with bug fixes and security patches, there is a possibility that the new kernel version may introduce new bugs or compatibility issues. Not every kernel update is necessary or urgent. Some updates may provide incremental improvements or additional functionality that may not be essential for your specific use case. It's important to evaluate the benefits and potential risks before deciding to update the kernel.

**Upgrading the distribution version**

Pros:
- Access to new features
- Software compatibility
- Security updates
- Long-term support (LTS)

Cons:  
- Potential for compatibility issues
- Configuration changes
- May have new bugs (which can be resolved by downgrading the bugged package).

So everywhere ideally it is necessary to read changelogs, know what is needed and why, and comprehensively evaluate the need for upgrades. Although, of course, in most cases under ordinary (office) conditions everything should work. 

### To Access Release Notes:  
Simply use the search function on the [Ubuntu homepage](https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs).


## UFW

According to the ordering of UFW rules (DENY rules should come first, followed by ALLOW rules), new 'ALLOW' rules can simply be added to the end of the existing rules.

```console
your existing rules
...

sudo ufw allow 30333 comment 'Node port'
sudo ufw allow 30433 comment 'Node DSN port'
sudo ufw allow 30533 comment 'Farmer port'
```

Now with peace of mind you may go back to installing Node and Farmer.
