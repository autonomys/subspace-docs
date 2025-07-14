import React, { useState } from 'react';
import styles from './styles.module.css';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';

export function ContentBlock({ title, children, lastUpdated, confirmedVersion, slug, showShare = true, severity, description }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSeverityIcon = () => {
    if (!severity) return null;
    
    switch(severity.toLowerCase()) {
      case 'high':
        return <Icon icon={ICONS.STATUS_RED} className="icon-status-red" />;
      case 'medium':
        return <Icon icon={ICONS.STATUS_ORANGE} className="icon-status-orange" />;
      case 'low':
        return <Icon icon={ICONS.STATUS_GREEN} className="icon-status-green" />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.contentBlock}>
      <div className={`${styles.titleWrapper} ${!severity ? styles.titleWithBorder : ''}`}>
        <h3 className={styles.title} id={slug}>{title}</h3>
        {showShare && (
          <button 
            className={styles.shareButton}
            onClick={handleCopyLink}
          >
            <Icon icon={copied ? ICONS.CHECK : ICONS.SHARE_FILLED} className={styles.shareIcon} />
          </button>
        )}
      </div>
      {severity && (
        <div className={styles.severity}>
          <span className={styles.severityIcon}>{getSeverityIcon()}</span>
          <span>{severity.charAt(0).toUpperCase() + severity.slice(1)} Severity</span>
        </div>
      )}
      {description && (
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      )}
      <div className={styles.content}>
        {children}
        {(lastUpdated || confirmedVersion) && (
          <div className={styles.metadata}>
            {lastUpdated && <span className={styles.metadataItem}>Updated: {lastUpdated}</span>}
            {confirmedVersion && <span className={styles.metadataItem}>Verified: {confirmedVersion}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export function ContentGroup({ title, icon, children, id }) {
  return (
    <div className={styles.contentGroup} id={id}>
      <h2 className={styles.groupTitle}>
        {icon && <span className={styles.groupIcon}>{icon}</span>}
        {title}
      </h2>
      <div className={styles.contentList}>
        {children}
      </div>
    </div>
  );
}

// Sub-components for structured content
export function ContentText({ children }) {
  return <p className={styles.text}>{children}</p>;
}

export function ContentSubtitle({ children }) {
  return <h4 className={styles.subtitle}>{children}</h4>;
}

export function ContentList({ children, ordered = false }) {
  const Tag = ordered ? 'ol' : 'ul';
  return <Tag className={styles.list}>{children}</Tag>;
}

export function ContentListItem({ children }) {
  return <li className={styles.listItem}>{children}</li>;
}

export function ContentCode({ children, language = 'text' }) {
  return (
    <pre className={styles.codeBlock}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}

export function ContentFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

// Default export with all components for easier importing
const ContentComponents = {
  ContentBlock,
  ContentGroup,
  ContentText,
  ContentSubtitle,
  ContentList,
  ContentListItem,
  ContentCode,
  ContentFooter
};

export default ContentComponents;