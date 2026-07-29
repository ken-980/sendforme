
interface SegmentedProgressProps {
  /** Value from 0 to 100 */
  value: number; 
  /** Total number of vertical bars to render */
  totalSegments?: number; 
}

export const SegmentedProgress = ({ value, totalSegments = 24 }: SegmentedProgressProps) => {
  // Calculate how many bars should be colored active based on the percentage
  const activeCount = Math.round((value / 100) * totalSegments);

  return (
    <div className="w-full max-w-xl font-sans select-none">
      {/* 1. Numeric Labels Scale */}
      <div className="flex justify-between text-xs font-medium text-slate-700 px-1 mb-2">
        <span>1</span>
        <span>10k</span>
        <span>100k</span>
        <span>500k</span>
      </div>

      {/* 2. Segmented Progress Bar Track */}
      <div className="flex items-center gap-1 w-full">
        {Array.from({ length: totalSegments }).map((_, index) => {
          const isActive = index < activeCount;
          return (
            <div
              key={index}
              className={`h-14 flex-1 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-[#a3e635] shadow-xs" // Active bright green fill
                  : "bg-[#f4fce3]"           // Empty soft green tint track
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
