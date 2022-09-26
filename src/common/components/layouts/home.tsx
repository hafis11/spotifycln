import React from 'react';
import BottomBar from '../core/bottomBar';
import RightBar from '../rightBar';
import SideBar from '../sidebar';

interface Props {
    children: JSX.Element[] | JSX.Element
}

const HomeLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="w-full h-full grid grid-cols-7 flex-1 select-none overflow-hidden relative">
            <div className='bg-black col-span-1 hidden md:flex'>
                <SideBar />
            </div>
            <main className='col-span-7 md:col-span-5'>{children}</main>
            <div className='bg-black col-span-1 hidden md:flex'>
                <RightBar />
            </div>
            <BottomBar />
        </div>
    )
}

export default HomeLayout