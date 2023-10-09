
import { FC, ReactNode } from 'react';

interface AccountTableLayoutProp {
    title?: string,
    children: ReactNode
}

export const AccountTable: FC<AccountTableLayoutProp> = ({title = '', children}) => {
  return (
    <div>

        <h2>{title}</h2>

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

                {children}
        
            </tbody>
            
        </table>

    </div>
  )
}
