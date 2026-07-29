import { Outlet } from "react-router"
import { Navbar } from "./Navbar"

export const DashboardRootLayout = () => {
    return (
        <div className="w-screen h-dvh bg-gray-200 px-4 p-2 space-y-1 ">
            <div>
                <Navbar />
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}