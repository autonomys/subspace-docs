import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import Icon from '@site/src/components/Icon';

export default function LinkWrapper(props) {
  // Check if this page is featured or testnet (from sidebar_custom_props in frontmatter)
  const isFeatured = props.item.customProps?.featured;
  const isTestnet = props.item.customProps?.testnet;
  
  if ((isFeatured || isTestnet) && props.item.label) {
    // Determine which icon to use
    let iconElement = null;
    if (isTestnet) {
      iconElement = <Icon icon="mingcute:taurus-fill" className="icon-testnet" />;
    } else if (isFeatured) {
      iconElement = <Icon icon="material-symbols-light:star-shine" className="icon-featured" />;
    }
    
    // Clone the item and modify the label to include the appropriate icon
    const modifiedItem = {
      ...props.item,
      label: (
        <>
          {iconElement}
          {props.item.label}
        </>
      )
    };
    
    return <Link {...props} item={modifiedItem} />;
  }
  
  return <Link {...props} />;
}