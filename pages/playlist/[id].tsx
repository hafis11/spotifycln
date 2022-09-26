import type { NextPage } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import HomeLayout from '../../src/common/components/layouts/home';
import { useRouter } from "next/router"
import { wrapper } from '../../src/redux';
import { actions } from '../../src/redux/slice';
import { useMemo } from 'react';
import useSpotify from '../../src/common/hooks/useSpotify';
import { useDispatch, useSelector } from 'react-redux';
import Player from '../../src/components/playlist/components/player';
import PlayList from '../../src/components/playlist';
import { albumList, theme } from '../../src/redux/selecter';
import { FastAverageColor } from "fast-average-color";


const Index: NextPage = () => {
    const spotifyApi = useSpotify()
    const dispatch = useDispatch();
    const album = useSelector(albumList);
    const themeColor = useSelector(theme);
    const router = useRouter();
    const { id } = router.query;


    useMemo(() => {
        if (id) {
            if (spotifyApi.getAccessToken()) {
                spotifyApi.getPlaylist(id as string)
                    .then(function (data) {
                        dispatch(actions.selectPlaylist(data.body))
                    }, function (err: any) {
                        alert('Something went wrong!' + err);
                    });
            }
        }
    }, [id])

    useMemo(() => {
        const getTheme = () => {
            if (album && album?.images?.[0]?.url) {
                const fac = new FastAverageColor();
                fac.getColorAsync(album?.images?.[0]?.url)
                    .then((color: any) => {
                        dispatch(actions.saveTheme(color?.hex))
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        };
        getTheme();
    }, [album, spotifyApi])


    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black/95">
            <Head>
                <title>Spotify</title>
                <link rel="icon" href="/icons/favicon.ico" />
                <meta name="theme-color" content={themeColor} />
            </Head>
            <HomeLayout>
                <PlayList />
            </HomeLayout>
            <Player />
        </div>
    )
}

Index.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
    const session = await getSession(context);
    // console.log("user data :", data);
    store.dispatch(actions.getUsers(session?.user));
})

export default Index;
