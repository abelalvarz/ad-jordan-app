import React from 'react'

interface Props {
    children: React.ReactNode;
}
export const HeadContainer = ({ children }: Props) => {
    return (
        <div className="flex justify-between items-center  h-[5vh] ">
            {children}
        </div>
    )
}
