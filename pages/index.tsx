import type { NextPage } from 'next'
import Head from 'next/head'
import HomeLayout from '../src/common/components/layouts/home';
import Home from '../src/components/home';
import Player from '../src/components/home/components/player';

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

export default Index;
