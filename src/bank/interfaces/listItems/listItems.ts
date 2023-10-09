
type Cuentas = 'ahorro' | 'personal' | 'empresarial'; 

interface ListItemsProp {
    types: Cuentas;
    title: string
}