import React from 'react';


interface Props {
    track: any,
    message: any
}

const Recently: React.FC<Props> = ({ track, message }) => {

    return (
        <>
            <div className='w-full flex flex-row justify-between items-center py-4 px-4'>
                <h3 className='text-white font-bold text-xl'>{message}</h3>
                <h3 className='text-white text-sm font-medium cursor-pointer'>SEE ALL</h3>
            </div>

            <div className='w-full flex flex-row md:grid grid-cols-6 md:pb-7 gap-3 pb-0 md:gap-4 px-4 overflow-auto snap-x no-scrollbar'>
                {
                    track?.map((item: any, index: number) => {
                        return (
                            <div key={index} className='md:p-3 snap-start scroll-ml-6 flex-shrink-0 rounded-lg md:shadow-lg cursor-pointer md:hover:bg-gray-800/95 group w-44 md:w-auto md:bg-black/70'>
                                <div className='relative'>
                                    <img className='pointer-events-none rounded-lg shadow-2xl bg-black w-44 h-44 md:w-52 md:h-52' src={item?.track?.album?.images[0]?.url} />
                                    <span className='absolute bottom-2 right-2 md:group-hover:flex hidden w-12 h-12 bg-green-600 rounded-full justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-black' width="35" height="35"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                                    </span>
                                </div>
                                <div className='flex flex-col py-3 pb-4'>
                                    <h4 className='text-white font-bold text-sm line-clamp-1'>{item?.track?.name}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Recently