import { FC } from "react"
import './Dasboard.css';
import { dashboardOpcions } from "../../utils/getDashboardOpcions";
import {NavLink} from 'react-router-dom'
import { useAppSelector } from "../../store/store";

export const Dashboard: FC = () => {

  const {showDashboard} = useAppSelector(state => state.ui);

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
