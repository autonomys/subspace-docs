import React from 'react';
import clsx from 'clsx'; 

export default function Column({ children , className, style  }) {
  return (
  
      <div className={clsx('col' , className)} style={style}>
        {children}
      </div>
  
  );
}