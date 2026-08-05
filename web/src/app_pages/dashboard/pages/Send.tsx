// import { ServiceLogo } from "../../../components/dashboard-components/ServiceLogo"
// import { PaymentMethodSelector } from "../../../components/send/PaymentMethodSelector"
// import { UserInfoSelect } from "../../../components/send/UserInfoInput"



// export const Send = () => {

        
//     const handleCheckoutSubmit = () => {
//         console.log("Processing secure payment request gateway transaction...");
//     };
    

//     return (
//         <div className="grid grid-cols-3 gap-4 mt-8">
//             <div className="col-span-2  p-4"> 
                
//                 {/*payment method*/}
//                 <div>
//                     <h2 className="font-poppins text-2xl font-semibold text-base-200"> Payment Method </h2>
                    
//                     <div className="mt-3 outline rounded-2xl font-poppins shadow-md">
//                         <div className="rounded-t-xl bg-gray-300 p-2">
//                             <h3 className="text-xl font-poppins text-base-100"> Select payment </h3>
//                         </div>

//                         <div className="">

//                             <PaymentMethodSelector />

//                         </div>



//                     </div>
//                 </div>

//                 {/*customer info*/}
//                 <div className="mt-5 outline rounded-2xl font-poppins shadow-md">
//                         <div className="rounded-t-xl bg-gray-300 p-2">
//                             <h3 className="text-xl font-poppins text-base-100"> Receiver's Info </h3>
//                         </div>
//                     <div>
//                         <UserInfoSelect />
//                     </div>
//                 </div>

//                 {/*payment*/}
//                 <div className="mt-5 outline rounded-2xl font-poppins shadow-md">
//                     <div className="rounded-t-xl bg-gray-300 p-2">
//                         <h3 className="text-xl font-poppins text-base-100"> Payment </h3>
//                     </div>

//                     <div className="flex justify-center items-center  p-4">

//                         <div className="input max-w-full h-12 space-x-3 bg-white">
//                             <span className="label-text my-auto">$</span>
//                             <input type="number" className="grow placeholder:text-base-content bg-white outline text-primary" placeholder="00.00" id="trailingAndLeadingInput" />
//                             <label className="sr-only" htmlFor="trailingAndLeadingInput">Enter amount</label>
//                             <span className="label-text my-auto">USD</span>
//                             </div>

//                     </div>
//                 </div>
//             </div>

//             <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md space-y-6 ">
                
//                 <div className="border p-2 space-y-2 rounded-xl shadow">
//                     <h5 className="font-poppins text-sm text-base-200">Remit</h5>

//                     <div className="bg-gray-300 flex justify-center p-2 rounded-2xl items-center">
//                         <ServiceLogo imgStyle="h-32" imgSrc="/services/zelle.png" altAttributeValue="Zelle" />
//                     </div>

//                     <div className="flex justify-between items-center">
//                         <span className="text-md text-xl text-base-200"> Zell  </span>
//                         <span className="text-primary text-lg"> $ 10,000 </span>
//                     </div>

//                 </div>
                
//                 <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md ">
//                     <h5 className="font-poppins text-sm text-base-200 my-2">Payment Summry</h5>
                    
//                     <div className="border p-4 space-y-6 rounded-xl">
//                         <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
//                             <h3> Sending Amount</h3>
//                             <span> $10,000.00 </span>
//                         </div>

//                         <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
//                             <h3>Gas fee</h3>
//                             <span> 1.3% = $200 </span>
//                         </div>

//                         <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
//                             <h3>Total</h3>
//                             <span> $10,200.00 </span>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <button className="btn btn-primary w-full font-poppins rounded-full">Pay now </button>
//                 </div>
                
//             </div>
//         </div>
//     )
// } 


import { useState } from "react"; // Added missing import
import { ServiceLogo } from "../../../components/dashboard-components/ServiceLogo"
import { PaymentMethodSelector, PAYMENT_METHODS } from "../../../components/send/PaymentMethodSelector"
import { UserInfoSelect } from "../../../components/send/UserInfoInput"

