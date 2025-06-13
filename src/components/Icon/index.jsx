import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

export default function Icon({ icon, className = '', style = {}, ...props }) {
  // Check if this is a local icon (starts with 'local:')
  if (icon && icon.startsWith('local:')) {
    const iconPath = icon.replace('local:', '');
    
    // Return a span that uses CSS mask for local SVG icons
    return (
      <span 
        className={`icon icon-local ${className}`.trim()}
        style={{
          maskImage: `url("${iconPath}")`,
          WebkitMaskImage: `url("${iconPath}")`,
          ...style
        }}
        {...props}
      />
    );
  }
  
  // Default Iconify icon handling
  return <IconifyIcon icon={icon} className={`icon ${className}`.trim()} style={style} {...props} />;
}