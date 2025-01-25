import { LoginPage } from '@/UI/Auth/Login/UI/LoginPage'
import { HomePage } from '@/UI/Home/HomePage'
import { ReportCreationPage } from '@/UI/Report/Create/ReportCreationPage'
// import { ReportViewPage } from '@/UI/Report/View/ReportViewPage'
import { HiHome, HiPlus } from "react-icons/hi"
// import { TbReport } from 'react-icons/tb'

export const AppRoutes = [
    { name: 'Inicio', icon: <HiHome size={25} />, path: "/", element: <HomePage />, isPrivate: true },
    { name: 'Nuevo', icon: <HiPlus size={25}/>, path: "/new", element: <ReportCreationPage />, isPrivate: true },
    // { name: 'Reportes', icon: <TbReport size={25}/>, path: "/reports", element: <ReportViewPage />, isPrivate: true },

    { path: "/login", element: <LoginPage/>, isPrivate: false }
]
