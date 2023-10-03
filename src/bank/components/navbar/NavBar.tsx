import {FC} from 'react';
import './NavBar.css'
import { RxExit } from 'react-icons/rx';    
import {PiPiggyBankDuotone} from 'react-icons/pi';
import {MdAccountCircle} from 'react-icons/md';

export const NavBar: FC = () =>{
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
                    menu
               </div>

               <div className="hiden-icon">

                    <RxExit size = {30} className='exit-button'/>

               </div>

            </header>
    )
}