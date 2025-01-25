import React from 'react'
import { isStandalone } from '../utils/standaloneChecker';

interface Props {
    children: React.ReactNode;
}
export const PageContainer = ({ children }: Props) => {
    return (
        <div className={`md:w-[85%] lg:w-[88%] lg:ml-[12%] md:ml-[15%] ${isStandalone ? 'h-[90vh]': 'h-[100vh]'} max-sm:mb-[10vh] bg-gray-200 px-10 overflow-y-hidden overflow-x-hidden`}>
            {children}
        </div>
    )
}
