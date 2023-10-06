import { FC, } from "react";
import './FormField.css';
import { useForm } from "../../hooks/useForm";
import { DinamicFormField } from "./dinamicFormField/DinamicFormField";

export const FormField: FC = () => {

  const { formData, handleChange, onSubmit } = useForm();

  return (
    <div className="form-field">

        <h1>Crear nueva cuenta</h1>

        <form onSubmit={onSubmit}>

            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
            <input type="text" placeholder="Apellidos" name="apellidos" onChange={handleChange} value={formData.apellidos}/>
            <input type="text" placeholder="DNI" name="dni" onChange={handleChange} value={formData.dni}/>
            <input type="text" placeholder="IBAN" name="iban" onChange={handleChange} value={formData.iban}/>
            <input type="number" placeholder="Saldo Inicial" name="saldo" onChange={handleChange} value={formData.saldo}/>

            <select name="cuentas" id="" onChange={handleChange} value={formData.cuentas}>
                <option value="" disabled selected>Seleccionar tipo de cuenta</option>
                <option value="ahorro">Cuenta ahorro</option>
                <option value="personal">Cuenta corriente personal</option>
                <option value="corriente">Cuenta corriente empresa</option>
            </select>

            <DinamicFormField formData={formData} handleChange={handleChange}/>

            <button>Crear cuenta</button>

        </form>

    </div>
  )
}
