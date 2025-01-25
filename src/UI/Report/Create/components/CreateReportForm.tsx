import { FamilyGroupService } from '@/Core/Adapters/FamiltyGroupService';
import { FamilyGroup } from '@/Core/FamilyGroups/domain/model/FamilyGroup';
import { Report } from '@/Core/Reports/domain/model/Report';
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';

interface Props {
    data: Report,
    onChangeData: (newValues: Object) => void,
    handleShowDialog: VoidFunction
}

export const CreateReportForm = ({ data, onChangeData, handleShowDialog }: Props) => {

    const familyGroupService = FamilyGroupService;
    const [familyGroups, setFamilyGroups] = useState<FamilyGroup[]>([])

    useEffect(() => {
        getFamiltyGroups();
    }, [])

    const getFamiltyGroups = async () => {
        const response = await familyGroupService.getAll.execute()
        console.log(response)
        setFamilyGroups(response)
    }

    const sum = () => {
        const activeMember = data.activeMember == "" ? 0 : parseInt(data.activeMember)
        const noActiveMember = data.noActiveMember == "" ? 0 : parseInt(data.noActiveMember)
        const visitors = data.visitors == "" ? 0 : parseInt(data.visitors)
        return 0 + 0 + activeMember + noActiveMember + visitors
    }

    return (
        <div className='mt-10'>
            <div className='p-0 flex flex-col justify-between'>
                <div>
                    <div className='w-full flex flex-col'>
                        <label>Fecha: </label>
                        <Calendar value={data.meetingDate}
                            placeholder='Ingresa una Fecha'
                            inputClassName='p-2'
                            onChange={(e: any) => onChangeData({ 'meetingDate': e.value })}
                            className='w-fiull border-gray-300 border-x-2 border-y-2 rounded-md outline-none'
                            showIcon />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label>Grupo Familiar: </label>
                        <Dropdown
                            value={data.familyGroup}
                            onChange={(e: any) => {
                                console.log(e)
                                onChangeData({ 'familyGroup': e.value })
                            }}
                            options={familyGroups}
                            optionLabel="name"
                            placeholder="Seleccionar Grupo"
                            className="w-fiull border-gray-300 border-x-2 border-y-2 rounded-md" />
                    </div>
                    <InputCard
                        label="Miembros activos"
                        type="text"
                        value={data.activeMember}
                        onChange={(e: any) => onChangeData({ 'activeMember': e.target.value })}
                    />
                    <InputCard
                        label="Miembros No activos"
                        type="text"
                        value={data.noActiveMember}
                        onChange={(e: any) => onChangeData({ 'noActiveMember': e.target.value })}
                    />
                    <InputCard
                        label="Amigos Visitantes"
                        type="text"
                        value={data.visitors}
                        onChange={(e: any) => onChangeData({ 'visitors': e.target.value })}
                    />
                    <InputCard
                        label="Total"
                        type="text"
                        disabled
                        value={sum()}
                    />
                </div>
            </div>
            <div className='w-full flex flex-col items-end mt-5 '>
                <Button
                    className='w-[30%] max-sm:w-full  bg-green-400 p-4'
                    label='Enviar'
                    onClick={handleShowDialog} />
            </div>

        </div>
    )
}

export const InputCard = ({ label, type, value, onChange, disabled }: any) => (
    <div className='w-full flex justify-between items-center mt-2'>
        <div className='w-[70%]'>
            <label>{label}: </label>
        </div>
        <div className='w-[30%]'>
            <input
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className='w-full p-2 border-gray-300 border-x-2 border-y-2 rounded-md text-center outlin' />
        </div>
    </div>
)