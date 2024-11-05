import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <div>
      <DocSidebar {...props} />
      <div className="sidebar-recommendation-label">
        ✨ Denotes recommended application <br />
        ♊ Denotes availability on Gemini-3h testnet <br />
        ♉ Denotes availability on Taurus testnet
      </div>
    </div>
  );
}
