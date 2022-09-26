import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSpotify from '../../../common/hooks/useSpotify';
import { albumList, selectedList } from '../../../redux/selecter';
import moment from 'moment';
import { actions } from '../../../redux/slice';
import Modal from '../../../common/components/core/modal';

const MusicList: React.FC = () => {
    const playList = useSelector(selectedList);
    let [isOpen, setIsOpen] = useState(false)
    const album = useSelector(albumList);
    const spotifyApi = useSpotify()
    const dispatch = useDispatch();


    function closeModal() {
        setIsOpen(false)
    }


    useMemo(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getPlaylist(playList?.id).then((data) => {
                dispatch(actions.getAlbum(data?.body))
            })
        }
    }, [playList])


    const playSong = (item: any) => {
        try {
            if (spotifyApi.getAccessToken()) {
                spotifyApi.getMyDevices().then((data) => {
                    let availableDevices = data.body.devices;
                    console.log("availableDevices :", availableDevices)
                    if (availableDevices.length > 0 && availableDevices.filter(e => e.is_active === true).length > 0) {
                        dispatch(actions.setCurrentTrack(item?.track?.id));
                        dispatch(actions.setIsPlaying(true));
                        spotifyApi.play({
                            uris: [item?.track?.uri],
                        })
                    } else {
                        setIsOpen(true);
                    }
                })
            }
        } catch (e: any) {
            alert(e.message)
        }
    }


    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal} />
            <div className='w-full backdrop-blur-sm bg-gradient-to-b from-black/30 px-8 pb-4'>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white/80 uppercase">
                            <tr>
                                <th scope="col" className="py-3 px-3">
                                    #
                                </th>
                                <th scope="col" className="py-3 pr-6">
                                    TITLE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    ALBUM
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    DATE ADDED
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                album?.tracks?.items?.map((item: any, index: number) => (
                                    <tr key={index} onDoubleClick={() => playSong(item)} className="text-white/80 hover:bg-white/25 group">
                                        <td className="py-4">
                                            <div className='w-8 h-8 flex justify-center items-center'>
                                                <h4 className='block group-hover:hidden'>{index + 1}</h4>
                                                <span className='hidden group-hover:block'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-white' width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" /></svg>
                                                </span>
                                            </div>
                                        </td>
                                        <th scope="row" className="py-4 pr-6 flex flex-row">
                                            <Image className='pointer-events-none rounded-sm shadow-2xl bg-black' src={item?.track?.album?.images?.[0]?.url} width={38} height={40} />
                                            <div className='flex flex-col pl-2'>
                                                <h5 className='font-medium text-white/80 whitespace-nowrap'>{item?.track?.name}</h5>
                                                <h4 className='text-xs font-normal text-white/80 whitespace-nowrap'>{
                                                    item?.track.artists.map((item: any, index: any) => {
                                                        return <span key={index}>{item?.name},</span>
                                                    })
                                                }</h4>
                                            </div>
                                        </th>
                                        <td className="py-4 px-6">
                                            {item?.track?.album?.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {moment(item?.track?.album?.release_date).startOf('day').fromNow()}
                                        </td>
                                        <td className="py-4 px-6">
                                            {`${Math.floor((item?.track?.duration_ms / 1000 / 60) << 0)} : ${Math.floor((item?.track?.duration_ms / 1000) % 60)}`}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className='w-full justify-start items-center py-4'>
                    <div className='flex flex-col'>
                        <h4 className='text-xs text-white'>2022 Muzik247</h4>
                        <h4 className='text-xs text-white'>2022 Muzik247</h4>
                    </div>
                </div>

                <div className='w-full flex flex-row justify-between items-center py-4'>
                    <h3 className='text-white font-bold text-xl'>More by Vishnu Vijay</h3>
                    <h3 className='text-white text-sm cursor-pointer'>SEE DISCOGRAPHY</h3>
                </div>

                <div className='w-full grid grid-cols-6 pb-7 pt-4'>
                    {
                        Song.map((item: any, index: number) => {
                            return (
                                <div key={index} className='bg-black/70 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-gray-800/95 mr-4 group'>
                                    <div className='relative'>
                                        <Image className='pointer-events-none rounded-lg shadow-2xl bg-black' src={item?.image} width={190} height={220} />
                                        <span className='absolute bottom-2 right-0 group-hover:block hidden'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 fill-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
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
            </div></>
    )
}

export default MusicList;


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
    },
    {
        title: "Kannil Pettole (From Tallumaala)",
        year: "2022",
        image: "/poster4.jpg"
    },
    {
        title: "Ndaakkippaattu (From Tallumaala)",
        year: "2022",
        image: "/poster5.jpg"
    },
    {
        title: "Ambili (Original Moti)",
        year: "2019",
        image: "/poster6.jpg"
    }
]



const List = [
    {
        id: 1,
        title: "Kannil Pettole - From Thallumaala",
        plays: "3,43,3424",
        time: "4:56",
        auther: "Vishnu Vijay, Irfana"
    },
    {
        id: 2,
        title: "Ole Melody - From Thallumaala",
        plays: "1,13,3424",
        time: "2:56",
        auther: "Haricharan, Benny Dayal, Salim Kumar, Vishy Vijay"
    },
    {
        id: 3,
        title: "Thallumaala Pattu - From Thallumaala",
        plays: "6,03,3420",
        time: "9:56",
        auther: "Hrithik Jayakish, Neha Girish, Vishnu Vijay"
    },
    {
        id: 4,
        title: "Ndaakkippaattu - From Thallumaala",
        plays: "1,53,3004",
        time: "1:56",
        auther: "Vishnu Vijay, Binu Pappum Santhosh Haritharan"
    },
    {
        id: 5,
        title: "Manavaalan Thug - From Thallumaala",
        plays: "2,33,0024",
        time: "9:56",
        auther: "Dabzee, SA"
    }
]