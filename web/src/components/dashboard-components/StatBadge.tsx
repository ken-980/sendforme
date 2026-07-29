
import type React from "react";

interface StatBadgeProps {
  iconClass: string;        
  children? : React.ReactNode
     
}

export const StatBadge = ({ iconClass, children}: StatBadgeProps) => {
  return (
    <div className="badge badge-soft bg-secondary-content rounded-full flex items-center gap-2 py-3.5 px-4 text-sm">

      <span className={`${iconClass} size-5 text-slate-500`} aria-hidden="true" />
      
      {children}
      
    </div>
  );
};
