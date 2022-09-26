import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AuthState } from "./enum";

const initialState: AuthState = {
  user: [],
  playlist: [],
  selectedPlaylist: [],
  album: [],
  currentTrackIdState: null,
  isPlaying: false,
  theme: "#111827",
};

const slice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    fetchPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    selectPlaylist: (state, action) => {
      state.selectedPlaylist = action.payload;
    },
    getAlbum: (state, action) => {
      state.album = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrackIdState = action.payload;
    },
    saveTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.profile,
      };
    },
  },
});

export const { name, reducer, actions, getInitialState } = slice;
