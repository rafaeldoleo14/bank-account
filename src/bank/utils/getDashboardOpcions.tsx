import {AiOutlinePlusCircle} from 'react-icons/ai'
import {FaRegRectangleList} from 'react-icons/fa6'
import {BsClipboardData} from 'react-icons/bs'
import {FaArrowTrendUp} from 'react-icons/fa6'
import {BsLayerBackward} from 'react-icons/bs'
import {MdBalance} from 'react-icons/md'
import { DashboardOpcions } from '../interfaces/dashboard/dashboard';

export const dashboardOpcions: DashboardOpcions[] = [

    {
        text: 'Nueva cuenta',
        icon: <AiOutlinePlusCircle size={20}/>
    },

    {
        text: 'Lista de cuentas',
        icon: <FaRegRectangleList size={20}/>
    },

    {
        text: 'Obtener datos',
        icon: <BsClipboardData size={20}/>
    },

    {
        text: 'Realizar ingreso',
        icon: <FaArrowTrendUp size={20}/>
    },

    {
        text: 'Retirar efectivo',
        icon: <BsLayerBackward size={20}/>
    },

    {
        text: 'Consultar saldo',
        icon: <MdBalance size={20}/>
    },

];