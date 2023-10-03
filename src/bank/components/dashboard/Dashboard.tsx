import { FC } from "react"
import './Dasboard.css';
import { dashboardOpcions } from "../../utils/getDashboardOpcions";

export const Dashboard: FC = () => {
  return (
    <div className="menu-container">

      {
        dashboardOpcions.map(({text, icon})=> (
          <p key={text} className="active"> {icon} {text}</p>
        ))
      }

    </div>
  )
}
