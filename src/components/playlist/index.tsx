import React, { useMemo } from 'react';
import AppBar from '../../common/components/core/appBar/appBar';
import MusicList from './components/musicList';
import PlayerProfile from './components/playerProfile';
import { FastAverageColor } from "fast-average-color";
import { useDispatch, useSelector } from 'react-redux';
import { albumList, theme as color } from '../../redux/selecter';
import { actions } from '../../redux/slice';
import useSongInfo from '../../common/hooks/useSongInfo';


const PlayList: React.FC = () => {

    const dispatch = useDispatch();
    const album = useSelector(albumList);
    const themeColor = useSelector(color);
    const songInfo: any = useSongInfo();

    useMemo(() => {
        const getTheme = () => {
            if (album) {
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
    }, [album])

    return (
        <div className={`${songInfo ? 'h-[92vh]' : 'h-[100vh]'} w-full bg-gradient-to-b from-[${themeColor}] overflow-y-scroll relative no-scrollbar`}>
            <AppBar />
            <PlayerProfile />
            <MusicList />
        </div>
    )
}

export default PlayList;