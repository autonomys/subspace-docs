import React from 'react';
import Icon from '@site/src/components/Icon';

export default function ResourceCard({ to, title, subtitle, icon }) {
  return (
    <a href={to} className="resource-card">
      <Icon icon={icon} className="resource-icon" />
      <div className="resource-content">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </a>
  );
}