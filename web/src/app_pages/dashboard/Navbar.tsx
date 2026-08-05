// import { NavLink } from "react-router"
import { AppLogo } from "../../components/svgs/AppLogo"
import { NavbarIndicatorMessage } from "../../components/navbar-components/NavbarIndicatorMessage"
import { NavbarAvatarProfile } from "../../components/navbar-components/NavbarAvatarProfile"



// export const Navbar = () => {


//     const navLinks = [
//       {name : "Dashboard", link : "/dashboard"},
//       {name: "Send", link : "/dashboard/send"},
//       {name : "History", link : "/dashboard/history"},
//       {name: "Messages", link: "/dashboard/messages"},

//     ]
//     const nav = navLinks.map((link) => (
//         <li className="rounded-full px-2 " key={link.link}> 
//             <NavLink end={ link.link == "/dashboard" } to={link.link} className={({isActive}) => `transition-all rounded-full  ${isActive ? "bg-primary text-white hover:text-primary" : "bg-secondary-content hover:text-primary text-primary"}  ` }> {link.name} </NavLink>
//           </li>
//     ))

//     return (

//       <nav className="navbar rounded-box border flex w-full items-center justify-between gap-2 bg-gray-100 shadow-base-300/20 outline shadow-sm">

//         {/* Log */}
//         <div className="navbar-start max-md:w-1/4">
//           <AppLogo />
//         </div>

//         {/*Desktop nav menu*/}
//         <div className="navbar-center max-md:hidden">
//           <ul className="menu menu-horizontal p-0 space-x-4 font-medium font-poppins">
          

//             { nav }
   
//           </ul>
//         </div>

//         <div className="navbar-end items-center gap-4">
//           <div className="dropdown relative inline-flex md:hidden">

//             {/* Mobile nav button */}
//             <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
//               <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
//               <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
//             </button>

//             {/*Mobile nave menu*/}
//             <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
//               <li><a className="dropdown-item" href="#">Link 1</a></li>
//               <li><a className="dropdown-item" href="#">Link 2</a></li>
//               <li><a className="dropdown-item" href="#">Link 3</a></li>
//             </ul>
//           </div>
          


//           <NavbarIndicatorMessage />

//           <NavbarAvatarProgile />
          
//         </div>

//     </nav>
//     )
// }


import { NavLink } from "react-router"; // Adjust if your ecosystem uses "react-router-dom"

export const Navbar = () => {
  const navLinks = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Send", link: "/dashboard/send" },
    { name: "History", link: "/dashboard/history" },
    { name: "Messages", link: "/dashboard/messages" }
  ];

  // Helper function to keep style strings organized and clean
  const getLinkStyles = (isActive: boolean) =>
    `transition-all rounded-full px-4 py-2 block text-sm font-semibold tracking-wide ${
      isActive
        ? "bg-primary text-white"
        : "bg-secondary-content hover:bg-slate-200 text-primary"
    }`;

  // 1. Desktop Nav Mapping (Horizontal layout)
  const desktopNav = navLinks.map((link) => (
    <li className="rounded-full px-1" key={`desktop-${link.link}`}>
      <NavLink
        end={link.link === "/dashboard"}
        to={link.link}
        className={({ isActive }) => getLinkStyles(isActive)}
      >
        {link.name}
      </NavLink>
    </li>
  ));

  // 2. Mobile Dropdown Nav Mapping (Vertical layout)
  const mobileNav = navLinks.map((link) => (
    <li key={`mobile-${link.link}`}>
      <NavLink
        end={link.link === "/dashboard"}
        to={link.link}
        className={({ isActive }) => 
          `dropdown-item rounded-xl py-2.5 ${getLinkStyles(isActive)}`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navbar rounded-box border flex w-full items-center justify-between gap-2 bg-gray-100 shadow-base-300/20 shadow-sm px-4">
      
      {/* Brand Identity Branding Logo */}
      <div className="navbar-start max-md:w-1/4">
        <AppLogo />
      </div>

      {/* Desktop Navigation Track Structure (Hidden on small viewports) */}
      <div className="navbar-center max-md:hidden">
        <ul className="menu menu-horizontal p-0 space-x-2 font-medium font-poppins">
          {desktopNav}
        </ul>
      </div>

      {/* Action Suite & Mobile Drawer Framework */}
      <div className="navbar-end items-center gap-4">
        
        {/* Mobile Dropdown (Visible on small viewports, hidden on mid screens) */}
        <div className="dropdown dropdown-bottom dropdown-end relative inline-flex md:hidden">
          
          {/* Mobile Hamburg Trigger Toggle */}
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square hover:bg-slate-200"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5" />
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5" />
          </button>

          {/* Mobile Overlay Dropdown Drawer Deck */}
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-56 mt-2 bg-white border border-slate-100 p-2 rounded-2xl shadow-lg space-y-1 font-poppins z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            {mobileNav}
          </ul>
        </div>

        {/* Global Dashboard Indicators */}
        <NavbarIndicatorMessage />
        <NavbarAvatarProfile />
        
      </div>
    </nav>
  );
};
