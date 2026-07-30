import type React from "react";

interface StatItemProps {
  label: string;
  value: string;
  // Use a Tailwind border color class, e.g., 'border-teal-500' or 'border-[#38bdf8]'
  borderColorClass: string;
  children : React.ReactNode | string 
}

export const StatItem = ({ children, value, borderColorClass }: StatItemProps) => {
  return (
    // Base layout with a thick left border and padding
    <div className={`border-l-2 pl-3 ${borderColorClass}`}>
      {/* Label styled with small, muted text */}
      <span className="block text-xs font-medium text-slate-400 mb-0.5 tracking-wide">
        {children}
      </span>
      {/* Value styled with large, prominent text */}
      <span className="block text-xl text-slate-800 tracking-tight">
        {value}
      </span>
    </div>
  );
};
