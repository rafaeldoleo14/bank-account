
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { UiSlice } from './slices/ui/UISlice'
import { bankSlice } from './slices/bank/bankSlice'
// ...
const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    bank: bankSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store