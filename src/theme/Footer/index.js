import React from 'react';
import Footer from '@theme-original/Footer';
import Icon from '@site/src/components/Icon';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function FooterLink({to, href, label, icon, customIcon, ...props}) {
  const linkProps = to ? {to} : {href};
  const LinkComponent = to ? Link : 'a';
  
  return (
    <LinkComponent {...linkProps} className={styles.footerLink} {...props}>
      {customIcon ? (
        <span className={`${styles.footerIcon} ${styles[customIcon]}`} />
      ) : (
        icon && <Icon icon={icon} className={styles.footerIcon} />
      )}
      <span>{label}</span>
    </LinkComponent>
  );
}

export default function FooterWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <div className={styles.footerLogo}>
            <img 
              src="/img/banner-white.png" 
              alt="Autonomys Labs" 
              className={styles.logoImage}
            />
            <p className={styles.tagline}>
              Building the foundation for a radically decentralized future
            </p>
          </div>
          
          {/* Links Sections */}
          <div className={styles.footerLinks}>
            {/* Ecosystem Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                <Icon icon="mdi:web" className={styles.titleIcon} />
                Ecosystem
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://autonomys.xyz" 
                    label="Official Website" 
                    icon="token:autonomys"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://astral.autonomys.xyz" 
                    label="Block Explorer" 
                    icon="mdi:cube-scan"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://academy.autonomys.xyz" 
                    label="Academy" 
                    icon="mdi:school"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://develop.autonomys.xyz" 
                    label="Developer Hub" 
                    icon="lineicons:dev"
                  />
                </li>
              </ul>
            </div>
            
            {/* Documentation Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                <Icon icon="mdi:book-open-variant" className={styles.titleIcon} />
                Documentation
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    to="/farming/space-acres/install" 
                    label="Start Farming" 
                    icon="mdi:tractor"
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/staking/stake" 
                    label="Start Staking" 
                    icon="mdi:account-heart"
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/staking/operator/register" 
                    label="Become Operator" 
                    icon="mdi:server"
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/participate/contribute/intro" 
                    label="Contribute" 
                    icon="material-symbols:partner-exchange"
                  />
                </li>
              </ul>
            </div>
            
            {/* Community Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                <Icon icon="mdi:account-group" className={styles.titleIcon} />
                Community
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://autonomys.xyz/discord" 
                    label="Discord" 
                    icon="mdi:discord"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://t.me/subspace_network" 
                    label="Telegram" 
                    icon="mdi:telegram"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://forum.autonomys.xyz" 
                    label="Forum" 
                    icon="mdi:forum"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://github.com/autonomys" 
                    label="GitHub" 
                    icon="mdi:github"
                  />
                </li>
              </ul>
            </div>
            
            {/* Social Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                <Icon icon="mdi:share-variant" className={styles.titleIcon} />
                Follow Us
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://x.com/AutonomysNet" 
                    label="X (Twitter)" 
                    customIcon="xTwitterIcon"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://www.youtube.com/@AutonomysNetwork" 
                    label="YouTube" 
                    icon="mdi:youtube"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://www.linkedin.com/company/autonomys" 
                    label="LinkedIn" 
                    icon="mdi:linkedin"
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://medium.com/subspace-network" 
                    label="Medium" 
                    icon="mdi:medium"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Autonomys Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}