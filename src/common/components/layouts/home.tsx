import React from 'react';
import RightBar from '../rightBar';
import SideBar from '../sidebar';

interface Props {
    children: JSX.Element[] | JSX.Element
}


const HomeLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="w-full h-full grid grid-cols-7 flex-1 select-none">
            <div className='bg-black col-span-1'>
                <SideBar />
            </div>
            <main className='col-span-5'>{children}</main>
            <div className='bg-black col-span-1'>
                <RightBar />
            </div>
        </div>
    )
}

export default HomeLayout