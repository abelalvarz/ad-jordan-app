import { Report } from '@/Core/Reports/domain/model/Report';
import { InputNumber } from 'primereact/inputnumber';
import { useRef, useState } from 'react';
import { Stepper } from 'primereact/stepper';
import { Button } from 'primereact/button';
import { AssistanceStepperPanel } from './AssistanceStepperPanel';
import { ActivitiesStepperPanel } from './ActivitiesStepperPanel';
import { OfferingStepperPanel } from './OfferingStepperPanel';
import { GroupInformation } from './GroupInformation';
import { StepperPanel } from 'primereact/stepperpanel';

interface Props {
    data: Report,
    onChangeData: (newValues: Object) => void,
    handleShowDialog: VoidFunction
}

export const ReportCreation = ({ data, onChangeData, handleShowDialog }: Props) => {

    const stepperRef = useRef<any>(null);
    const [activeStep, setActiveStep] = useState(0)

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
        stepperRef?.current?.nextCallback()
    }

    const handlePrevStep = () => {
        setActiveStep(activeStep - 1)
        stepperRef?.current?.prevCallback()
    }

    return (
        <div className='mt-10'>
            <div className='p-0 flex flex-col justify-between'>
                <GroupInformation onChangeData={onChangeData} data={data} />
                <Stepper ref={stepperRef} >
                    <StepperPanel header="Asistencia" >
                        <AssistanceStepperPanel onChangeData={onChangeData} data={data} />
                    </StepperPanel>
                    <StepperPanel header="Evangelizacion">
                        <ActivitiesStepperPanel onChangeData={onChangeData} data={data} />
                    </StepperPanel>
                    <StepperPanel header="Ofrenda">
                        <OfferingStepperPanel onChangeData={onChangeData} data={data} />
                    </StepperPanel>
                </Stepper>
            </div>
            <div className='w-full flex justify-end items-end mt-5 '>
                <Button
                    className={`${activeStep == 0 ? 'hidden' : 'w-[15%] max-sm:w-full  bg-red-400 p-4 mr-2'}`}
                    label="Back"
                    severity="secondary"
                    icon="pi pi-arrow-left" onClick={() => handlePrevStep()} />

                <Button
                    className='w-[15%] max-sm:w-full  bg-green-400 p-4'
                    label={activeStep == 2 ? 'Enviar' : 'Siguiente'}
                    iconPos="right"
                    icon={`${activeStep == 2 ? 'pi pi-check' : 'pi pi-arrow-right'}`}
                    onClick={() => activeStep == 2 ? handleShowDialog() : handleNextStep()} />
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
            <InputNumber
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                min={0}
                inputClassName='w-full p-2 border-gray-300 border-x-2 border-y-2 rounded-md text-center outline' />
        </div>
    </div>
)