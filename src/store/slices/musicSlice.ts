import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Track {
  id: number;
  title: string;
  artist: { name: string };
  album: { cover_medium: string };
}

interface MusicState {
  selectedTrack: string | null;
  newReleases: Track[];
  loading: boolean;
}

const initialState: MusicState = {
  selectedTrack: null,
  newReleases: [],
  loading: false,
};

export const fetchNewReleases = createAsyncThunk<Track[], string | undefined>(
  "music/fetchNewReleases",
  async (query = "new") => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
    );
    const data = await response.json();
    return data.data;
  }
);

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setSelectedTrack: (state, action: PayloadAction<string>) => {
      state.selectedTrack = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewReleases.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchNewReleases.fulfilled,
        (state, action: PayloadAction<Track[]>) => {
          state.newReleases = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchNewReleases.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedTrack } = musicSlice.actions;
export default musicSlice.reducer;
