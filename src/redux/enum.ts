export interface User {
  name: string;
  email: string;
  image: string;
}

export interface AuthState {
  user: User[];
  playlist: string[];
  selectedPlaylist: string[];
  album: string[];
  currentTrackIdState: any;
  isPlaying: boolean;
  theme: string;
}
