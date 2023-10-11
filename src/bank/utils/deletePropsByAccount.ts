
import { PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../interfaces/formField/formField';

export const deletePropsByAccount = (action: PayloadAction<FormData>) => {

    if(action.payload.cuentas === 'ahorro'){
        delete action.payload.entidades;
        delete action.payload.comision;
        delete action.payload.interesDescubierto;
        delete action.payload.maximoDescubierto;
        delete action.payload.comisionDescubierto;
    }

    if(action.payload.cuentas === 'personal'){
        delete action.payload.interes;
        delete action.payload.interesDescubierto;
        delete action.payload.maximoDescubierto;
        delete action.payload.comisionDescubierto;
    }

    if(action.payload.cuentas === 'empresarial'){
        delete action.payload.interes;
        delete action.payload.comision;
    }
  
}
