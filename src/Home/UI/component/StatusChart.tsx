

import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export const StatusChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        // const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Enero 4', 'Enero 11', 'Enero 18', 'Enero 25'],
            datasets: [
                {
                    label: 'Enero',
                    backgroundColor: ['#007bff', '#28a745', '#fd7e14', '#6f42c1'], // Colores en formato hexadecimal
                    borderColor: ['#007bff', '#28a745', '#fd7e14', '#6f42c1'],
                    data: [20, 28, 20, 15]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 300,
                        display: false

                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                        
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card px-5">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
