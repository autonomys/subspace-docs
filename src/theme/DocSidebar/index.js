import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <div>
      <DocSidebar {...props} />
      <div className="sidebar-recommendation-label">
        ✨ Denotes recommended application
      </div>
    </div>
  );
}
