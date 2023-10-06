import { FC } from "react"
import './Dasboard.css';
import { dashboardOpcions } from "../../utils/getDashboardOpcions";
import {NavLink} from 'react-router-dom'

interface DashboardProp {
  showDashboard: boolean
}

export const Dashboard: FC<DashboardProp> = ({showDashboard}) => {

  console.log(showDashboard);

  return (
    <div className={`menu-container ${showDashboard ? 'active' : ''}`}>

      {
        dashboardOpcions.map(({text, icon, path})=> (
          <NavLink key={text} to={path}>
            {icon} {text}
          </NavLink>
        ))
      }

    </div>
  )
}
