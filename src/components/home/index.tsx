import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '../../common/components/core/appBar/appBar';
import useSongInfo from '../../common/hooks/useSongInfo';
import useSpotify from '../../common/hooks/useSpotify';
import { theme } from '../../redux/selecter';
import Category from './components/category';
import List from './components/list';
import Recently from './components/recent';
import TopTrack from './components/topTrack';


const Home: React.FC = () => {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [editor, seteditor] = useState<any>();
    const [workOut, setWordOut] = useState<any>();
    const [album, setAlbum] = useState<any>();
    const [playlist, SetPlaylist] = useState<any>();
    const [recently, SetRecently] = useState<any>();
    const [track, SetTrack] = useState<any>();
    const [categories, SetCategories] = useState<any>();
    const themeColor: string = useSelector(theme);
    const songInfo: any = useSongInfo();

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            /* Get a User’s Top Tracks*/
            spotifyApi.getFeaturedPlaylists({
                limit: 6,
                offset: 0,
                country: 'IN',
            })
                .then(function (data: any) {
                    seteditor(data?.body)
                }, function (err) {
                    console.log("Something went wrong!", err);
                });
            spotifyApi.searchPlaylists('workout', { limit: 6 })
                .then(function (data: any) {
                    setWordOut(data?.body);
                }, function (err) {
                    console.log('Something went wrong!', err);
                });

            spotifyApi.getNewReleases({ limit: 6, offset: 0, country: 'IN', })
                .then(function (data: any) {
                    setAlbum(data?.body);
                }, function (err) {
                    console.log("Something went wrong!", err);
                });

            spotifyApi.getFeaturedPlaylists({ limit: 6, offset: 1, country: 'IN', timestamp: '2021-09-26T09:00:00' })
                .then(function (data) {
                    SetPlaylist(data.body);
                }, function (err) {
                    console.log("Something went wrong!", err);
                });

            spotifyApi.getMyRecentlyPlayedTracks({
                limit: 6
            }).then(function (data) {
                // Output items
                SetRecently(data.body);
                // data.body.items.forEach(item => console.log(item.track));
            }, function (err) {
                console.log('Something went wrong!', err);
            });

            /* Get a User’s Top Tracks*/
            spotifyApi.getMyTopTracks({ limit: 6 })
                .then(function (data) {
                    let topTracks = data.body.items;
                    SetTrack(topTracks);
                }, function (err) {
                    console.log('Something went wrong!', err);
                });

            spotifyApi.getCategories({
                limit: 8,
                offset: 0,
                country: 'IN',
            })
                .then(function (data) {
                    SetCategories(data.body?.categories);
                }, function (err) {
                    console.log("Something went wrong!", err);
                });

        }
        () => { }
    }, [spotifyApi, session])


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

// w-full h-[100vh] overflow-y-scroll overflow-x-hidden relative no-scrollbar md:style-scrollbar pb-36 md:pb-0