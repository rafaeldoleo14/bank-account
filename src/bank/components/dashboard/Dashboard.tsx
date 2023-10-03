import { FC } from "react"
import './Dasboard.css';
import { dashboardOpcions } from "../../utils/getDashboardOpcions";
import {NavLink} from 'react-router-dom'

export const Dashboard: FC = () => {

  return (
    <div className="menu-container">

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
