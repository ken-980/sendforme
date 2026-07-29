

interface StatItemProps {
  label: string;
  value: string;
  // Use a Tailwind border color class, e.g., 'border-teal-500' or 'border-[#38bdf8]'
  borderColorClass: string; 
}

export const StatItem = ({ label, value, borderColorClass }: StatItemProps) => {
  return (
    // Base layout with a thick left border and padding
    <div className={`border-l-2 pl-3 ${borderColorClass}`}>
      {/* Label styled with small, muted text */}
      <span className="block text-xs font-medium text-slate-400 mb-0.5 tracking-wide">
        {label}
      </span>
      {/* Value styled with large, prominent text */}
      <span className="block text-xl text-slate-800 tracking-tight">
        {value}
      </span>
    </div>
  );
};
