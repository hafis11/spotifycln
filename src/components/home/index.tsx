import React from 'react';
import AppBar from './components/appBar';
import MusicList from './components/musicList';
import PlayerProfile from './components/playerProfile';


const Home: React.FC = () => {
    return (
        <div className="h-[92vh] w-full bg-gradient-to-b from-indigo-900 overflow-y-auto relative no-scrollbar">
            <AppBar />

            <PlayerProfile />
            <MusicList />
        </div>
    )
}

export default Home;