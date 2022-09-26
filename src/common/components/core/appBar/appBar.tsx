import React from 'react';
import { useSelector } from 'react-redux';
import { theme as color } from '../../../../redux/selecter';
import DropDown from './dropdown';

const AppBar: React.FC = () => {

    const themeColor = useSelector(color);

    return (
        <div className={`flex-row justify-between items-center px-4 py-4 sticky top-0 z-50 w-full hidden md:flex`} style={{ backgroundColor: `${themeColor}80` }}>
            <div className='flex-row flex'>
                <div className='bg-black/70 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                <div className='bg-black/40 w-7 h-7 rounded-full ml-2 flex justify-center items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div className='flex-row flex'>
                <DropDown />
            </div>
        </div>
    )
}

export default AppBar;