import { FC, useState } from "react"
import './Layout.css';
import { Dashboard } from "../components/dashboard/Dashboard";
import { NavBar } from "../components/navbar/NavBar";
import { LayoutProp } from "../interfaces/layout/layout";

export const Layout: FC<LayoutProp> = ({children}) => {

  // Prueba

  const [showDashboard, setShowDashboard] = useState<boolean>(true);

  const onClick = ()=>{
    setShowDashboard(!showDashboard);
  }

  // Cierre prueba

  return (
    <div className="layout-container">

        <NavBar/>

        <div className="accounts-container">

        <div className="close-menu" onClick={onClick} style={{display: showDashboard ? 'flex' : 'none', transition: 'transition: all 0.30s ease'}}>
          
        </div>

          <Dashboard showDashboard={showDashboard}/>

          <div className="accounts-content">
              {children}
          </div>

        </div>

    </div>
  )
}
