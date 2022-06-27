import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode;
}
function Layout({ className, children }: Props) {
    return (
        <div className={`${className} text-lg xl:text-[28px] 2xl:text-3xl text-warm selection:bg-theme-accent selection:text-black bg-dark font-inter font-light relative overflow-hidden`}>
            <div className="px-6 xl:px-44 2xl:px-56 bg-grain bg-contain">
                {children}
            </div>
        </div>

    )
}
export default Layout
