import type { NextPage } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import HomeLayout from '../../src/common/components/layouts/home';
import { useRouter } from "next/router"
import { wrapper } from '../../src/redux';
import { actions } from '../../src/redux/slice';
import { useMemo } from 'react';
import useSpotify from '../../src/common/hooks/useSpotify';
import { useDispatch } from 'react-redux';
import Home from '../../src/components/playlist';
import Player from '../../src/components/playlist/components/player';


const Index: NextPage = () => {
    const spotifyApi = useSpotify()
    const dispatch = useDispatch();
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


    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black/95">
            <Head>
                <title>Spotify</title>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <HomeLayout>
                <Home />
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
