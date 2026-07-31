import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout"; // Path to layout file
import { SignIn } from "./app_pages/auth/SignIn";
import { SignUp } from "./app_pages/auth/SignUp";
import { DashboardRootLayout } from "./app_pages/dashboard/RootDashboardLayout";
import { DashboardHome } from "./app_pages/dashboard/pages/DashboardHome";
import { DashboardMessages } from "./app_pages/dashboard/pages/DashboardMessage";
import { TransactionsHistory } from "./app_pages/dashboard/pages/TransactionsHistory";
import { Send } from "./app_pages/dashboard/pages/Send";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, 
        Component: SignIn
      },
      {
        path : "/signup",
        Component: SignUp
      },

      {
        path: "/dashboard",
        Component: DashboardRootLayout,
        children : [
          {
            index : true,
            Component : DashboardHome
          },
          {
            path : "messages",
            Component : DashboardMessages
          },
          {
            path : "history",
            Component : TransactionsHistory
          },
          {
            path : "send",
            Component : Send 
          }


        ]
        
        
      }
      
      
    ]
  }
]);
