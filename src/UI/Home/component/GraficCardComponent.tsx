import { StatusChart } from './StatusChart'
import { PieChart } from './PieChart'
import { CardContainer } from '../style-component/CardContainer'
import { useEffect, useState } from 'react';
import { ReportService } from '@/Core/Adapters/ReportService';

interface Prosp {
    initialDate: any;
    finalDate: any;
}
export const GraficCardComponent = ({ initialDate, finalDate }: Prosp) => {

    const reportService = ReportService;
    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<number[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [categoryValues, setCategoryValues] = useState<any>({
        labels: [],
        data: []
    })

    useEffect(() => {
        if (initialDate && finalDate) {
            getWeekAttendance();
            getCategoryAttendance();
        }
    }, [initialDate, finalDate]);

    const getWeekAttendance = async () => {
        const response = await reportService.getTotalWeekAttendance.execute(initialDate, finalDate);

        const newLabels: string[] = [];
        const newValues: number[] = [];
        const newColors: string[] = [];

        response.forEach((item) => {
            newLabels.push(item.familyGroup?.name || "");
            newValues.push(parseInt(item.totalAttendance));
            newColors.push(item.familyGroup?.color || "")
        });

        setLabels(newLabels);
        setValues(newValues);
        setColors(newColors)
    };


    const getCategoryAttendance = async () => {
        const response = await reportService.getTotalCategoryAttendance.execute(initialDate,finalDate);

        const newLabels: string[] = [];
        const newValues: number[] = [];

        response.forEach((item) => {
            newLabels.push(item.category);
            newValues.push(parseInt(item.totalAttendance));
        });

        setCategoryValues({ ...categoryValues, labels: newLabels, data: newValues })
    };

    return (
        <div className='flex justify-between items-center h-[60vh] '>
            <CardContainer
                title='Asistencia Total Por Grupo'
                className='w-[70%]'
                initialDate={initialDate}
                finalDate={finalDate}
            >
                <StatusChart label={labels} value={values} colors={colors} />
            </CardContainer>
            <CardContainer
                title='Categorias'
                className='w-[30%]'
                contentClassName=""
                initialDate={initialDate}
                finalDate={finalDate}>
                <PieChart params={categoryValues} />

            </CardContainer>
        </div>
    )
}
