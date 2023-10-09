
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormData } from '../../../interfaces/formField/formField';
import Swal from 'sweetalert2';

interface BankState {
    bankNewAccount: FormData[],
    err: boolean | string
}

const initialState: BankState = {
    bankNewAccount: [],
    err: false
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {

        onNewAccount: (state, action: PayloadAction<FormData>)=> {

            const currentAccount = state.bankNewAccount.map(account => (account.iban))

            if(currentAccount.includes(action.payload.iban)){ // if has the same IBAN, not can to include in the array
                state.err = 'IBAN IS USED'
                Swal.fire(
                    'IBAN en uso!',
                    '',
                    'error'
                )
                return;
            }

            state.bankNewAccount.push(action.payload);
            Swal.fire(
                'Cuenta Agregada !!!',
                '',
                'success',
              )
            state.err = false;

        }

    },
})

// Action creators are generated for each case reducer function
export const { onNewAccount } = bankSlice.actions

export default bankSlice.reducer