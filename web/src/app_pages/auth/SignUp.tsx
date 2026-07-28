import { Link } from "react-router"
import { SocialLoginRow } from "../../components/Socials"



export const SignUp = () => {
    return (
        
    <div className="grid place-items-center w-screen h-dvh bg-black">
                <div className="card text-center p-6 bg-zinc-900 rounded shadow-xl space-y-2">
    
                    <div className="card-body p-2 w-96">
                        <div className="card-body p-0">
                            <div className="mb-4">
                                <h2 className="card-title text-2xl font-bold font-poppins justify-center mb-4">Welcome Back</h2>
                                <p className="text-gray-600 font-poppins">Don't have an account yet? <span className="text-white"> <Link to={"/"} >  Sign in </Link> </span> </p>
                            </div>
    
                            <form className="space-y-6" >

                                <div className="input max-w-sm border-0">
                                    <span className="icon-[tabler--user] text-base-content/80 my-auto size-5 shrink-0"></span>
                                    <div className="input-floating grow">
                                        <input type="text" className="grow no-focus font-poppins ps-3" placeholder="Full Name" id="floatingInputFullName" />
                                        <label className="input-floating-label" htmlFor="floatingInputEmail">Full Name</label>
    
                                    </div>
                                </div>

                                <div className="input max-w-sm border-0">
                                    <span className="icon-[tabler--user] text-base-content/80 my-auto size-5 shrink-0"></span>
                                    <div className="input-floating grow">
                                        <input type="text" className="grow no-focus font-poppins ps-3" placeholder="Email Address" id="floatingInputEmail" />
                                        <label className="input-floating-label" htmlFor="floatingInputEmail">Email address</label>
    
                                    </div>
                                </div>
    
                                <div className="input border-0 max-w-sm">
                                    <span className="icon-[tabler--lock] text-base-content/80 my-auto size-5 shrink-0"></span>
                                    <div className="input-floating grow">
                                        <input type="password" placeholder="Password" className="input no-focus font-font-poppins  ps-3" id="floatingInput" required />
                                        <label className="input-floating-label font-po" htmlFor="floatingInput">Password</label>
    
                                    </div>
                                </div>

                                <div className="input border-0 max-w-sm">
                                    <span className="icon-[tabler--lock] text-base-content/80 my-auto size-5 shrink-0"></span>
                                    <div className="input-floating grow">
                                        <input type="password" placeholder="Enter same password" className="input no-focus font-font-poppins  ps-3" id="floatingInputPasswordRe-enter" required />
                                        <label className="input-floating-label font-po" htmlFor="floatingInputPasswordRe-enter">Re-enter password</label>
    
                                    </div>
                                </div>
    
    
                                <button type="submit" className="btn btn-accent w-full mt-2">
                                    Sign up
                                </button>
    
    
                                {/* svg icons */}
                                <div>
                                    <div className="divider text-xs text-base-content/40 uppercase tracking-widest before:bg-base-content/10 after:bg-base-content/10 mb-2"> 
                                        OR 
                                    </div>
    
                                    <SocialLoginRow />
    
                                </div>
    
                            </form>
                        </div>
    
                    </div>
                
                </div>
            </div>
        
    )    
}