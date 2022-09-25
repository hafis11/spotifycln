import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSongInfo from '../../../common/hooks/useSongInfo';
import useSpotify from '../../../common/hooks/useSpotify';
import { currentTrackid, isPlaying, user } from '../../../redux/selecter';
import { IoMdPlay, IoIosPause } from 'react-icons/io';
import { actions } from '../../../redux/slice';
import Modal from '../../../common/components/core/modal';


const Player: React.FC = () => {
    const dispatch = useDispatch();
    const spotifyApi = useSpotify()
    let [isOpen, setIsOpen] = useState(false)
    const songInfo: any = useSongInfo();
    const { data: session } = useSession();
    const trackId = useSelector(currentTrackid);
    const status = useSelector(isPlaying);


    const fetchCurrentSong = () => {
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then((data) => {
                dispatch(actions.setCurrentTrack(data?.body?.item?.id));
            });

            spotifyApi.getMyCurrentPlaybackState().then((data) => {
                dispatch(actions.setIsPlaying(data?.body?.is_playing));
            });
        }
    };

    function closeModal() {
        setIsOpen(false)
    }

    const handlePlayPause = () => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getMyDevices().then((data) => {
                let availableDevices = data.body.devices;
                console.log("availableDevices :", availableDevices)
                if (availableDevices.length > 0 && availableDevices.filter(e => e.is_active === true).length > 0) {
                    spotifyApi.getMyCurrentPlaybackState().then((data) => {
                        if (data?.body?.is_playing) {
                            spotifyApi.pause();
                            dispatch(actions.setIsPlaying(false));
                        } else {
                            spotifyApi.play();
                            dispatch(actions.setIsPlaying(true));
                        }
                    })
                } else {
                    setIsOpen(true);
                }
            })
        }
    }

    useEffect(() => {
        if (spotifyApi.getAccessToken() && !trackId) {
            fetchCurrentSong();
        }
        () => { };
    }, [spotifyApi, trackId, session]);


    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal} />
            <div className={`w-full bg-gray-800/95 absolute ${songInfo ? 'flex' : 'hidden'} flex-row justify-between items-center bottom-0 z-50 h-[5.5rem] px-5`}>
                <div className='flex flex-row items-center w-80'>
                    <Image className='pointer-events-none' src={songInfo?.album?.images?.[0]?.url} width={40} height={50} />
                    <div className='pl-3 text-white'>
                        <h4 className='font-medium line-clamp-1'>{songInfo?.name}</h4>
                        <h5 className='font-light text-sm line-clamp-1'>
                            {
                                songInfo?.artists.map((item: any) => {
                                    return <span>{item?.name},</span>
                                })
                            }
                        </h5>
                    </div>

                    <span className='ml-6 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center py-1'>

                        <span className='mx-3 cursor-pointer'>
                            <svg width="18" height="18" fill="none" className='text-white'>
                                <path
                                    d="m10 12 8-6v12l-8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 6v12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <span onClick={handlePlayPause} className='cursor-pointer h-9 w-9 rounded-full bg-green-500 flex justify-center items-center'>
                            {
                                status ? <IoIosPause /> : <IoMdPlay />
                            }
                        </span>

                        <span className='mx-3 cursor-pointer'>
                            <svg width="18" height="18" fill="none" className='text-white'>
                                <path
                                    d="M14 12 6 6v12l8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 6v12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </div>

                    <div className='w-[30rem] flex flex-row items-center'>
                        <h4 className='text-white text-xs'>0.02</h4>
                        <div className="w-full bg-gray-700 rounded-full h-1 mx-2">
                            <div className="bg-white h-1 rounded-full w-[45%]"></div>
                        </div>
                        <h4 className='text-white text-xs'>3.20</h4>
                    </div>
                </div>

                <div className='flex flex-row items-center'>
                    <span className='mx-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </span>

                    <span className='mx-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </span>

                    <span className='mx-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div className='flex flex-row items-center w-[7rem] mx-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                        <div className="w-full bg-gray-700 rounded-full h-1 ml-2 cursor-pointer">
                            <div className="bg-white h-1 rounded-full w-[45%]"></div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Player;