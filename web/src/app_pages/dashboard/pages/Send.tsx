import { ServiceLogo } from "../../../components/dashboard-components/ServiceLogo"
import { PaymentMethodSelector } from "../../../components/send/PaymentMethodSelector"
import { UserInfoSelect } from "../../../components/send/UserInfoInput"



export const Send = () => {

   
        
        
    const handleCheckoutSubmit = () => {
        console.log("Processing secure payment request gateway transaction...");
    };
    

    return (
        <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="col-span-2  p-4"> 
                
                {/*payment method*/}
                <div>
                    <h2 className="font-poppins text-2xl font-semibold text-base-200"> Payment Method </h2>
                    
                    <div className="mt-3 outline rounded-2xl font-poppins shadow-md">
                        <div className="rounded-t-xl bg-gray-300 p-2">
                            <h3 className="text-xl font-poppins text-base-100"> Select payment </h3>
                        </div>

                        <div className="">

                            <PaymentMethodSelector />

                        </div>



                    </div>
                </div>

                {/*customer info*/}
                <div className="mt-5 outline rounded-2xl font-poppins shadow-md">
                        <div className="rounded-t-xl bg-gray-300 p-2">
                            <h3 className="text-xl font-poppins text-base-100"> Receiver's Info </h3>
                        </div>
                    <div>
                        <UserInfoSelect />
                    </div>
                </div>

                {/*payment*/}
                <div className="mt-5 outline rounded-2xl font-poppins shadow-md">
                    <div className="rounded-t-xl bg-gray-300 p-2">
                        <h3 className="text-xl font-poppins text-base-100"> Payment </h3>
                    </div>

                    <div className="flex justify-center items-center  p-4">

                        <div className="input max-w-full h-12 space-x-3 bg-white">
                            <span className="label-text my-auto">$</span>
                            <input type="number" className="grow placeholder:text-base-content bg-white outline text-primary" placeholder="00.00" id="trailingAndLeadingInput" />
                            <label className="sr-only" htmlFor="trailingAndLeadingInput">Enter amount</label>
                            <span className="label-text my-auto">USD</span>
                            </div>

                    </div>
                </div>
            </div>

            <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md space-y-6 ">
                
                <div className="border p-2 space-y-2 rounded-xl shadow">
                    <h5 className="font-poppins text-sm text-base-200">Remit</h5>

                    <div className="bg-gray-300 flex justify-center p-2 rounded-2xl items-center">
                        <ServiceLogo imgStyle="h-32" imgSrc="/services/zelle.png" altAttributeValue="Zelle" />
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-md text-xl text-base-200"> Zell  </span>
                        <span className="text-primary text-lg"> $ 10,000 </span>
                    </div>

                </div>
                
                <div className="outline p-6 bg-gray-200 rounded-2xl shadow-md ">
                    <h5 className="font-poppins text-sm text-base-200 my-2">Payment Summry</h5>
                    
                    <div className="border p-4 space-y-6 rounded-xl">
                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
                            <h3> Sending Amount</h3>
                            <span> $10,000.00 </span>
                        </div>

                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
                            <h3>Gas fee</h3>
                            <span> 1.3% = $200 </span>
                        </div>

                        <div className="flex justify-between items-center text-sm font-poppins text-base-300 border-b">
                            <h3>Total</h3>
                            <span> $10,200.00 </span>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary w-full font-poppins rounded-full">Pay now </button>
                </div>
                
            </div>
        </div>
    )
} 