import React from 'react';
import styles from './styles.module.css';
import Icon from '@site/src/components/Icon';
import { ICONS } from '@site/src/constants';

export function DirectoryTree({ children }) {
  return <div className={styles.tree}>{children}</div>;
}

export function Dir({ name, open = false, focused = false, note, children }) {
  return (
    <>
      <div className={`${styles.node} ${focused ? styles.focused : ''}`}>
        {focused && <span className={styles.focusIndicator} />}
        <Icon icon={open ? ICONS.FOLDER_OPEN : ICONS.FOLDER} className={styles.icon} />
        <span className={styles.name}>{name}</span>
        {note && <span className={styles.note}>{note}</span>}
      </div>
      {children && <div className={styles.children}>{children}</div>}
    </>
  );
}

export function File({ name, focused = false, note }) {
  return (
    <div className={`${styles.node} ${focused ? styles.focused : ''}`}>
      {focused && <span className={styles.focusIndicator} />}
      <Icon icon={ICONS.FILE} className={styles.icon} />
      <span className={styles.name}>{name}</span>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}