
import { createSlice } from '@reduxjs/toolkit'

interface UiState {
    showDashboard: boolean
}

const initialState: UiState = {
    showDashboard: false
}

export const UiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {

        onShowDashboard: (state)=>{
            state.showDashboard = !state.showDashboard
        }

    },
})

// Action creators are generated for each case reducer function
export const { onShowDashboard } = UiSlice.actions

export default UiSlice.reducer