import { isStandalone } from '@/UI/App/utils/standaloneChecker'
import { Button } from 'primereact/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmationDialog } from './ConfirmationDialog'
import { HeadContainer } from '@/UI/App/styled-components/HeadContainer'
import { ReportService } from '@/Core/Adapters/ReportService'
import { Report } from '@/Core/Reports/domain/model/Report'
import { useToast } from '@/UI/App/context/ToastContext'
import { ReportCreation } from './ReportFormComponent/ReportCreation'

const initialState: Report = {
    familyGroup: null,
    activeMember: "",
    activeMemberChildren: '',
    noActiveMember: "",
    noActiveMemberChildren: '',
    totalAttendance: "",
    visitorChildren: '',
    visitors: "",
    visitedHomes: "",
    newChristians: "",
    reconciled:"",
    vigilAttendance: "",
    offering: "",
    notes: "",
    meetingDate: new Date(),
    creationDate: new Date(),
    createdBy: "test",
}

export const CreateReport = () => {

    const service = ReportService;
    const toast = useToast()
    const navigate = useNavigate();

    const [report, setReport] = useState<Report>(initialState)
    const [visible, setVisible] = useState(false)
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setVisible(true)
        }, 5)
    }, [])

    const handleClose = () => {
        setVisible(false);
        handleSave();
    }

    const handleOnchangeData = (newValues: Object) => {
        setReport((preValues) => ({
            ...preValues,
            ...newValues
        }))
    }

    const handleSave = () => {
        if (!report.meetingDate) {
            toast?.show('warn', 'Informacion', 'La Fecha es requerida')
            return
        }
        if (!report.familyGroup) {
            toast?.show('warn', 'Informacion', 'Debe seleccionar un grupo')
            return
        }
        if (!report.activeMember) {
            toast?.show('warn', 'Informacion', 'Campo Miembros activos es requerido')
            return
        }
        setShowDialog(!showDialog)
    }

    const save = async () => {
        const activeMember = report.activeMember == "" ? 0 : parseInt(report.activeMember)
        const activeMemberChildren = report.activeMemberChildren == "" ? 0 : parseInt(report.activeMemberChildren)
        const noActiveMember = report.noActiveMember == "" ? 0 : parseInt(report.noActiveMember)
        const noActiveMemberChildren = report.noActiveMemberChildren == "" ? 0 : parseInt(report.noActiveMemberChildren)
        const visitorChildren = report.visitorChildren == "" ? 0 : parseInt(report.visitorChildren)
        const visitors = report.visitors == "" ? 0 : parseInt(report.visitors)
        const totalAsistencia = 0 + 0 + activeMember + activeMemberChildren + noActiveMember + noActiveMemberChildren + visitorChildren + visitors
        const reporToSubmit = { ...report, totalAttendance: totalAsistencia.toString() }

        const response = await service.create.execute(reporToSubmit)
        if (response === null) {
            toast?.show('error', "Error.", "El reporte no se pudo crear.");
            return;
        }
        
        toast?.show('success', "Exito.", "Reporte enviado exitosamente");
        navigate("/")
    }

    return (
        <div className='flex flex-col justify-start items-center w-full h-fit bg-transparent sm:mt-[5vh] md:mt-[5vh] rounded-md'>
            <div className={`xl:w-[70%] lg:w-[70%] md:w-[90%] w-full h-fit bg-gray-100 p-10 max-sm:bg-transparent rounded-md top-0 ${isStandalone ? `duration-300 mt-[0%] ${visible ? 'mt-[0%] ' : 'mt-[500%]'}` : 'duration-0 mt-[0%] '}`}>

                <HeadContainer>
                    <h1 className='font-bold text-4xl'>Nuevo Reporte</h1>
                    <Button
                        className={`${isStandalone ? 'max-sm:visible' : 'max-sm:hidden'} sm:hidden  bg-gray-500 text-white w-[3rem] h-[3rem] rounded-full`}
                        icon="pi pi-times"
                        rounded
                        onClick={handleClose} />
                </HeadContainer>

                <ReportCreation
                    data={report}
                    onChangeData={handleOnchangeData}
                    handleShowDialog={() => handleSave()} />

                <ConfirmationDialog
                    visible={showDialog}
                    onHide={() => setShowDialog(!showDialog)}
                    handleSave={save}
                />

            </div>
        </div >
    )
}