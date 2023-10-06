
import React, { useState } from 'react'
import { FormData } from '../interfaces/formField/formField';

export const useForm = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        apellidos: '',
        dni: '',
        iban: '',
        saldo: '',
        cuentas: '',
        interes: '',
        entidades: '',
        comision: '',
        interesDescubierto: '',
        maximoDescubierto: '',
        comisionDescubierto: '',
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return {
        onSubmit,
        handleChange,
        formData
    }

}
