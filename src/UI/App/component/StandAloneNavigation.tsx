import { Link, useLocation } from "react-router-dom"
import { AppRoutes } from "../config/AppRoutes"
import { useState } from "react"

export const StandAloneNavigation = () => {
    const location = useLocation();
    const [active, setActive] = useState(0);

    return (
        <div className={`h-[10vh] w-full bg-gray-200 fixed ${location.pathname === '/new' ? 'opacity-0' : 'opacity-1'} bottom-0 z-10`}>
            <ul className='flex w-full h-full justify-around bg-transparent border-t-white items-center'>

                {
                    AppRoutes.map((route, i) => {
                        console.log(route.icon)
                        if (!route.icon) return;
                        return (
                            <Link
                                key={i}
                                onClick={() => setActive(i)}
                                className={`${active == i && 'text-red-300'} bg-transparent flex flex-col justify-center items-center text-sm duration-200`}
                                to={route.path}>
                                {route.icon}
                                {route.name}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
