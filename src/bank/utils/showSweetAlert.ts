import Swal from "sweetalert2";

export const errorIbanMessage = ()=> {
    Swal.fire(
        'IBAN en uso!',
        '',
        'error'
    );
}

export const newAccountSaveMessage = ()=> {
    Swal.fire(
        'Cuenta Agregada !!!',
        '',
        'success',
    );
}