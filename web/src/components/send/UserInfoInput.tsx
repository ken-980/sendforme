

// export const UserInfoSelect = () => {

//     return(
//         <>
//             <div className="flex justify-center gap-4 w-full p-4">
//                 <div className="w-96">
//                     <label className="label-text font-poppins text-base-200" htmlFor="defaultInput">Full name</label>
//                     <input type="text" placeholder="John Doe" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInput" />
//                     <span className="helper-text text-base-200">Please enter receiver's account full name </span>

//                 </div>

//                 <div className="w-96">
//                     <label className="label-text font-poppins text-base-100" htmlFor="defaultInputEmail">Email</label>
//                     <input type="text" placeholder="doe@gmail.com" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInputEmail" />
//                     <span className="helper-text text-base-200">Please enter receiver's account email </span>

//                 </div>

//                 <div className="w-96">
//                     <label className="label-text font-poppins text-base-100" htmlFor="defaultInputPhone">Phone or tag</label>
//                     <input type="text" placeholder="+14897878 or @johndoe" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInputPhone" />
//                     <span className="helper-text text-base-200">Please enter receiver's account tag or phone number for the service choosen </span>

//                 </div>

//                 <div>
//                     qr code scanner here 
//                 </div>



//             </div>
//         </>
//     )
// }


import { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export const UserInfoSelect = () => {
  // Localized form values state management
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneOrTag, setPhoneOrTag] = useState("");
  
  // Modal tracking state for the camera popup
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  // Initialize/Destroy the scanner instance dynamically based on the modal state
  useEffect(() => {
    if (isScannerOpen) {
      // Small timeout ensures the HTML container element #reader is fully mounted in the DOM
      const timer = setTimeout(() => {
        const scanner = new Html5QrcodeScanner(
          "qr-reader-container",
          { 
            fps: 10, 
            qrbox: { width: 250, height: 250 },
            rememberLastUsedCamera: true
          },
          /* verbose= */
            false
        );

        scannerRef.current = scanner;

        scanner.render(
          (decodedText) => {
            // SUCCESS HANDLER: Parses incoming dynamic scanned QR data
            try {
              // Option A: If your QR holds a JSON object string like {"name": "...", "email": "..."}
              const parsedData = JSON.parse(decodedText);
              if (parsedData.name) setFullName(parsedData.name);
              if (parsedData.email) setEmail(parsedData.email);
              if (parsedData.tag) setPhoneOrTag(parsedData.tag);
            } catch {
              // Option B: If your QR holds a raw plain text string fallback, dump it into the tag input
              setPhoneOrTag(decodedText);
            }

            // Close down camera cleanly after discovery
            handleCloseScanner();
          },
          (errorMessage) => {
            // Non-breaking verbose error catcher (camera frames passing without code)
            console.log(errorMessage);
          }
        );
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isScannerOpen]);

  const handleCloseScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear().catch((err) => console.error("Failed to clear scanner:", err));
      scannerRef.current = null;
    }
    setIsScannerOpen(false);
  };

  return (
    <>
      {/* Container: Replaced rigid w-96 flex elements with a fluid, responsive layout grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full p-5 items-end bg-white">
        
        {/* Full Name Field */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 tracking-wide pl-0.5" htmlFor="defaultInput">
            Full name
          </label>
          <input 
            type="text" 
            placeholder="John Doe" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-xl text-sm font-medium bg-white text-slate-800 px-4 transition-all" 
            id="defaultInput" 
          />
          <span className="text-[10px] text-slate-400 font-medium pl-0.5 leading-snug">
            Please enter receiver's account full name
          </span>
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 tracking-wide pl-0.5" htmlFor="defaultInputEmail">
            Email
          </label>
          <input 
            type="email" 
            placeholder="doe@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-xl text-sm font-medium bg-white text-slate-800 px-4 transition-all" 
            id="defaultInputEmail" 
          />
          <span className="text-[10px] text-slate-400 font-medium pl-0.5 leading-snug">
            Please enter receiver's account email
          </span>
        </div>

        {/* Phone or Tag Field */}
        <div className="w-full flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700 tracking-wide pl-0.5" htmlFor="defaultInputPhone">
            Phone or tag
          </label>
          <input 
            type="text" 
            placeholder="+14897878 or @johndoe" 
            value={phoneOrTag}
            onChange={(e) => setPhoneOrTag(e.target.value)}
            className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-xl text-sm font-medium bg-white text-slate-800 px-4 transition-all" 
            id="defaultInputPhone" 
          />
          <span className="text-[10px] text-slate-400 font-medium pl-0.5 leading-snug">
            Please enter account tag or phone number
          </span>
        </div>

        {/* QR Scanner Action Button Module Slot */}
        <div className="w-full pt-2">
          <button
            type="button"
            onClick={() => setIsScannerOpen(true)}
            className="btn btn-outline border-slate-200 hover:bg-slate-50 text-slate-700 w-full h-11 rounded-xl text-xs font-bold gap-2 shadow-xs transition-all"
          >
            <span className="icon-[tabler--qrcode] size-5 text-slate-500" aria-hidden="true" />
            Scan Receiver QR
          </button>
        </div>

      </div>

      {/* FLYONUI MODAL: Scanner Camera Backdrop Mask Popup Viewport */}
      {isScannerOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="card bg-white w-full max-w-md rounded-2xl border border-slate-100 shadow-2xl overflow-hidden font-poppins">
            
            {/* Modal Title Banner Header */}
            <div className="flex justify-between items-center bg-slate-50 border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="icon-[tabler--camera] size-5 text-primary" />
                <h3 className="text-sm font-bold text-slate-800">Scan QR Code Target</h3>
              </div>
              <button 
                onClick={handleCloseScanner}
                className="btn btn-text btn-circle btn-xs text-slate-400 hover:text-slate-600 focus:outline-none"
                aria-label="Close scanner modal"
              >
                <span className="icon-[tabler--x] size-4" />
              </button>
            </div>

            {/* Live Decoder Video Wrapper Frame body */}
            <div className="p-5 bg-white flex flex-col items-center justify-center">
              <div id="qr-reader-container" className="w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50" />
              <p className="text-center text-[11px] font-medium text-slate-400 mt-4 max-w-[80%] leading-normal">
                Align the receiver's custom invoice code or user matrix identifier inside the framing guides to populate the details.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
