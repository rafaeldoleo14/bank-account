import {AiOutlinePlusCircle} from 'react-icons/ai'
import {FaRegRectangleList} from 'react-icons/fa6'
import {BsClipboardData} from 'react-icons/bs'
import {FaArrowTrendUp} from 'react-icons/fa6'
import {BsLayerBackward} from 'react-icons/bs'
import {MdBalance} from 'react-icons/md'
import { DashboardOpcions } from '../interfaces/dashboard/dashboard';

export const dashboardOpcions: DashboardOpcions[] = [

    {
        path: '/new-account',
        text: 'Nueva cuenta',
        icon: <AiOutlinePlusCircle size={20}/>
    },

    {
        path: '/list-accounts',
        text: 'Lista de cuentas',
        icon: <FaRegRectangleList size={20}/>
    },

    {
        path: '/get-data',
        text: 'Obtener datos',
        icon: <BsClipboardData size={20}/>
    },

    {
        path: '/do-entry',
        text: 'Realizar ingreso',
        icon: <FaArrowTrendUp size={20}/>
    },

    {
        path: 'drop-cash',
        text: 'Retirar efectivo',
        icon: <BsLayerBackward size={20}/>
    },

    {
        path: 'check-balance',
        text: 'Consultar saldo',
        icon: <MdBalance size={20}/>
    },

];