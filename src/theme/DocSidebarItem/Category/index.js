import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';

export default function CategoryWrapper(props) {
  // Check if this item is featured or testnet
  const isFeatured = props.item.customProps?.featured;
  const isTestnet = props.item.customProps?.testnet;
  
  if ((isFeatured || isTestnet) && props.item.label) {
    // Determine which icon to use
    let iconElement = null;
    if (isTestnet) {
      iconElement = <Icon icon={ICONS.TESTNET} className="icon-testnet" />;
    } else if (isFeatured) {
      iconElement = <Icon icon={ICONS.RECOMMENDED} className="icon-featured" />;
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