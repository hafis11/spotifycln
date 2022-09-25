import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentTrackid } from "../../redux/selecter";
import useSpotify from "./useSpotify";

function useSongInfo() {
  const spotifyApi = useSpotify();
  const trackId = useSelector(currentTrackid);

  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (trackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${trackId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());

        setSongInfo(trackInfo);
      }
    };

    fetchSongInfo();
  }, [spotifyApi, trackId]);

  return songInfo;
}

export default useSongInfo;
