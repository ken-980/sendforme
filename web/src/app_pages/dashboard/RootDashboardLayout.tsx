import { Outlet } from "react-router"
import { Navbar } from "./Navbar"

export const DashboardRootLayout = () => {
    return (
        <div className="w-screen h-dvh bg-white  p-4 ">
            <div>
                <Navbar />
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}