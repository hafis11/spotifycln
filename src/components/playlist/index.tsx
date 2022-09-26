import React from 'react';
import AppBar from '../../common/components/core/appBar/appBar';
import MusicList from './components/musicList';
import PlayerProfile from './components/playerProfile';
import { useSelector } from 'react-redux';
import { theme as color } from '../../redux/selecter';
import useSongInfo from '../../common/hooks/useSongInfo';


const PlayList: React.FC = () => {

    const themeColor = useSelector(color);
    const songInfo: any = useSongInfo();


    return (
        <div className={`${songInfo ? 'h-[92vh]' : 'h-[100vh]'} w-full overflow-y-scroll relative no-scrollbar`} style={{ background: `linear-gradient(0deg, #000 0%, ${themeColor} 90%)` }}>
            <AppBar />
            <PlayerProfile />
            <MusicList />
        </div>
    )
}

export default PlayList;