import React from 'react';
import Link from '@docusaurus/Link';
import Icon from '@site/src/components/Icon';

export default function ActionButton({ to, title, subtitle, icon, external = false }) {
  const linkProps = external ? { href: to } : { to: to };
  
  return (
    <Link {...linkProps} className="button button--primary button--lg">
      {icon && <Icon icon={icon} className="download-icon" />}
      <div className="button-text">
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </Link>
  );
}