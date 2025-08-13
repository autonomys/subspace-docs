---
title: Security Best Practices
hide_title: true
hide_table_of_contents: true
sidebar_position: 4
description: Comprehensive security guide for protecting your crypto assets, personal data, and infrastructure. Learn wallet security, scam protection, system hardening, and privacy best practices for the Autonomys ecosystem.
keywords:
  - Security
  - Crypto Safety
  - Scam Protection
  - Infrastructure Security
  - Password Security
  - 2FA
  - Hardware Wallets
  - Social Engineering
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import ActionButton from '@site/src/components/ActionButton';
import Badge from '@site/src/components/Badge';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';
import { ContentBlock, ContentGroup } from '@site/src/components/ContentBlock';

:::caution **SECURITY ALERT - READ FIRST**
Many scammers are targeting the crypto community. Be extremely cautious of any direct messages asking for personal information.

As a general rule of thumb, if you don't know them, don't respond.

- **Be cautious of anyone who messages you privately**
- **Autonomys staff will never DM you first. We will always ask a user to DM us in a public channel**
- **Never share recovery phrases, seeds, private keys, or passwords with ANYONE**
- **Do not click on any links or download any files sent to you in a private message**
- **Never send funds to someone you don't know**
:::

If you encounter suspicious activity or need help with wallet security, use these resources to get immediate assistance or set up secure storage for your crypto assets.

<div className="center-content">
  <div className="releases-container">
    <ActionButton 
      to="https://discord.com/channels/864285291518361610/982023010405990400" 
      title="Report Scams" 
      subtitle="Help protect the community" 
      icon={ICONS.DISCORD} 
      external 
    />
    <ActionButton 
      to="/wallets" 
      title="Wallet Guides" 
      subtitle="Setup secure wallets" 
      icon={ICONS.FIREWALL} 
    />
  </div>
</div>

## Security Best Practices

The following security guidance is organized into focused sections to help you protect your crypto assets, avoid common scams, secure your infrastructure, and maintain your privacy. These practices are essential for anyone participating in the Autonomys ecosystem, whether you're farming, staking, or simply holding AI3 tokens. Each section builds upon fundamental security principles while addressing the unique challenges of the modern crypto landscape.

<Tabs>
<TabItem value="wallet" label={<><Icon icon={ICONS.FIREWALL} /> Wallet Security</>} default>

<ContentGroup title="Protecting Your Crypto Assets" icon={<Icon icon={ICONS.FIREWALL} />} id="wallet-security">

<ContentBlock title="Strong Password Requirements" showShare={false}>

With AI-powered attacks becoming common, password requirements have evolved:

- **Minimum 16 characters** (12-character passwords can be cracked in hours)
- **Use passphrases**: 4-6 random words are stronger than complex symbols
- **Example weak**: `S0methin9C00l!` 
- **Example strong**: `coffee-helicopter-mountain-telescope-47`
- **Never reuse passwords** across any services

</ContentBlock>

<ContentBlock title="Password Managers - Essential for Security" showShare={false}>

**Recommended password managers:**
- **1Password** - Cross-platform, excellent security record
- **Bitwarden** - Open-source, self-hostable option
- **KeePass** - Offline, completely private

**Avoid**: LastPass (security breaches), browser-based managers for crypto

</ContentBlock>

<ContentBlock title="Hardware 2FA Keys" showShare={false}>

**Essential protection**: Hardware security keys provide the strongest protection:
- **YubiKey 5 Series** - USB-A, USB-C, NFC options
- **Google Titan Keys** - Budget-friendly alternative
- **Nitrokey** - Open-source hardware option

**Why hardware keys matter**: SMS and app-based 2FA can be bypassed through SIM swapping and malware

</ContentBlock>

<ContentBlock title="Cold Storage is Critical" showShare={false}>

:::note Hardware Wallet Support
There is no official support for AI3 on any of these wallets at this time, but we will update as hardware wallet support is confirmed.
:::

**Never store significant amounts in hot wallets.** Hardware wallets are essential:

**Tier 1 (Recommended)**:
- **Ledger Nano X/S Plus** - Wide ecosystem support
- **Trezor Model T/One** - Open-source firmware
- **GridPlus Lattice1** - Advanced security features

**Security practices**:
- Purchase only from official vendors
- Verify authenticity upon receipt
- Never enter seed phrase into any software
- Store seed phrase in fireproof/waterproof safe

</ContentBlock>

<ContentBlock title="Seed Phrase Best Practices" showShare={false}>

**Physical storage only**:
- Use metal seed phrase storage (fireproof/waterproof)
- **Never** store digitally (photos, cloud, etc.)
- Split storage across multiple secure locations
- Consider Shamir's Secret Sharing for large amounts

**Recommended products**:
- Billfodl/Cryptosteel for metal storage
- Distributed storage across bank safety deposit boxes

</ContentBlock>

</ContentGroup>

</TabItem>
<TabItem value="scams" label={<><Icon icon={ICONS.CLOSE_CIRCLE} /> Scam Protection</>}>

<ContentGroup title="Recognizing and Avoiding Scams" icon={<Icon icon={ICONS.CLOSE_CIRCLE} />} id="scam-protection">

<ContentBlock title="Discord/Telegram Scams" showShare={false}>

**Common tactics**:
- **Fake support accounts** with similar names/avatars
- **"Urgent validation" messages** claiming account issues
- **Fake airdrop/reward** notifications
- **Tech support impersonation** for wallet "fixes"

**Red flags**:
- Unsolicited DMs about your account
- Requests for screen sharing or remote access
- Pressure to act quickly
- Links to lookalike websites

</ContentBlock>

<ContentBlock title="Website and App Scams" showShare={false}>

