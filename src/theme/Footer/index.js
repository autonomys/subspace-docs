import React from 'react';
import Footer from '@theme-original/Footer';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function FooterLink({to, href, label, icon, ...props}) {
  const linkProps = to ? {to} : {href};
  const LinkComponent = to ? Link : 'a';
  
  return (
    <LinkComponent {...linkProps} className={styles.footerLink} {...props}>
      {icon && <Icon icon={icon} className={styles.footerIcon} />}
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
              The Foundation Layer for AI3.0
            </p>
          </div>
          
          {/* Links Sections */}
          <div className={styles.footerLinks}>
            {/* Ecosystem Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                Ecosystem
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://autonomys.xyz" 
                    label="Official Website" 
                    icon={ICONS.AUTONOMYS}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://astral.autonomys.xyz" 
                    label="Block Explorer" 
                    icon={ICONS.EXPLORER}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://academy.autonomys.xyz" 
                    label="Academy" 
                    icon={ICONS.ACADEMY}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://develop.autonomys.xyz" 
                    label="Developer Hub" 
                    icon={ICONS.DEVELOPER}
                  />
                </li>
              </ul>
            </div>
            
            {/* Documentation Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                Documentation
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    to="/farming/space-acres/install" 
                    label="Start Farming" 
                    icon={ICONS.FARMER}
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/staking/stake" 
                    label="Start Staking" 
                    icon={ICONS.NOMINATOR}
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/staking/operator/register" 
                    label="Become Operator" 
                    icon={ICONS.OPERATOR}
                  />
                </li>
                <li>
                  <FooterLink 
                    to="/community/contribute/intro" 
                    label="Contribute" 
                    icon={ICONS.CONTRIBUTE}
                  />
                </li>
              </ul>
            </div>
            
            {/* Community Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                Community
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://autonomys.xyz/discord" 
                    label="Discord" 
                    icon={ICONS.DISCORD}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://t.me/subspace_network" 
                    label="Telegram" 
                    icon={ICONS.TELEGRAM}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://forum.autonomys.xyz" 
                    label="Forum" 
                    icon={ICONS.FORUM}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://github.com/autonomys" 
                    label="GitHub" 
                    icon={ICONS.GITHUB}
                  />
                </li>
              </ul>
            </div>
            
            {/* Social Section */}
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                Follow Us
              </h3>
              <ul className={styles.footerList}>
                <li>
                  <FooterLink 
                    href="https://x.com/AutonomysNet" 
                    label="X (Twitter)" 
                    icon={ICONS.X_TWITTER}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://www.youtube.com/@AutonomysNetwork" 
                    label="YouTube" 
                    icon={ICONS.YOUTUBE}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://www.linkedin.com/company/autonomys" 
                    label="LinkedIn" 
                    icon={ICONS.LINKEDIN}
                  />
                </li>
                <li>
                  <FooterLink 
                    href="https://medium.com/subspace-network" 
                    label="Medium" 
                    icon={ICONS.MEDIUM}
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