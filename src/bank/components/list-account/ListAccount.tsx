import {FC} from 'react';
import './ListAccount.css'
import { ListItems } from '../list-account-items/ListItems';
import { useAppSelector } from '../../store/store';

export const ListAccount: FC = () =>{

    const {bankNewAccount} = useAppSelector(state => state.bank);

    return(
        <div className='list-account-container'>

          {
            bankNewAccount.length != 0 ? <h1>Lista de cuentas</h1> : <h1>No hay mio</h1>
          }

            <div className='account-tables'>
                <ListItems types='ahorro' title='Cuenta Ahorro'/>
                <ListItems types='personal' title='Cuenta Personal'/>
                <ListItems types='empresarial' title='Cuenta Empresarial'/>
            </div>
          
        </div>
    )
}