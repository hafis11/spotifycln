import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { IoIosPause, IoMdHeart, IoMdPlay } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackid, isPlaying } from '../../../../redux/selecter';
import { actions } from '../../../../redux/slice';
import useSongInfo from '../../../hooks/useSongInfo';
import useSpotify from '../../../hooks/useSpotify';
import Modal from '../modal';


interface Props {

}

const BottomBar: React.FC<Props> = () => {

    const dispatch = useDispatch();
    const spotifyApi = useSpotify()
    let [isOpen, setIsOpen] = useState(false)
    const songInfo: any = useSongInfo();
    const { data: session } = useSession();
    const trackId = useSelector(currentTrackid);
    const status = useSelector(isPlaying);


    function closeModal() {
        setIsOpen(false)
    }


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

    const handlePlayPause = () => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getMyDevices().then((data) => {
                let availableDevices = data.body.devices;
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
            <div className='fixed bottom-0 w-full block md:hidden'>
                <div className='bg-blue-300 w-11/12 mx-auto rounded-lg overflow-hidden'>
                    <div className='flex flex-row justify-between items-center p-2'>
                        <div className='flex flex-row'>
                            <img src={songInfo?.album?.images?.[0]?.url} className='w-12 h-12 rounded-md' />
                            <div className='flex flex-col justify-center pl-2'>
                                <h4 className='font-semibold line-clamp-1'>{songInfo?.name}</h4>
                                <h4 className='text-sm line-clamp-1'>
                                    {
                                        songInfo?.artists.map((item: any) => {
                                            return <span>{item?.name},</span>
                                        })
                                    }</h4>
                            </div>
                        </div>

                        <div className='flex flex-row'>
                            <span onClick={handlePlayPause} className='cursor-pointer'>
                                {
                                    status ? <IoIosPause className='text-2xl mx-1' /> : <IoMdPlay className='text-2xl mx-1' />
                                }
                            </span>
                            <IoMdHeart className='text-2xl mx-1' />
                        </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full w-[45%]"></div>
                    </div>
                </div>
                <div className='bg-gradient-to-t to-black/60 from-black w-full z-50 flex flex-row justify-between items-center py-3 px-24'>
                    <span className='flex flex-col items-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                        </svg>
                        <h4 className='text-[.7rem] pt-1'>Home</h4>
                    </span>

                    <span className='flex flex-col items-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <h4 className='text-[.7rem] pt-1'>Search</h4>
                    </span>

                    <span className='flex flex-col items-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                        </svg>
                        <h4 className='text-[.7rem] pt-1'>Your Library</h4>
                    </span>
                </div>
            </div>
        </>
    )
}
export default BottomBar;