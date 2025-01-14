
interface Props {
    children: React.ReactNode;
    title: string;
}
export const CardContainer = ({ children,title }: Props) => {
    return (
        <div className="bg-white  rounded-md my-5">
            <div className='px-5 py-4 bg-blue-100 rounded-t-md'>
                <h2 className='text-blue-600 font-bold'>{title}</h2>
            </div>
            <div className=' py-2 md:w-full'>
                {children}
            </div>
        </div>
    )
}
