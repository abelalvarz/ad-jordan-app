import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { BiExpand } from "react-icons/bi";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Props {
    children?: React.ReactNode;
    title: string;
    className?: string;
    contentClassName?: string;
    initialDate?:any,
    finalDate?: any
}
export const CardContainer = ({ initialDate, finalDate, children, title, className, contentClassName }: Props) => {
    const handle = useFullScreenHandle();

    const [fullScreen, setFullScreen] = useState(false)

    useEffect(() => {
        if (!handle.active && fullScreen) {
            setFullScreen(false)
        }
        const handleKeyDown = (e:any)=>{
            const {key} = e;
            console.log(key)
        }
        window.addEventListener("keydown",handleKeyDown)
    }, [handle.active,initialDate, finalDate])

    const handleFullScreen = () => {
        handle.enter()
        setFullScreen(true)
    }

    return (

        <div
            className={`${className} mx-1 flex justify-center items-center  rounded-md my-5 relative h-[100%]`}>

            <FullScreen
                handle={handle}
                className={`bg-gray-100 flex  flex-col justify-center items-center w-full h-full ${fullScreen && 'h-[100vh]'} relative`}>

                <div
                    className={`px-5 py-4 w-full h-[20%] flex ${fullScreen ? 'justify-center items-center':'justify-between'} `}
                >

                    <div>
                        <h2 className={`font-bold ${fullScreen ? 'text-5xl' : 'text-2xl'}`}>{title}</h2>
                        <p>{format(initialDate, "EEEE d 'de' MMMM", { locale: es })} a {format(finalDate, "EEEE d 'de' MMMM", { locale: es })}</p>
                    </div>
                    
                </div>
                <div className={`${contentClassName} py-2 md:w-full h-[100%] box-border ${fullScreen && 'w-full flex justify-center h-[50vh] mt-0 py-0  '}`}>
                    {children}
                </div>
                <div className={`${!fullScreen ? 'bg-blue-200 absolute bottom-5 right-5' : 'hidden'} `}>
                    <Button className='300 p-2' onClick={handleFullScreen}>
                        <BiExpand size={25} />
                    </Button>
                </div>

            </FullScreen>

        </div>

    )
}
