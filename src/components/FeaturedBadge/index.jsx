import React from 'react';
import Icon from '@site/src/components/Icon';

export default function FeaturedBadge({ text = 'Featured' }) {
  return (
    <span className="featured-badge">
      <Icon icon="material-symbols-light:star-shine" />
      {text}
    </span>
  );
}