import { PageContainer } from '@/UI/App/styled-components/PageContainer'
import { StatusChart } from './component/StatusChart'
import { CardContainer } from './style-component/CardContainer'

const reportes = [
    { date: '4 de Enero 2025' },
    { date: '11 de Enero 2025' },
    { date: '18 de Enero 2025' },
    { date: '25 de Enero 2025' },
    { date: '25 de Enero 2025' },
    { date: '25 de Enero 2025' },
]

export const HomePage = () => {

    return (
        <PageContainer>
            <div className='relative h-full '>
                <h1 className='text-xl font-bold'>Bienvenido</h1>

                <CardContainer title='Asistencia de Mes'>
                    <StatusChart />
                </CardContainer>

                <div className='px-0 py-0 md:w-full'>
                    <h1 className='text-xl font-bold'>Recientes</h1>
                    <div className="w-full h-full overflow-x-scroll">
                        {
                            reportes.map((reporte, i) => (
                                <div key={i} className='px-5 py-3 mt-2 bg-slate-300 rounded-t-md'>
                                    <h2 className='text-blue-600 '>Reporte de {reporte.date}</h2>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </PageContainer>
    )
}
