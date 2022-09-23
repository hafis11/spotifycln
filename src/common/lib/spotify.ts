import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID as string,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
});

export default spotifyApi;
