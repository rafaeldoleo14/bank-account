import { FC } from "react"
import './Layout.css';
import { Dashboard } from "../components/dashboard/Dashboard";
import { NavBar } from "../components/navbar/NavBar";
import { LayoutProp } from "../interfaces/layout/layout";
import { useAppDispatch, useAppSelector } from "../store/store";
import { onShowDashboard } from "../store/slices/ui/UISlice";

export const Layout: FC<LayoutProp> = ({children}) => {

  const {showDashboard} = useAppSelector(state => state.ui);
  const dispatch = useAppDispatch();

    const handleShowDashboard = ()=>{
        dispatch(onShowDashboard());
    }

  return (
    <div className="layout-container">

        <NavBar/>

        <div className="accounts-container">

          <div onClick={handleShowDashboard} className="close-menu" style={{right: showDashboard ? '' : '-10000px',}}>
            
          </div>

          <Dashboard/>

          <div className="accounts-content">
              {children}
          </div>

        </div>

    </div>
  )
}
