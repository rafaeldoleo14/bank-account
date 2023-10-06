import React, { FC } from 'react'
import { Data } from '../list-account/ListAccount'


export const ListItems: FC<Data> = ({nombre, saldo, iban, interesAnual}) => {
  return (
    <tr>
        <td>
        {nombre}
         </td>
          <td>
        {saldo}
         </td>
          <td>
        {iban}
          </td>
           <td>
        {interesAnual}
         </td>
</tr>
  )
}
