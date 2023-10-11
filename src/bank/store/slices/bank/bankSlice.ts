
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormData } from '../../../interfaces/formField/formField';
import { deletePropsByAccount } from '../../../utils/deletePropsByAccount';
import { errorIbanMessage, newAccountSaveMessage } from '../../../utils/showSweetAlert';

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
                errorIbanMessage();
                return;
            }

            deletePropsByAccount(action);

            state.bankNewAccount.push(action.payload);

            newAccountSaveMessage();

            state.err = false;

        }

    },
})

// Action creators are generated for each case reducer function
export const { onNewAccount } = bankSlice.actions

export default bankSlice.reducer