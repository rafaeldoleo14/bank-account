import {FC} from 'react';
import './NavBar.css'
import { RxExit } from 'react-icons/rx';    
import {PiPiggyBankDuotone} from 'react-icons/pi';
import {MdAccountCircle} from 'react-icons/md';
import {BiMenuAltLeft} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { onShowDashboard } from '../../store/slices/ui/UISlice';

export const NavBar: FC = () =>{

    const {showDashboard} = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();

    const handleShowDashboard = ()=>{
        dispatch(onShowDashboard());
    }

    return (
            <header className='nav-bar'>

               <div>

                <PiPiggyBankDuotone size={60}/>
                <h2>Bank Accounts</h2>
                
               </div>

               <div className='navbar-options'>

                    <p>Jeromy</p>

                    <div className='circle'>
                        <MdAccountCircle size={35}/>
                        <div>
                            2
                        </div>

                    </div>

                    <RxExit size = {30} className='exit-button'/>

               </div>

               <div className='toogle-icons'>

                    {
                        showDashboard ? <AiOutlineClose size={30} onClick={handleShowDashboard}/> : <BiMenuAltLeft size={35} onClick={handleShowDashboard}/>
                    }
                    
               </div>

               <div className="hiden-icon">

                    <RxExit size = {30} className='exit-button'/>

               </div>

            </header>
    )
}