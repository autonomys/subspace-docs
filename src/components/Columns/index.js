import React from 'react';
import clsx from 'clsx'; 
export default function Columns({ children , className , style }) {
  return (
    <div className="container center">
          <div className={clsx('row' , className)} style={style}> 
            {children}    
        </div>
    </div> 
  );
}