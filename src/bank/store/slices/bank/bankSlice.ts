
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormData } from '../../../interfaces/formField/formField';

interface BankState {
    bankNewAccount: FormData[]
}

const initialState: BankState = {
    bankNewAccount: []
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {

        onNewAccount: (state, action: PayloadAction<FormData>)=> {

            const currentAccount = state.bankNewAccount.map(account => (account.iban))

            if(currentAccount.includes(action.payload.iban)){ // if has the same IBAN, not can to include in the array
                return;
            }

            state.bankNewAccount.push(action.payload);

        }

    },
})

// Action creators are generated for each case reducer function
export const { onNewAccount } = bankSlice.actions

export default bankSlice.reducer