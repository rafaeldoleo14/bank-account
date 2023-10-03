
import React, { useState } from 'react'

export interface FormData {
    name: string;
    apellidos: string;
    dni: string;
    iban: string;
    cuentas: string;
    interes: number;
}

export const useForm = () => {
  
    const [formData, setFormData] = useState<FormData>({
        name: "",
        apellidos: "",
        dni: "",
        iban: "",
        cuentas: "",
        interes: 0
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
