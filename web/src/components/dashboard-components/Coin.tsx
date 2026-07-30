
interface CoinStatProp {
  coinName: string;  // e.g., "USD"
  imgSrc: string;     
  currentPrice: string;       // e.g., "$22,678.00"
  stateText: string;     // e.g., "Limit is $10k a month"
  isActive: boolean;     // Active or Inactive state
}

interface CoinCardProps {
  coin: CoinStatProp;
}

export const CoinStat = ({ coin }: CoinCardProps) => {
  const { coinName, imgSrc, currentPrice, stateText, isActive } = coin;

  return (
    <div className="card bg-gray-100 border border-slate-100/80 rounded-2xl p-2 shadow-md font-poppins relative">
      
      {/* Header: Flag, Code and Options Menu */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {/* Circular Flag Asset */}
          <img className="size-6 rounded-full inline-block bg-cover bg-center" src={imgSrc} alt="" />
          <span className="font-bold text-slate-800 text-sm tracking-wide">{coinName}</span>
        </div>

        {/* FlyonUI Dropdown Trigger for Three-Dot Options */}
        <div className="dropdown dropdown-end">
          <button className="btn btn-text btn-circle btn-xs text-slate-400 hover:text-slate-600">
            <span className="icon-[tabler--dots-vertical] size-4" />
          </button>
        </div>
      </div>

      {/* Body: Balance and Account Limit */}
      <div className="mb-2">
        <h3 className="text-sm text-slate-900 tracking-tight">{currentPrice}</h3>
        <p className="text-xs text-slate-400 font-medium mt-1">{stateText}</p>
      </div>

      {/* Footer: Status Indicator */}
      <div>
        <span className={`rounded-full text-xs ${
          isActive ? "text-success" : "text-error"
        }`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
};
