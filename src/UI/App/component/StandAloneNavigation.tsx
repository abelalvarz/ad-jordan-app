import { Link, useLocation } from "react-router-dom"
import { AppRoutes } from "../config/AppRoutes"

export const StandAloneNavigation = () => {
    const location = useLocation();

    return (
        <div className={`h-[10vh] w-full bg-gray-200 fixed ${location.pathname === '/new' ? 'opacity-0' : 'opacity-1'} bottom-0 z-10`}>
            <ul className='flex w-full h-full justify-around bg-transparent border-t-white items-start mt-2'>

                {
                    AppRoutes.map((route, i) => {
                        if (!route.icon) return;
                        return (
                            <Link
                                key={i}
                                className={`${location.pathname == route.path ? 'text-black-500' : 'text-gray-500'}  bg-transparent flex flex-col justify-center items-center text-sm duration-200`}
                                to={route.path}>
                                <span className={`${route.path == "/new" && 'text-white bg-gray-600 p-2 rounded-full' }`}>{route.icon}</span>
                                <p className={`${route.path == "/new" && 'hidden'}`}>{route.name}</p>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
