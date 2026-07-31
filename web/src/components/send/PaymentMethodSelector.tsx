import { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  imgSrc: string; // Path to your payment partner logos
}

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "dana", name: "Cashapp", imgSrc: "/services/cashapp.png" },
  { id: "gopay", name: "Zelle", imgSrc: "/services/zelle.png" },
  { id: "shopeepay", name: "PayPal", imgSrc: "/services/paypal.png" },
  { id: "truemoney", name: "Venmo", imgSrc: "/services/venmo.png" },
  
];

export const  PaymentMethodSelector = () => {
  // Track which wallet option is currently selected (Defaulting to GoPay from your image)
  const [selectedMethod, setSelectedMethod] = useState<string>("gopay");

  return (
    <div className="w-full p-4">
      {/* Responsive Row Grid Layout */}
      <div className="flex justify-between ">
        {PAYMENT_METHODS.map((method) => {
          const isSelected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              type="button"
              className={`relative aspect-square size-30 rounded-2xl border bg-slate-50 p-4 flex items-center justify-center transition-all shadow-xs group focus:outline-none ${
                isSelected
                  ? "border-primary ring-1 ring-primary/20 scale-[0.98]"
                  : "border-slate-100 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Checkmark Indicator Badge (Top Right Corner) */}
              {isSelected && (
                <div className="absolute -top-1.5 -right-1.5 bg-primary text-white rounded-full p-0.5 shadow-sm flex items-center justify-center size-5 animate-scale-up">
                  <span className="icon-[tabler--check] size-3.5 stroke-3" />
                </div>
              )}

              {/* Brand Logo Asset */}
              <img
                src={method.imgSrc}
                alt={`${method.name} logo`}
                className="max-h-12 max-w-[85%] object-contain grayscale-20 group-hover:grayscale-0 transition-all"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
