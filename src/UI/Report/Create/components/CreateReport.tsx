import { isStandalone } from '@/UI/App/utils/standaloneChecker'
import { Button } from 'primereact/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateReportForm } from './CreateReportForm'
import { ConfirmationDialog } from './ConfirmationDialog'
import { HeadContainer } from '@/UI/App/styled-components/HeadContainer'

export const CreateReport = () => {

    const navigate = useNavigate();

    const [visible, setVisible] = useState(false)
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setVisible(true)
        }, 5)
    }, [])

    const handleClose = () => {
        setVisible(false);
        navigate("/")
    }

    return (
        <div className='flex flex-col justify-start items-center w-full h-fit bg-gray-100 sm:mt-[5vh] md:mt-[5vh] rounded-md'>
            <div className={`xl:w-[70%] lg:w-[70%] md:w-[90%] w-full h-fit bg-gray-100 max-sm:bg-transparent rounded-md top-0 ${isStandalone ? `duration-300 mt-[0%] ${visible ? 'mt-[0%] ' : 'mt-[500%]'}` : 'duration-0 mt-[0%] '}`}>

                <HeadContainer>
                    <h1 className='font-bold text-xl'>Nuevo Reporte</h1>
                    <Button
                        className={`${isStandalone ? 'max-sm:visible' : 'max-sm:hidden'} sm:hidden  bg-gray-500 text-white w-[3rem] h-[3rem] rounded-full`}
                        icon="pi pi-times"
                        rounded
                        onClick={handleClose} />
                </HeadContainer>

                <CreateReportForm
                    handleShowDialog={() => setShowDialog(!showDialog)} />

                <ConfirmationDialog
                    visible={showDialog}
                    onHide={() => setShowDialog(!showDialog)}
                    handleSave={handleClose}
                />

            </div>
        </div >
    )
}