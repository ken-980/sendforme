import { Link } from "react-router"; 
import { SocialLoginRow } from "../Socials";

export function LoginForm() {
  return (
    // Replaced rigid w-96 with a fluid responsive max-w-sm layout
    <div className=" bg-white border border-slate-200/80 rounded-2xl w-full shadow-md font-poppins">
      <div className=" p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-950 mb-1">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <form className=" flex flex-col justify-center items-center outline space-y-4">
          {/* Email Floating Input Group */}
          <div className="input-floating relative">
            <input 
              type="email" 
              id="floatingInputEmail" 
              className="input input-outlined focus:border-primary pt-4 h-14 w-full rounded-xl text-sm font-medium text-slate-800" 
              placeholder="Email address"
              required 
            />
            <label 
              htmlFor="floatingInputEmail" 
              className="input-floating-label text-slate-400"
            >
              Email address
            </label>
          </div>

          {/* Password Floating Input Group */}
          <div className="input-floating relative">
            <input 
              type="password" 
              id="floatingInputPassword" 
              className="input input-outlined focus:border-primary pt-4 h-14 w-full rounded-xl text-sm font-medium text-slate-800" 
              placeholder="Password"
              required 
            />
            <label 
              htmlFor="floatingInputPassword" 
              className="input-floating-label text-slate-400"
            >
              Password
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button 
              type="submit" 
              className="btn btn-primary rounded-xl w-full h-12 text-sm font-bold tracking-wide shadow-sm hover:opacity-95 transition-all"
            >
              Log In
            </button>
          </div>

          {/* Separator Divider */}
          <div className="pt-2">
            <div className="divider text-xs text-slate-400 uppercase tracking-widest before:bg-slate-100 after:bg-slate-100 my-0"> 
              OR 
            </div>
          </div>
          
          {/* Social Row */}
          <SocialLoginRow />
        </form>
      </div>
    </div>
  );
}
