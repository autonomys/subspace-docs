import React, { useState } from 'react';
import styles from './styles.module.css';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';

export function CardItem({ title, children, lastUpdated, confirmedVersion, id, showShare = true }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.cardItem}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title} id={id}>{title}</h3>
        {showShare && (
          <button 
            className={styles.shareButton}
            onClick={handleCopyLink}
            title="Copy link to this section"
            aria-label="Copy link to this section"
          >
            <Icon icon={copied ? ICONS.CHECK : ICONS.SHARE_FILLED} className={styles.shareIcon} />
            {copied && <span className={styles.copiedText}>Copied!</span>}
          </button>
        )}
      </div>
      <div className={styles.content}>
        {children}
      </div>
      {lastUpdated && (
        <div className={styles.lastUpdated}>
          Updated: {lastUpdated}
        </div>
      )}
      {confirmedVersion && (
        <div className={styles.lastUpdated}>
          Confirmed on: {confirmedVersion}
        </div>
      )}
    </div>
  );
}

export function CardSection({ title, icon, children, id }) {
  return (
    <div className={styles.cardSection} id={id}>
      <h2 className={styles.sectionTitle}>
        {icon && <span className={styles.sectionIcon}>{icon}</span>}
        {title}
      </h2>
      <div className={styles.cardList}>
        {children}
      </div>
    </div>
  );
}