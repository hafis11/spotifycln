import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '../../common/components/core/appBar/appBar';
import useSpotify from '../../common/hooks/useSpotify';
import { theme } from '../../redux/selecter';
import Category from './components/category';
import List from './components/list';
import Recently from './components/recent';
import TopTrack from './components/topTrack';


const Home: React.FC = () => {
    const spotifyApi = useSpotify();
    const [loader, setLoader] = useState(false);
    const { data: session } = useSession();
    const [editor, seteditor] = useState<any>();
    const [workOut, setWordOut] = useState<any>();
    const [album, setAlbum] = useState<any>();
    const [playlist, SetPlaylist] = useState<any>();
    const [recently, SetRecently] = useState<any>();
    const [track, SetTrack] = useState<any>();
    const [categories, SetCategories] = useState<any>();
    const themeColor: string = useSelector(theme);


    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    useEffect(() => {
        const fetcher = async () => {
            try {
                setLoader(false);
                if (spotifyApi.getAccessToken()) {
                    /* Get a User’s Top Tracks*/
                    spotifyApi.getFeaturedPlaylists({
                        limit: 4,
                        offset: 0,
                        country: 'IN',
                    })
                        .then(function (data: any) {
                            seteditor(data?.body)
                        }, function (err) {
                            console.log("Something went wrong!", err);
                        });
                    spotifyApi.searchPlaylists('workout', { limit: 4 })
                        .then(function (data: any) {
                            setWordOut(data?.body);
                        }, function (err) {
                            console.log('Something went wrong!', err);
                        });

                    spotifyApi.getNewReleases({ limit: 4, offset: 0, country: 'IN', })
                        .then(function (data: any) {
                            setAlbum(data?.body);
                        }, function (err) {
                            console.log("Something went wrong!", err);
                        });

                    spotifyApi.getFeaturedPlaylists({ limit: 4, offset: 1, country: 'IN', timestamp: '2021-09-26T09:00:00' })
                        .then(function (data) {
                            SetPlaylist(data.body);
                        }, function (err) {
                            console.log("Something went wrong!", err);
                        });

                    spotifyApi.getMyRecentlyPlayedTracks({
                        limit: 8
                    }).then(function (data) {
                        // Output items
                        SetRecently(data.body);
                        // data.body.items.forEach(item => console.log(item.track));
                    }, function (err) {
                        console.log('Something went wrong!', err);
                    });

                    /* Get a User’s Top Tracks*/
                    spotifyApi.getMyTopTracks({ limit: 4 })
                        .then(function (data) {
                            let topTracks = data.body.items;
                            SetTrack(topTracks);
                        }, function (err) {
                            console.log('Something went wrong!', err);
                        });

                    spotifyApi.getCategories({
                        limit: 6,
                        offset: 0,
                        country: 'IN',
                    })
                        .then(function (data) {
                            SetCategories(data.body?.categories);
                        }, function (err) {
                            console.log("Something went wrong!", err);
                        });

                }
            } catch (e: any) {
                await timeout(500);
                console.log(e.message)
                setLoader(true)
            } finally {
                await timeout(500);
                setLoader(true)
            }
        }

        fetcher();
        () => { }
    }, [spotifyApi, session])

    if (!loader) {
        return (
            <div className='w-full h-full bg-black flex justify-center items-center'>
                <div role="status">
                    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }


    return (
        <div className='w-full h-[100vh] overflow-y-scroll overflow-x-hidden relative no-scrollbar md:style-scrollbar pb-36 md:pb-0' style={{ background: `linear-gradient(0deg, transparent 0%, ${themeColor} 90%)` }}>
            <AppBar />
            <Category categories={categories?.items} />
            <Recently track={recently?.items} message={"Recently"} />
            <TopTrack track={track} message={"Top Tracks"} />
            <List track={editor?.playlists?.items} message={editor?.message} />
            <List track={workOut?.playlists?.items} message={"Workout"} />
            <List track={album?.albums?.items} message={"Albums"} />
            <List track={playlist?.playlists?.items} message={playlist?.message} />
        </div>
    )
}

export default Home;
