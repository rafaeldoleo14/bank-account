import { FC } from "react"
import { FormData } from "../../../interfaces/formField/formField"

interface DinamicFieldProp {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export const DinamicFormField: FC<DinamicFieldProp> = ({formData, handleChange}) => {

  return (
    <>
    
            {
              formData.cuentas == 'ahorro' ? 
              (<input type="number" placeholder="Interes" name="interes" onChange={handleChange} value={formData.interes}/>)
              : <></>
            }

            {
              formData.cuentas == 'personal' ? 
              (
                <>
                  <input type="text" placeholder="Entidades Autorizadas" name="entidades" onChange={handleChange} value={formData.entidades}/>
                  <input type="number" placeholder="Comision Mantenimiento" name="comision" onChange={handleChange} value={formData.comision}/>
                </>
              )
              : <></>
            }

            {
              formData.cuentas == 'corriente' ? 
              (
                <>
                  <input type="text" placeholder="Entidades Autorizadas" name="entidades" onChange={handleChange} value={formData.entidades}/>
                  <input type="number" placeholder="Interes Descubierto" name="interesDescubierto" onChange={handleChange} value={formData.interesDescubierto}/>
                  <input type="number" placeholder="Maximo Descubierto" name="maximoDescubiero" onChange={handleChange} value={formData.maximoDescubierto}/>
                  <input type="number" placeholder="Comision por Descubierto" name="comisionDescubiero" onChange={handleChange} value={formData.maximoDescubierto}/>
                </>
              )
              : <></>
            }
    
    </>
  )
}
