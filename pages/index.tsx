import type { NextPage } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeLayout from '../src/common/components/layouts/home';
import Home from '../src/components/home';
import Player from '../src/components/playlist/components/player';
import { wrapper } from '../src/redux';
import { theme } from '../src/redux/selecter';
import { actions } from '../src/redux/slice';


const Index: NextPage = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector(theme);

  useEffect(() => {
    dispatch(actions.saveTheme('transparent'))
  }, [])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black/95">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="theme-color" content={themeColor} />
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