export const Send = () => {
    // 1. Initialize state management control right at the parent view level
    const [selectedMethodId, setSelectedMethodId] = useState<string>("zelle");

    // 2. Find matching details dynamically based on active identifier selection
    const activeMethod = PAYMENT_METHODS.find((m) => m.id === selectedMethodId) || PAYMENT_METHODS[1];

    const handleCheckoutSubmit = () => {
        console.log("Processing secure payment request gateway transaction...");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 px-2 md:px-0">
            
            {/* Left Content Area */}
            <div className="lg:col-span-2 p-0 md:p-4 space-y-5"> 
                
                {/* Payment Method */}
                <div>
                    <h2 className="font-poppins text-2xl font-semibold text-base-200"> Payment Method </h2>
                    
                    <div className="mt-3 outline rounded-2xl font-poppins shadow-md bg-white">
                        <div className="rounded-t-xl bg-gray-300 p-2">
                            <h3 className="text-xl font-poppins text-base-100"> Select payment </h3>
                        </div>
                        <div className="overflow-x-auto">
                            {/* 3. Link child component directly into parent state properties */}
                            <PaymentMethodSelector 
                                selectedMethod={selectedMethodId} 
                                onSelectMethod={setSelectedMethodId} 
                            />
                        </div>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="outline rounded-2xl font-poppins shadow-md bg-white">
                    <div className="rounded-t-xl bg-gray-300 p-2">
                        <h3 className="text-xl font-poppins text-base-100"> Receiver's Info </h3>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <UserInfoSelect />
                    </div>
                </div>

                {/* Payment */}
                <div className="outline rounded-2xl font-poppins shadow-md bg-white">
                    <div className="rounded-t-xl bg-gray-300 p-2">
                        <h3 className="text-xl font-poppins text-base-100"> Payment </h3>
                    </div>

                    <div className="flex justify-center items-center p-4">
                        <div className="input w-full max-w-sm h-12 space-x-3 bg-white">
                            <span className="label-text my-auto">$</span>
                            <input type="number" className="grow placeholder:text-base-content bg-white outline text-primary" placeholder="00.00" id="trailingAndLeadingInput" />
                            <label className="sr-only" htmlFor="trailingAndLeadingInput">Enter amount</label>
                            <span className="label-text my-auto">USD</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Summary Panel */}
            <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md space-y-6 h-fit">
                
                <div className="border p-2 space-y-2 rounded-xl shadow bg-white/60">
                    <h5 className="font-poppins text-sm text-base-200">Remit</h5>

                    {/* 4. DYNAMIC IMAGE ASSET: Synchronized directly with layout state */}
                    <div className="bg-gray-300 flex justify-center p-2 rounded-2xl items-center min-h-36">
                        <ServiceLogo imgStyle="h-32 object-contain" imgSrc={activeMethod.imgSrc} altAttributeValue={activeMethod.name} />
                    </div>

                    {/* 5. DYNAMIC NAME HEADING LABEL */}
                    <div className="flex justify-between items-center px-1">
                        <span className="text-xl text-base-200 font-bold"> {activeMethod.name} </span>
                        <span className="text-primary text-lg font-bold"> $ 10,000 </span>
                    </div>
                </div>
                
                <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md">
                    <h5 className="font-poppins text-sm text-base-200 my-2">Payment Summary</h5>
                    
                    <div className="border p-4 space-y-6 rounded-xl bg-white/50">
                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b pb-2">
                            <h3> Sending Amount</h3>
                            <span className="font-semibold"> $10,000.00 </span>
                        </div>

                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b pb-2">
                            <h3>Gas fee</h3>
                            <span className="font-semibold"> 1.3% = $200 </span>
                        </div>

                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b pb-2">
                            <h3>Total</h3>
                            <span className="font-bold text-slate-900"> $10,200.00 </span>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={handleCheckoutSubmit} className="btn btn-primary w-full font-poppins rounded-full h-12 text-sm font-bold shadow-sm">
                        Pay now
                    </button>
                </div>
                
            </div>
        </div>
    )
}

