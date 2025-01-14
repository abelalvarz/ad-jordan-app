import React from 'react'

export const VerifyReport = () => {
    return (
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
    )
}
