import React, { useMemo } from 'react';
import AppBar from './components/appBar';
import MusicList from './components/musicList';
import PlayerProfile from './components/playerProfile';
import { FastAverageColor } from "fast-average-color";
import { useDispatch, useSelector } from 'react-redux';
import { albumList, theme as color } from '../../redux/selecter';
import { actions } from '../../redux/slice';


const Home: React.FC = () => {

    const dispatch = useDispatch();
    const album = useSelector(albumList);
    const themeColor = useSelector(color);

    useMemo(() => {
        const getTheme = () => {
            if (album) {
                const fac = new FastAverageColor();
                fac.getColorAsync(album?.images?.[0]?.url)
                    .then((color: any) => {
                        console.log(color?.hex);
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
        <div className={`h-[92vh] w-full bg-gradient-to-b from-[${themeColor}] overflow-y-auto relative no-scrollbar`}>
            <AppBar />

            <PlayerProfile />
            <MusicList />
        </div>
    )
}

export default Home;