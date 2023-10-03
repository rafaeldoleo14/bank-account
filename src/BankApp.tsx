import { FC } from "react"
import { Layout } from "./bank/layout/Layout"
import { AppRouter } from "./bank/routes/AppRouter"

export const BankApp: FC = () => {
  return (
    <Layout>

      <AppRouter/>
      
    </Layout>
  )
}
