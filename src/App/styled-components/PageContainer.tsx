import React from 'react'

interface Props {
    children: React.ReactNode;
}
export const PageContainer = ({ children }: Props) => {
    return (
        <div className='w-full h-svh p-5 bg-gray-100'>
            {children}
        </div>
    )
}
