import {FC} from 'react';
import './ListAccount.css'
import { ListItems } from '../list-account-items/ListItems';

   export  interface Data{
        nombre: string;
        saldo: number;
        iban: string;
        interesAnual: number;
    }

export const ListAccount: FC = () =>{

    const data: Data[] = [

        {
            nombre: 'Rafael',
            saldo: 20.0,
            iban: 'ES12345678',
            interesAnual: 10.0
        },
        {
            nombre: 'Rafael',
            saldo: 20.0,
            iban: 'ES12345678',
            interesAnual: 10.0
        },
        {
            nombre: 'Rafael',
            saldo: 20.0,
            iban: 'ES12345678',
            interesAnual: 10.0
        },
        {
            nombre: 'Rafael',
            saldo: 20.0,
            iban: 'ES12345678',
            interesAnual: 10.0
        }
    ]
    
    

    return(
        <div className='list-account-container'>
          <h1>Lista de cuentas</h1>

            <table>

               <thead>
               <tr>
                    <th>Nombre</th>
                    <th>Saldo</th>
                    <th>IBAN</th>
                    <th>Interes Anual</th>
                </tr>
               </thead>

                <tbody>
                {
                    data.map((data) => (
                        <ListItems {...data}/>
                    ))
                }
             
               
                </tbody>
                
            </table>
          

        </div>
    )
}