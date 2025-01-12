import { PageContainer } from '@/App/styled-components/PageContainer'
import { StatusChart } from './component/StatusChart'
import { CardContainer } from './style-component/CardContainer'
import { Button } from 'primereact/button'
import { useState } from 'react'
import { Calendar } from 'primereact/calendar'

const reportes = [
    { date: '4 de Enero 2025' },
    { date: '11 de Enero 2025' },
    { date: '18 de Enero 2025' },
    { date: '25 de Enero 2025' },
    { date: '25 de Enero 2025' },
    { date: '25 de Enero 2025' },
]
const Questions = [
    { text: 'Miembros Activos', type: 'Number', value: 2 },
    { text: 'Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Amios Visitantes', type: 'Number', value: 2 },
    { text: 'Hogares Visitados', type: 'Number', value: 2 },
    { text: 'Asistentes a la Vigilia', type: 'Number', value: 2 },
]
export const HomePage = () => {
    const [visible, setVisible] = useState(false)
    const [visibleCheck, setVisibleCheck] = useState(false)
    return (
        <PageContainer>
            <div className='relative h-full '>
                <h1 className='text-xl font-bold'>Bienvenido</h1>

                <CardContainer title='Asistencia de Mes'>
                    <StatusChart />
                </CardContainer>

                <div className='px-0 py-0 md:w-full'>
                    <h1 className='text-xl font-bold'>Recientes</h1>
                    <div className="w-full h-full overflow-x-scroll">
                        {
                            reportes.map((reporte, i) => (
                                <div key={i} className='px-5 py-3 mt-2 bg-slate-300 rounded-t-md'>
                                    <h2 className='text-blue-600 '>Reporte de {reporte.date}</h2>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='absolute top-0 right-5'>
                    <Button className='bg-green-600 text-white w-[3rem] h-[3rem] rounded-full' icon="pi pi-plus" rounded aria-label="Filter"
                        onClick={() => setVisible(true)}
                    />
                </div>
            </div>

            <div className={`duration-700 fixed m-0 w-[100vw] h-full top-0 bg-white`}
                style={{
                    marginLeft: '-20px',
                    zIndex: 100,
                    marginTop: visible ? 0 : '1000px'

                }}>
                <div className="flex justify-between items-center p-5">
                    <h1 className='font-bold text-xl'>Nuevo Reporte</h1>
                    <Button className='bg-green-600 text-white w-[3rem] h-[3rem] rounded-full' icon="pi pi-times" rounded onClick={() => setVisible(false)} />
                </div>
                <div className='p-5'>
                    <div>
                        <div className='w-full flex flex-col'>
                            <label>Fecha: </label>
                            <Calendar className='w-fiull p-2 border-black border-x-2 border-y-2 rounded-md' showIcon />
                        </div>
                        {
                            Questions.map((question, i) => (
                                <div key={i} className='w-full flex justify-between items-center mt-2'>
                                    <div className='w-[70%]'>
                                        <label>{question.text}: </label>
                                    </div>
                                    <div className='w-[30%]'>
                                        <input type={question.type} className='w-full p-2 border-black border-x-2 border-y-2 rounded-md' />
                                    </div>
                                </div>
                            ))
                        }
                        <div className='w-full flex flex-col mt-5'>
                            <Button className='bg-green-400 p-4' label='Enviar' onClick={() => setVisibleCheck(true)} />
                        </div>
                    </div>

                </div>
                <div className={`fixed top-0 bg-white w-full h-full duration-700 pt-10`} style={{
                    zIndex: 1000,
                    marginTop: visibleCheck ? 0 : '1000px'
                }}>
                    <div className='rounded-md bg-blue-50 p-2 py-[2rem]'>
                        <div className='w-full flex flex-col items-center mb-10'>
                            <h2 className='font-bold text-xl'>Guatemala, 11 de Enero de 2024</h2>
                        </div>
                        {
                            Questions.map((question, i) => (
                                <div key={i} className='w-full flex justify-between items-center mt-2 p-2 py-3 border-b-[0.5px] border-slate-400'>
                                    <div className='w-[85%]'>
                                        <label className='text-[16px]'><i className='pi pi-star-fill mr-2' />{question.text}: </label>
                                    </div>
                                    <div className='flex w-[15%] justify-center items-center'>
                                        <label htmlFor="">{question.value}</label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-row justify-around mt-10'>
                        <Button className='bg-red-400 text-white p-4 w-full mr-1' label='Cancelar' onClick={() => { setVisibleCheck(false) }} />
                        <Button className='bg-green-400 p-4 w-full' label='Enviar' onClick={() => { setVisible(false), setVisibleCheck(false) }} />
                    </div>
                </div>
            </div>

        </PageContainer>
    )
}
