import React from 'react';
import Icon from '@site/src/components/Icon';

/**
 * TabLabel component for cleaner tab syntax with icons
 * 
 * Usage:
 * <TabItem value="windows" label={<TabLabel icon={ICONS.WINDOWS}>Windows</TabLabel>}>
 */
export default function TabLabel({ icon, children }) {
  return (
    <>
      <Icon icon={icon} /> {children}
    </>
  );
}