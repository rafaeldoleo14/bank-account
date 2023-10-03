import { FC, ReactNode } from "react"
import './Layout.css';
import { Dashboard } from "../components/dashboard/Dashboard";

interface LayoutProp {
    children: ReactNode
}

export const Layout: FC<LayoutProp> = ({children}) => {
  return (
    <div className="layout-container">

        <div className="accounts-container">

          <Dashboard/>

          <div className="accounts-content">
              {children}
          </div>

        </div>

    </div>
  )
}
