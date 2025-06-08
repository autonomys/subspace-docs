import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import Icon from '@site/src/components/Icon';

export default function CategoryWrapper(props) {
  // Check if this item is featured or testnet
  const isFeatured = props.item.customProps?.featured;
  const isTestnet = props.item.customProps?.testnet;
  
  if ((isFeatured || isTestnet) && props.item.label) {
    // Determine which icon to use
    let iconElement = null;
    if (isTestnet) {
      iconElement = <Icon icon="teenyicons:ab-testing-outline" className="icon-testnet" />;
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
    
    return <Category {...props} item={modifiedItem} />;
  }
  
  return <Category {...props} />;
}