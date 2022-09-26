import React from 'react';
import type { NextPage } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import { wrapper } from '../../src/redux';
import { actions } from '../../src/redux/slice';
import Player from '../../src/components/playlist/components/player';
import HomeLayout from '../../src/common/components/layouts/home';
import Library from '../../src/components/library';
import { useSelector } from 'react-redux';
import { theme } from '../../src/redux/selecter';


const Index: NextPage = () => {
    const themeColor = useSelector(theme);
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black/95">
            <Head>
                <title>Spotify</title>
                <link rel="icon" href="/icons/favicon.ico" />
                <meta name="theme-color" content={themeColor} />
            </Head>
            <HomeLayout>
                <Library />
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
