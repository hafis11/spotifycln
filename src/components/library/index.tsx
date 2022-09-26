import Image from 'next/image';
import React from 'react';
import AppBar from './components/appBar';
import { IoMdPlay } from 'react-icons/io';

interface Props {

}

const Library: React.FC<Props> = () => {
    return (
        <div className='w-full h-[92vh] bg-gradient-to-b from-gray-600 overflow-y-scroll relative no-scrollbar'>
            <AppBar />
            <div className='w-full flex flex-row justify-between items-center py-4 px-4'>
                <h3 className='text-white font-bold text-xl'>Playlists</h3>
            </div>

            <div className='w-full grid grid-cols-6 pb-7 gap-4 px-4'>
                <div className='bg-gradient-to-r to-cyan-500 from-blue-500 p-3 rounded-lg shadow-sm cursor-pointer group relative col-span-2 text-white flex flex-col justify-end px-4'>
                    <div className='absolute w-full h-full left-0 bottom-0 flex items-center px-4'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae</h3>
                    </div>

                    <div className='py-3'>
                        <h4 className='text-4xl font-bold'>Liked Songs</h4>
                        <h5 className='font-medium'>1 liked songs</h5>
                    </div>
                    <span className='absolute bottom-4 right-3 shadow-2xl group-hover:flex hidden h-12 w-12 rounded-full bg-green-600 justify-center items-center'>
                        <IoMdPlay className='text-2xl text-black' />
                    </span>
                </div>
                {
                    Song.map((item: any, index: number) => {
                        return (
                            <div key={index} className='bg-black/70 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-gray-800/95 group'>
                                <div className='relative'>
                                    <Image className='pointer-events-none rounded-lg shadow-2xl bg-black' src={item?.image} width={190} height={220} />
                                    <span className='absolute bottom-4 shadow-2xl right-3 group-hover:flex hidden h-12 w-12 rounded-full bg-green-600 justify-center items-center'>
                                        <IoMdPlay className='text-2xl' />
                                    </span>
                                </div>
                                <div className='flex flex-col py-2 pb-4'>
                                    <h4 className='text-white font-bold text-sm line-clamp-1'>{item?.title}</h4>
                                    <h4 className='text-white font-light text-xs'>2022</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Library;


const Song = [
    {
        title: "Thallumaala",
        year: "2022",
        image: "/poster1.jpg"
    },
    {
        title: "Thallumaala Paattu",
        year: "2022",
        image: "/poster2.jpg"
    },
    {
        title: "Ole Melody (From Tallumaala)",
        year: "2022",
        image: "/poster3.jpg"
    }
]
