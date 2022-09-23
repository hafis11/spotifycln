import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

interface Props {

}

interface Tabs {
    title: string;
    href: string;
    icon: any;
}

interface Options {
    title: string;
    href: string
}

const Option: Options[] = [
    {
        title: "My Playlist #2",
        href: "/",
    },
    {
        title: "Peace Happy Mindful",
        href: "/",
    },
    {
        title: "Levitate",
        href: "/",
    },
    {
        title: "Birthday song",
        href: "/",
    }
]

const Tab: Tabs[] = [
    {
        title: "Home",
        href: "/",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
    },
    {
        title: "Search",
        href: "/",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
    },
    {
        title: "Your Library",
        href: "/",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
    }
]

const SideBar: React.FC<Props> = () => {
    return (
        <div className='bg-black w-full h-full px-5 py-4'>
            <span className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            </span>

            <div onClick={() => signOut()} className='flex flex-row items-center py-3 cursor-pointer'>
                <h5 className='pl-2 text-white font-semibold'>Log out</h5>
            </div>

            {
                Tab.map((item: any, index: number) => {
                    return (
                        <Link key={index} href={item?.href}>
                            <div className='flex flex-row items-center py-3 cursor-pointer'>
                                <span>
                                    {item?.icon}
                                </span>
                                <h5 className='pl-2 text-white font-semibold'>{item?.title}</h5>
                            </div>
                        </Link>
                    )
                })
            }

            <div className='flex justify-start items-start py-8 flex-col w-full'>
                <div className='flex flex-row items-center py-3 cursor-pointer'>
                    <div className='bg-white rounded-sm h-7 w-7 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>

                    <h5 className='pl-4 text-white font-semibold'>Create Playlist</h5>
                </div>

                <div className='flex flex-row items-center py-3 cursor-pointer'>
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm h-7 w-7 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <h5 className='pl-4 text-white font-semibold'>Liked Songs</h5>
                </div>
            </div>


            <div>
                {
                    Option.map((item: any, index: number) => {
                        return (
                            <div key={index} className='py-1 cursor-pointer my-1'>
                                <h4 className='text-white font-normal'>{item?.title}</h4>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}

export default SideBar