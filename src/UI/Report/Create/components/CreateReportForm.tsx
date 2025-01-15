import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'

const Questions = [
    { text: 'Miembros Activos', type: 'Number', value: 2 },
    { text: 'Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros Activos', type: 'Number', value: 2 },
    { text: 'Hijos de Miembros No Activos', type: 'Number', value: 2 },
    { text: 'Amios Visitantes', type: 'Number', value: 2 },
    { text: 'Hogares Visitados', type: 'Number', value: 2 },
    { text: 'Asistentes a la Vigilia', type: 'Number', value: 2 },
]

export const CreateReportForm = ({ handleShowDialog }: any) => {
    return (
        <div className='mt-10'>
            <div className='p-0'>
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
                    <div className='w-full flex justify-between items-center mt-5 border-t-black '>
                        <div className='w-[70%]'>
                            <label>Total: </label>
                        </div>
                        <div className='w-[30%] text-center text-lg'>
                            <label>20</label>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full flex flex-col items-end mt-5 '>
                <Button
                    className='w-40 max-sm:w-full  bg-green-400 p-4'
                    label='Enviar'
                    onClick={handleShowDialog} />
            </div>

        </div>
    )
}
