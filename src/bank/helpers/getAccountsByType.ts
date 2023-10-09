
import { useAppSelector } from '../store/store'

type Cuentas = 'ahorro' | 'personal' | 'corriente'; 

export const getAccountsByType = (type: Cuentas) => {

    const {bankNewAccount} = useAppSelector(state => state.bank);

    return bankNewAccount.filter(account => account.cuentas == type);
 
}