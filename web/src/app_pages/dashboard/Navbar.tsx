import { NavLink } from "react-router"
import { AppLogo } from "../../components/svgs/AppLogo"
import { NavbarIndicatorMessage } from "../../components/navbar-components/NavbarIndicatorMessage"
import { NavbarAvatarProgile } from "../../components/navbar-components/NavbarAvatarProfile"
// import { NavbarIndicatorSettings } from "../../components/navbar components/NavbarIndicatorSettings"



export const Navbar = () => {


    const navLinks = [
      {name : "Dashboard", link : "/dashboard"},
      {name: "Send", link : "/dashboard/send"},
      {name : "History", link : "/dashboard/history"},
      {name: "Messages", link: "/dashboard/messages"},

    ]
    const nav = navLinks.map((link) => (
        <li className="rounded-full px-2 " key={link.link}> 
            <NavLink end={ link.link == "/dashboard" } to={link.link} className={({isActive}) => `transition-all rounded-full  ${isActive ? "bg-primary text-white hover:text-primary" : "bg-secondary-content hover:text-primary text-primary"}  ` }> {link.name} </NavLink>
          </li>
    ))

    return (

      <nav className="navbar rounded-box border flex w-full items-center justify-between gap-2 bg-gray-100 shadow-base-300/20 outline shadow-sm">

        {/* Log */}
        <div className="navbar-start max-md:w-1/4">
          <AppLogo />
        </div>

        {/*Desktop nav menu*/}
        <div className="navbar-center max-md:hidden">
          <ul className="menu menu-horizontal p-0 space-x-4 font-medium font-poppins">
            
            {/* <li className="rounded-full">
              <Link className={`bg-primary hover:text-accent text-white rounded-full`} to={"/dashboard"}> Dashboard </Link>
            </li>

            <li className="bg-secondary-content rounded-full text-primary ">
              <Link className="hover:text-neutral  rounded-full " to={"/dashboard/send"}> Send </Link>
            </li>

            <li className="bg-secondary-content rounded-full text-primary hover:text-secondary">
              <Link className="hover:text-neutral rounded-full" to={"/dashboard/messages"}> Messages </Link>
            </li>

            <li className="bg-secondary-content rounded-full text-primary ">
              <Link className="hover:text-neutral rounded-full" to={"/dashboard/history"}> History </Link>
            </li> */}



            { nav }
   
          </ul>
        </div>

        <div className="navbar-end items-center gap-4">
          <div className="dropdown relative inline-flex md:hidden">

            {/* Mobile nav button */}
            <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
              <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
            </button>

            {/*Mobile nave menu*/}
            <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
              <li><a className="dropdown-item" href="#">Link 1</a></li>
              <li><a className="dropdown-item" href="#">Link 2</a></li>
              <li><a className="dropdown-item" href="#">Link 3</a></li>
            </ul>
          </div>




          {/*Indicators && Avatars*/}

          {/* <NavbarIndicatorSettings linkTo=""/> */}
          

          <NavbarIndicatorMessage />

          <NavbarAvatarProgile />
          
        </div>

    </nav>
    )
}