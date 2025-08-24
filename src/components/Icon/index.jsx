import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

export default function Icon({ icon, className = '', style = {}, ...props }) {
  // Check if this is a local icon (starts with 'local:')
  if (icon && icon.startsWith('local:')) {
    const iconPath = icon.replace('local:', '');
    
    // Special handling for chronos.svg - use img tag to preserve original colors
    if (iconPath.includes('chronos.svg')) {
      return (
        <img 
          src={iconPath}
          className={`icon icon-img ${className}`.trim()}
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            width: '1em',
            height: '1em',
            ...style
          }}
          alt=""
          {...props}
        />
      );
    }
    
    // Return a span that uses CSS mask for other local SVG icons
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