**Always verify URLs**:
- Bookmark official sites
- Check SSL certificates
- Be suspicious of URL shorteners
- Verify app signatures before installing

**Common fake domains**:
- autonomys.network (Official)
- autonomys.com (Fake)
- autonomys.io (Fake)
- autonomy.network (Fake)

</ContentBlock>

<ContentBlock title="Deepfake and AI Scams" showShare={false}>

**New threats**:
- **Deepfake video calls** impersonating team members
- **AI-generated voice cloning** for phone scams
- **ChatGPT-powered phishing** with perfect grammar
- **Fake AI trading bots** promising guaranteed returns

**Protection strategies**:
- Verify identity through multiple channels
- Use predetermined code words for sensitive discussions
- Be skeptical of "too good to be true" AI opportunities

</ContentBlock>

<ContentBlock title="DeFi and Yield Farming Scams" showShare={false}>

**Common scam patterns**:
- **Fake yield farming pools** with impossibly high APY
- **Rug pulls** disguised as legitimate protocols
- **Influencer pump and dumps** on social media
- **Fake audit reports** for malicious contracts

**Due diligence checklist**:
- Research team backgrounds and previous projects
- Verify smart contract audits from reputable firms
- Check tokenomics and vesting schedules
- Start with small test amounts

</ContentBlock>

</ContentGroup>

</TabItem>
<TabItem value="infrastructure" label={<><Icon icon={ICONS.SERVICE} /> Infrastructure Security</>}>

<ContentGroup title="Securing Your Systems" icon={<Icon icon={ICONS.SERVICE} />} id="infrastructure-security">

<ContentBlock title="Ubuntu 24.04 LTS Hardening" showShare={false}>

**Base system security**:
```shell
# Update system
sudo apt update && sudo apt upgrade -y

# Enable automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades

# Install essential security tools
sudo apt install fail2ban ufw
```

**Key improvements in Ubuntu 24.04**:
- Enhanced AppArmor profiles
- Improved secure boot support
- Better container security

</ContentBlock>

<ContentBlock title="SSH Hardening" showShare={false}>

**Modern SSH configuration** (`/etc/ssh/sshd_config`):
```shell
# Disable password authentication completely
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM no

# Use strong key exchange algorithms
KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512

# Disable root login
PermitRootLogin no

# Limit connection attempts
MaxAuthTries 3
MaxSessions 2

# Use non-standard port
Port 2222
```

**Generate Ed25519 keys** (stronger than RSA):
```shell
ssh-keygen -t ed25519 -f ~/.ssh/autonomys_server
```

</ContentBlock>

<ContentBlock title="UFW Firewall Setup" showShare={false}>

**Essential firewall rules**:
```shell
# Reset to defaults
sudo ufw --force reset

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# SSH (use your custom port)
sudo ufw allow 2222/tcp comment 'SSH'

# Autonomys node ports
sudo ufw allow 30333/tcp comment 'Node Consensus'
sudo ufw allow 30433/tcp comment 'Node DSN'
sudo ufw allow 30533/tcp comment 'Farmer'

# Enable firewall
sudo ufw enable
```

**Note**: The ports shown above are the standard Autonomys network ports. For detailed information about port forwarding, firewall configuration, and scenarios with multiple nodes, refer to the comprehensive <Link to="/farming/guides/port-config">Port Forwarding & Firewall guide</Link>.

</ContentBlock>

<ContentBlock title="Docker Security Best Practices" showShare={false}>

**Secure Docker configuration**:
```shell
# Run containers as non-root user
docker run --user 1000:1000 autonomys/node

```

</ContentBlock>

</ContentGroup>

</TabItem>
<TabItem value="privacy" label={<><Icon icon={ICONS.WEB} /> Privacy & OPSEC</>}>

<ContentGroup title="Operational Security" icon={<Icon icon={ICONS.WEB} />} id="privacy-opsec">

<ContentBlock title="VPN and Network Security" showShare={false}>

**Reliable VPN providers**:
- **Mullvad** - Anonymous payments, no logs
- **IVPN** - Privacy-focused, open source
- **ProtonVPN** - Secure Core architecture

**Avoid**: Free VPNs, providers with data retention laws

**Additional network security**:
- Use DNS over HTTPS (DoH) or DNS over TLS (DoT)
- Consider Tor for maximum anonymity
- Avoid public WiFi for crypto transactions

</ContentBlock>

<ContentBlock title="Secure Browsing Setup" showShare={false}>

**Recommended browser configuration**:
- **Firefox** with privacy hardening
- **Brave** with built-in ad/tracker blocking
- **Tor Browser** for maximum privacy

**Essential extensions**:
- **uBlock Origin** - Ad and tracker blocking
- **ClearURLs** - Remove tracking parameters
- **Decentraleyes** - Protect against tracking

**Avoid**: Chrome for crypto activities (Google tracking)

</ContentBlock>

<ContentBlock title="Social Media Security" showShare={false}>

**Platform-specific risks**:
- **Twitter/X**: Account takeovers, fake verification
- **Discord**: Server impersonation, DM scams
- **Telegram**: Fake channels, impersonation bots
- **Reddit**: Subreddit takeovers, fake AMAs

**Protection strategies**:
- Use separate accounts for crypto activities
- Never post about holdings or profits
- Verify official accounts through multiple sources
- Be suspicious of financial advice from strangers

</ContentBlock>

<ContentBlock title="Personal Data Protection" showShare={false}>

**Email security**:
- **ProtonMail** or **Tutanota** for crypto communications
- Use aliases for different services
- Enable email encryption when possible

**File storage**:
- Encrypt sensitive files locally
- **Signal** for secure messaging

**Device security**:
- Full disk encryption (FileVault, BitLocker, LUKS)
- Regular security updates

</ContentBlock>

</ContentGroup>

</TabItem>
</Tabs>
