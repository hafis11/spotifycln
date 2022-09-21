import Image from 'next/image';
import React from 'react';

const PlayerProfile: React.FC = () => {

    return (
        <div className='w-full h-3/6 flex flex-col items-center justify-between bg-gradient-to-b from-indigo-900'>
            <div className='flex flex-row w-full items-end px-8 pt-8'>
                <Image className='pointer-events-none' src="/poster1.jpg" width={200} height={250} />
                <div className='flex flex-col pl-5'>
                    <h4 className='text-white font-semibold text-base'>ALBUM</h4>
                    <h1 className='text-white font-extrabold text-8xl'>Thallumaala</h1>
                    <div className='flex flex-row items-center py-4'>
                        <img className="w-6 h-6 rounded-full pointer-events-none" src="/poster1.jpg" alt="poster" />
                        <h4 className='pl-2 text-white text-sm'>Vishnu Vijay . 2022 . 8 songs, 24 min 20 sec</h4>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-start py-6 px-8 w-full backdrop-blur-sm bg-black/30'>
                <div className='flex flex-row items-center'>

                    <span className='cursor-pointer mr-3 w-12 h-12 rounded-full bg-green-600 flex justify-center items-center hover:scale-105'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-black' width="35" height="35"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                    </span>

                    <span className='cursor-pointer mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>

                    <span className='cursor-pointer mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                    </span>

                    <span className='cursor-pointer mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfile;