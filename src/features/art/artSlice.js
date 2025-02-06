// artSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock data for demonstration
const mockArtworks = [
  { id: '1', title: 'Sunset Bliss', artist: 'Jane Doe', price: 150, image: 'https://via.placeholder.com/300' },
  { id: '2', title: 'Ocean Dreams', artist: 'John Smith', price: 200, image: 'https://via.placeholder.com/300' },
];

// Async thunk for fetching art data
export const fetchArtworks = createAsyncThunk('art/fetchArtworks', async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve([...mockArtworks]), 1000); // Ensure it's properly referenced
  });
});

const artSlice = createSlice({
  name: 'art',
  initialState: {
    artworks: [],
    isLoading: false,
    errMsg: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.isLoading = true;
        state.errMsg = null;
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.artworks = action.payload;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error.message;
      });
  },
});

// ✅ Fixing selector to correctly retrieve artwork by ID
export const selectArtById = (state, id) => {
  return state.art.artworks.find((art) => art.id === id);
};

export default artSlice.reducer;
