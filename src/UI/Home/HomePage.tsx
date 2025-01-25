import { PageContainer } from '@/UI/App/styled-components/PageContainer'
import { ResumeCardComponent } from './component/ResumeCardComponent'
import { GraficCardComponent } from './component/GraficCardComponent'
import { Calendar } from 'primereact/calendar'
import { useState } from 'react'
import { subDays, startOfDay, endOfDay } from 'date-fns'
const getLastWednesdayAndTuesday = () => {
    const now = new Date();
    const currentDayOfWeek = now.getDay();

    const daysSinceLastWednesday = (currentDayOfWeek >= 6)
        ? currentDayOfWeek - 12
        : 7 + currentDayOfWeek - 12;
    const lastWednesday = subDays(now, daysSinceLastWednesday + 7);

    const daysSinceLastTuesday = (currentDayOfWeek >= 5)
        ? currentDayOfWeek - 12
        : 7 + currentDayOfWeek - 12;
    const thisTuesday = subDays(now, daysSinceLastTuesday);

    return {
        initial: startOfDay(lastWednesday),
        final: endOfDay(thisTuesday),
    };
};

export const HomePage = () => {

    const [rangeOfDate, setRangeOfDate] = useState(getLastWednesdayAndTuesday())

    return (
        <PageContainer>
            <div className='relative h-full flex flex-col justify-evenly'>
                <div className='mx-1 flex justify-between '>
                    <h2 className='text-3xl font-bold'>Bienvenido, usuario</h2>
                    <div className='flex justify-around'>
                        <div className='flex flex-col'>
                            <label>Fecha Inicial</label>
                            <Calendar
                                value={rangeOfDate.initial}
                                onChange={(e: any) => setRangeOfDate({ ...rangeOfDate, initial: e.value })}
                                placeholder='Fecha Inicial'
                                inputClassName='p-2 '

                                className='bg-blue-400 mx-0 rounded-md'
                                showIcon />
                        </div>
                        <div className='flex flex-col'>

                            <label>Fecha Final</label>
                            <Calendar
                            value={rangeOfDate.final} onChange={(e: any) => setRangeOfDate({ ...rangeOfDate, final: e.value })}
                            placeholder='Fecha Final'
                            inputClassName='p-2'
                            className='bg-blue-400 mx-2 rounded-md'
                            showIcon />
                        </div>
                    </div>
                </div>
                <ResumeCardComponent initialDate={rangeOfDate.initial} finalDate={rangeOfDate.final} />
                <GraficCardComponent initialDate={rangeOfDate.initial} finalDate={rangeOfDate.final} />
            </div>
        </PageContainer>
    )
}
