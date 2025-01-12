import { LoginPage } from '@/Auth/Login/UI/LoginPage'
import { HomePage } from '@/Home/UI/HomePage'

export const AppRoutes = [
    { path: "/", element: <HomePage />, isPrivate: true },
    { path: "/login", element: <LoginPage/>, isPrivate: false }
]
