import { User } from "./enum";

export const user = (state: { profile: { user: User } }) => state.profile.user;

export const PlayList = (state: { profile: { playlist: any } }) =>
  state.profile.playlist;

export const selectedList = (state: { profile: { selectedPlaylist: any } }) =>
  state.profile.selectedPlaylist;

export const albumList = (state: { profile: { album: any } }) =>
  state.profile.album;

export const theme = (state: { profile: { theme: any } }) =>
  state.profile.theme;

export const isPlaying = (state: { profile: { isPlaying: any } }) =>
  state.profile.isPlaying;

export const currentTrackid = (state: {
  profile: { currentTrackIdState: any };
}) => state.profile.currentTrackIdState;
