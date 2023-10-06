
type Cuentas = 'ahorro' | 'personal' | 'corriente' | ''; 

export interface FormData {
    name: string;
    apellidos: string;
    dni: string;
    iban: string;
    saldo: number | string
    cuentas: Cuentas;
    interes: number | string;
    entidades: string;
    comision: number | string;
    interesDescubierto: number | string;
    maximoDescubierto: number | string;
    comisionDescubierto: number | string;
}