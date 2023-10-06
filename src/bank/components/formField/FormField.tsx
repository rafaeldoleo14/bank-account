import { FC, } from "react";
import './FormFiel.css';
import { useForm } from "../../hooks/useForm";

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

            <select name="cuentas" id="" onChange={handleChange} value={formData.cuentas}>
                <option value="" disabled selected>Seleccionar tipo de cuenta</option>
                <option value="ahorro">Cuenta ahorro</option>
                <option value="persona">Cuenta corriente personal</option>
                <option value="corriente">Cuenta corriente empresa</option>
            </select>

            <input type="number" placeholder="Interes" name="interes" onChange={handleChange} value={formData.interes}/>

            <button>Crear cuenta</button>

        </form>

    </div>
  )
}
