import { useSession } from 'next-auth/react';
import React from 'react';

const AppBar: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div className='flex flex-row justify-between items-center px-4 py-4 sticky top-0 z-50 bg-indigo-900/90 w-full'>
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
                <div className='mr-7 bg-black/50 px-6 rounded-full border cursor-pointer'>
                    <h5 className='text-white text-xs font-medium m-0 p-0 py-2'>UPGRADE</h5>
                </div>

                <div className='flex-row flex bg-black rounded-full items-center pr-2 cursor-pointer'>
                    <div className='bg-gray-600 rounded-full w-7 h-7 flex justify-center items-center ml-0.5'>
                        {
                            session?.user?.image ? <img src={session?.user?.image} className="h-7 w-7 rounded-full" /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        }
                    </div>
                    <h4 className='font-semibold text-white pr-3 text-xs pl-2'>{session?.user?.name}</h4>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AppBar;