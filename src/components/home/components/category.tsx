import React from 'react';
import { IoIosTimer, IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai'


interface Props {

}

const Category: React.FC<Props> = () => {
    return (
        <div className='w-full px-4 pb-4'>
            <div className='md:py-3 py-4 flex flex-row justify-between items-center'>
                <div>
                    <h4 className='font-bold text-2xl text-white'>Good afternoon</h4>
                </div>

                <div className='text-white flex flex-row items-center'>
                    <IoMdNotificationsOutline className='text-2xl ml-2.5' />
                    <IoIosTimer className='text-2xl ml-2.5' />
                    <AiOutlineSetting className='text-2xl ml-2.5' />
                </div>
            </div>

            <div className='flex flex-row justify-start items-center pb-6 gap-x-2'>
                <div className='bg-gray-500 text-white rounded-full px-4'>
                    <h4 className="text-sm py-1">Music</h4>
                </div>

                <div className='bg-gray-500 text-white rounded-full px-4'>
                    <h4 className="text-sm py-1">Podcasts & Shows</h4>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <div key={index} className='group flex flex-row items-center bg-gray-500/20 hover:bg-gray-500/60 shadow-xl rounded-md overflow-hidden cursor-pointer relative'>
                                <div className='shadow-2xl'><img src='/poster1.jpg' className='w-10 md:w-16 object-fill' /></div>
                                <div className='md:pl-4 pl-2'>
                                    <h5 className='font-bold text-white'>My Playlist #2</h5>
                                </div>

                                <span className='cursor-pointer mr-3 w-12 h-12 rounded-full bg-green-600 md:group-hover:flex justify-center items-center hover:scale-105 absolute right-1 hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-black' width="35" height="35"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category;