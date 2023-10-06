
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

            state.bankNewAccount.push(action.payload);

        }

    },
})

// Action creators are generated for each case reducer function
export const { onNewAccount } = bankSlice.actions

export default bankSlice.reducer