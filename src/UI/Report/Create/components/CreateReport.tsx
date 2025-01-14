import { isStandalone } from '@/UI/App/utils/standaloneChecker'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Questions = [
    { text: 'Miembros Activos', type: 'Number', value: 2 },
    { text: 'Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Amios Visitantes', type: 'Number', value: 2 },
    { text: 'Hogares Visitados', type: 'Number', value: 2 },
    { text: 'Asistentes a la Vigilia', type: 'Number', value: 2 },
]


export const CreateReport = ({ handleNext }: any) => {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setVisible(true)
        }, 10)
    }, [])

    return (
        <div className='flex flex-col justify-start items-center w-full h-[100vh] bg-gray-100 sm:mt-[5vh] md:mt-[5vh]'>
            <div className={`xl:w-[70%] lg:w-[70%] md:w-[90%] w-full h-fit bg-gray-200 max-sm:bg-transparent rounded-md top-0 duration-300 ${visible ? 'mt-[0%] ' : 'mt-[500%]'}`}>

                <div className="flex justify-between items-center p-5">
                    <h1 className='font-bold text-xl'>Nuevo Reporte</h1>
                    <Button
                        className={`${isStandalone ? 'max-sm:visible' : 'max-sm:hidden'} sm:hidden  bg-green-600 text-white w-[3rem] h-[3rem] rounded-full`}
                        icon="pi pi-times"
                        rounded
                        onClick={() => {
                            setVisible(false);
                            navigate("/")
                        }} />
                </div>

                <div className='p-5'>
                    <div>
                        <div className='w-full flex flex-col'>
                            <label>Fecha: </label>
                            <Calendar inputClassName='p-2' className='w-fiull border-gray-300 border-x-2 border-y-2 rounded-md' showIcon />
                        </div>
                        {
                            Questions.map((question, i) => (
                                <div key={i} className='w-full flex justify-between items-center mt-2'>
                                    <div className='w-[70%]'>
                                        <label>{question.text}: </label>
                                    </div>
                                    <div className='w-[30%]'>
                                        <input type={question.type} className='w-full p-2 border-gray-300 border-x-2 border-y-2 rounded-md' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}
{/* <div className='absolute top-0 right-5'>
<Button className='bg-green-600 text-white w-[3rem] h-[3rem] rounded-full' icon="pi pi-plus" rounded aria-label="Filter"
    onClick={() => setVisible(true)}
/>
</div> */}