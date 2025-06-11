import React from 'react';
import Icon from '@site/src/components/Icon';

export default function TestnetBadge({ text = 'Testnet' }) {
  return (
    <span className="testnet-badge">
      <Icon icon="mingcute:taurus-fill" />
      {text}
    </span>
  );
}