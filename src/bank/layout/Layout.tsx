import { FC, ReactNode } from "react"
import './Layout.css';
import { Dashboard } from "../components/dashboard/Dashboard";
import { NavBar } from "../components/navbar/NavBar";

interface LayoutProp {
    children: ReactNode
}

export const Layout: FC<LayoutProp> = ({children}) => {
  return (
    <div className="layout-container">

        <NavBar/>

        <div className="accounts-container">

          <Dashboard/>

          <div className="accounts-content">
              {children}
          </div>

        </div>

    </div>
  )
}
