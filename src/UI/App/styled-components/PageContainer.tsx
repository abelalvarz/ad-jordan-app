import React from 'react'
import { isStandalone } from '../utils/standaloneChecker';

interface Props {
    children: React.ReactNode;
}
export const PageContainer = ({ children }: Props) => {
    return (
        <div className={`md:w-[80%] lg:w-[85%] lg:ml-[15%] md:ml-[20%] h-[${isStandalone ? '90vh' : '100vh'}] max-sm:mb-[10vh] bg-gray-100 p-5 overflow-y-hidden overflow-x-hidden`}>
            {children}
        </div>
    )
}
