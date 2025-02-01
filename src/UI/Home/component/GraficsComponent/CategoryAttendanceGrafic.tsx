import { ReportService } from "@/Core/Adapters/ReportService";
import { useEffect, useState } from "react";
import { PieChart } from "../../styled-component/PieChart";

interface Prosp {
    initialDate: any;
    finalDate: any;
}

interface Category {
    labels: string[],
    data: number[]
}

const initialState: Category = {
    labels: [],
    data: []
}

export const CategoryAttendanceGrafic = ({ initialDate, finalDate }: Prosp) => {
    
    const reportService = ReportService;
    const [categoryValues, setCategoryValues] = useState<Category>(initialState)

    useEffect(() => {
        if (initialDate && finalDate) {
            getCategoryAttendance();
        }
    }, [initialDate, finalDate]);

    const getCategoryAttendance = async () => {
        const response = await reportService.getTotalCategoryAttendance.execute(initialDate, finalDate);

        const newLabels: string[] = [];
        const newValues: number[] = [];

        response.forEach((item) => {
            newLabels.push(item.category);
            newValues.push(parseInt(item.totalAttendance));
        });

        setCategoryValues({ ...categoryValues, labels: newLabels, data: newValues })
    };

    return (
        <PieChart params={categoryValues} />
    )
}
