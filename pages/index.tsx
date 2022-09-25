import type { NextPage } from 'next'
import { getSession, signIn } from 'next-auth/react';
import Head from 'next/head'
import HomeLayout from '../src/common/components/layouts/home';
import Home from '../src/components/home';
import Player from '../src/components/home/components/player';
import { wrapper } from '../src/redux';
import { actions } from '../src/redux/slice';


const Index: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black/95">
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
