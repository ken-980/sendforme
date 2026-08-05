import { Link, useNavigate } from "react-router"
import React, { useState } from "react";



export const SignUp = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [errorMsg, setErrorMsg] = useState("");
      const navigate = useNavigate();

      const handleAuthSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();
    
            // set old errors to empty
        setErrorMsg(""); 

        if(email !== "user@outlook.com") {
            setErrorMsg("invalid email");
        }else if(password !== confirmPassword){
            setErrorMsg("passwords do not matach");
        }else{
            navigate("/dashboard");
        }
            
    

      } 

    return (
        
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-dvh overflow-hidden font-sans bg-[#f8f9fa]">
      
      {/* 1. LEFT BRANDING PANEL (Hidden on Mobile/Tablets, Visible on Desktops) */}
      <div 
        className="hidden lg:flex flex-col justify-between p-16 bg-cover bg-center relative select-none"
        style={{ backgroundImage: "url('/services/sign-bg.png')" }}
      >
        {/* Top Section: Branding/Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold tracking-tight font-poppins">
            SendForMe
          </span>
        </div>

        {/* Middle Section: Hero Text Statement */}
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tight">
            The platform where Africans remits to the Western
          </h1>
          <p className="text-slate-300 text-sm font-medium">
            The trusted choice.
          </p>
        </div>

        {/* Bottom Section: Copyright Notice */}
        <div className="text-xs text-slate-400 font-medium">
          Copyright © 2026 Uigeek Holdings, Inc. All rights reserved
        </div>
      </div>


      {/* 2. RIGHT LOGIN PANEL (Always centered on all screens) */}
      <div className="flex items-center justify-center bg-white lg:bg-transparent h-full w-full">
        {/* max-w-sm keeps the form container beautifully narrow and readable */}
        <div className="w-full max-w-sm flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Create a new account
            </h2>
          </div>

          {/* Social Auth Action Button */}
          <div className="w-full mb-4">
            <button 
              type="button" 
              className="btn btn-outline border-slate-200 bg-white hover:bg-slate-50 text-slate-700 w-full h-11 rounded-lg text-xs font-semibold gap-2 shadow-xs transition-all"
            >
              {/* FlyonUI high-performance universal icon modifier */}
              <span className="icon-[logos--google-icon] size-4 shrink-0" aria-hidden="true" />
              Continue with Google
            </button>
          </div>

          {/* FlyonUI Content Separator */}
          <div className="w-full mb-5">
            <div className="divider text-[10px] text-slate-300 uppercase tracking-widest before:bg-slate-100 after:bg-slate-100 my-0">
              or
            </div>
          </div>

          {/* Interactive Input Form Area */}
          <form className="w-full space-y-4" onSubmit={handleAuthSubmit}>
            {errorMsg && (
              <div className="alert alert-error text-xs rounded-xl p-3 font-semibold text-red-600 bg-red-50 border border-red-200 animate-fade-in">
                {errorMsg}
              </div>
            )}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="email" className="text-xs font-bold text-slate-700 pl-0.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-lg text-sm font-medium bg-white text-slate-800 placeholder:text-slate-300 px-4 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="email" className="text-xs font-bold text-slate-700 pl-0.5">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="your password"
                required
                className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-lg text-sm font-medium bg-white text-slate-800 placeholder:text-slate-300 px-4 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="email" className="text-xs font-bold text-slate-700 pl-0.5">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="your password"
                required
                className="input input-outlined border-slate-200/90 focus:border-primary w-full h-11 rounded-lg text-sm font-medium bg-white text-slate-800 placeholder:text-slate-300 px-4 transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary border-none text-white w-full h-11 rounded-lg text-sm font-bold tracking-wide shadow-sm hover:opacity-95 active:scale-[0.99] transition-all"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Bottom Navigation Link */}
          <div className="text-center mt-6">
            <p className="text-xs text-slate-400 font-medium">
               Have an account?{" "}
              <Link to="/" className="text-blue-500 font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
        
    )    
}