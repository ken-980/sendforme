
export function SocialLoginRow() {
  return (
    <div className="w-full max-w-md mt-3 mx-auto space-y-4">
      {/* 1. The "OR" Separator Line
      <div className="divider text-xs text-base-content/40 uppercase tracking-widest before:bg-base-content/10 after:bg-base-content/10">
        OR
      </div> */}

      {/* 2. The Social Buttons Grid Container */}
      <div className="flex gap-3 justify-between items-center w-full">
        {/* Apple Login Button */}
        <button 
          type="button" 
          className="btn btn-square flex-1 bg-neutral-800 hover:bg-neutral-700 text-white border-none shadow-md rounded-xl h-12"
          aria-label="Sign in with Apple"
        >
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/mac-os.png" alt="mac-os"/>
        </button>

        {/* Google Login Button */}
        <button 
          type="button" 
          className="btn btn-square flex-1 bg-neutral-800 hover:bg-neutral-700 text-white border-none shadow-md rounded-xl h-12"
          aria-label="Sign in with Google"
        >
          {/* Custom Google SVG to preserve official colors */}
          <svg className="size-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.7 12.3c0-.8-.1-1.7-.2-2.5H12v4.8h6.6c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.9c2.3-2.1 3.6-5.2 3.6-9.1z"/>
            <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3.1c-1.1.7-2.5 1.2-4.1 1.2-3.2 0-5.8-2.1-6.8-5H1.2v3.2C3.2 21.4 7.3 24 12 24z"/>
            <path fill="#FBBC05" d="M5.2 14.2c-.3-.7-.4-1.5-.4-2.2s.1-1.5.4-2.2V6.6H1.2C.4 8.2 0 10.1 0 12s.4 3.8 1.2 5.4l4-3.2z"/>
            <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.1 0 12 0 7.3 0 3.2 2.6 1.2 6.6l4 3.2c1-2.9 3.6-5 6.8-5z"/>
          </svg>
        </button>

        {/* X (Twitter) Login Button */}
        <button 
          type="button" 
          className="btn btn-square flex-1 bg-neutral-800 hover:bg-neutral-700 text-white border-none shadow-md rounded-xl h-12"
          aria-label="Sign in with X"
        >
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/twitterx--v2.png" alt="twitterx--v2"/>
        </button>
      </div>
    </div>
  );
}
