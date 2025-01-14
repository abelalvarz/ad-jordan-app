import { Button } from 'primereact/button'
import React, { useState } from 'react'
import { CreateReport } from './CreateReport'

export const CreationPath = () => {

    const [visible, setVisible] = useState(false)
    return (
        <div>
            <CreateReport handleNext={()=>setVisible(true)}/>
            <div className='w-full flex flex-col items-end mt-5'>
                <Button className='w-40 max-sm:w-full  bg-green-400 p-4' label='Enviar' onClick={() => setVisible(true)} />
            </div>
        </div>
    )
}
