import { Link } from "react-router"



interface NavbarIndicatorSettingsProps{
    linkTo? : string
}

export const NavbarIndicatorSettings = ({linkTo} : NavbarIndicatorSettingsProps ) => {
    return(
        <>
            <Link to={linkTo ?? "#"}>
                <button className="btn btn-sm btn-text btn-circle bg-secondary-content size-10" aria-label="Search Button">
                    <span className="icon-[tabler--settings] text-base-300 size-5.5"></span>
                </button>
            </Link>

        </>
    )
}