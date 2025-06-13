import React from 'react';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';

const BADGE_VARIANTS = {
  recommended: {
    icon: ICONS.RECOMMENDED,
    className: 'badge-recommended'
  },
  testnet: {
    icon: ICONS.TESTNET,
    className: 'badge-testnet'
  }
};

/**
 * Unified Badge component for different badge types
 * 
 * @param {string} variant - The badge variant ('recommended' or 'testnet')
 * @param {string} text - Required text to display in the badge
 * @param {boolean} iconOnly - Show only the icon without badge wrapper
 * @param {string} className - Additional CSS classes
 * 
 * Usage:
 * <Badge variant="recommended" text="Recommended" />
 * <Badge variant="testnet" text="Taurus" />
 * <Badge variant="recommended" iconOnly />
 */
export default function Badge({ variant = 'recommended', text, iconOnly = false, className = '' }) {
  const config = BADGE_VARIANTS[variant];
  
  if (!config) {
    console.warn(`Badge: Unknown variant "${variant}". Using "recommended" as fallback.`);
    return null;
  }
  
  // Icon-only mode - just return the icon with appropriate styling
  if (iconOnly) {
    const iconClass = variant === 'recommended' ? 'icon-featured' : 'icon-testnet';
    return <Icon icon={config.icon} className={`${iconClass} ${className}`.trim()} />;
  }
  
  // Regular badge mode requires text
  if (!text) {
    console.warn(`Badge: No text provided for ${variant} badge. Text is required for translation.`);
    return null;
  }
  
  return (
    <span className={`badge ${config.className} ${className}`.trim()}>
      <Icon icon={config.icon} />
      {text}
    </span>
  );
}