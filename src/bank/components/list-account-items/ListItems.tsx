import { FC } from 'react'
import { AccountTable } from '../accountListTable/AccountTable'
import { getAccountsByType } from '../../helpers/getAccountsByType'

export const ListItems: FC<ListItemsProp> = ({types, title}) => {

  return (
    <>

        {
          getAccountsByType(types).length != 0 ?

            <AccountTable title={title}>

              {
                getAccountsByType(types).map(account => (

                        <tr key={account.iban}>
                            <td>{account.name}</td>
                            <td>{account.saldo}</td>
                            <td>{account.iban}</td>
                            <td>{account.interes}</td>
                        </tr>

                ))
              }

            </AccountTable> : <></>
        }

    </>
  )
}
