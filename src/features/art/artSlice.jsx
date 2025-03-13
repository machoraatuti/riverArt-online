// artSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock data for demonstration
const artworks = [
  { id: 1, title: 'Sunset Bliss', artist: 'Jane Doe', price: 15, image: `/assets/images/1738770399641.jpg` },
  { id: 2, title: 'Ocean Dreams', artist: 'John Smith', price: 20, image: '/assets/images/1738770399668.jpg' },
  { id: 3, title: 'Mountain Serenity', artist: 'Alice Johnson', price: 25, image: '/assets/images/1738770399695.jpg' },
  { id: 4, title: 'Forest Whisper', artist: 'Bob Brown', price: 30, image: '/assets/images/1738770399723.jpg' },
  { id: 7, title: 'Night Sky', artist: 'Ethan Green', price: 45, image: '/assets/images/1738770399805.jpg' },
  { id: 8, title: 'Morning Dew', artist: 'Fiona Harris', price: 50, image: '/assets/images/1738770399834.jpg' },
  { id: 9, title: 'Autumn Leaves', artist: 'George Clark', price: 55, image: '/assets/images/1738770399861.jpg' },
  { id: 10, title: 'Winter Frost', artist: 'Hannah Lewis', price: 60, image: '/assets/images/1738770399891.jpg' },
  { id: 11, title: 'Spring Blossom', artist: 'Ian Walker', price: 65, image: '/assets/images/1738770399922.jpg' },
  { id: 12, title: 'Summer Heat', artist: 'Jenna Hall', price: 70, image: '/assets/images/1738770399950.jpg' },
  { id: 13, title: 'Golden Hour', artist: 'Kevin Young', price: 75, image: '/assets/images/1738770399980.jpg' },
  { id: 14, title: 'Twilight Glow', artist: 'Laura Allen', price: 80, image: '/assets/images/1738770400008.jpg' },
  { id: 15, title: 'Rainbow Bridge', artist: 'Mike Scott', price: 85, image: '/assets/images/1738770400037.jpg' },
  { id: 16, title: 'Starry Night', artist: 'Nina King', price: 90, image: '/assets/images/1738770400080.jpg' },
  { id: 17, title: 'Moonlit Lake', artist: 'Oscar Wright', price: 95, image: '/assets/images/1738770400119.jpg' },
  { id: 18, title: 'Sunrise Peak', artist: 'Paul Adams', price: 100, image: '/assets/images/1738770400159.jpg' },
  { id: 19, title: 'Sunset Valley', artist: 'Quincy Baker', price: 105, image: '/assets/images/1738770400191.jpg' },
  { id: 20, title: 'Ocean Breeze', artist: 'Rachel Carter', price: 110, image: '/assets/images/1738770400220.jpg' },
  { id: 21, title: 'Mountain Echo', artist: 'Steve Diaz', price: 110, image: '/assets/images/1738770400250.jpg' },
  { id: 22, title: 'Forest Path', artist: 'Tina Flores', price: 120, image: '/assets/images/1738770400274.jpg' },
  { id: 23, title: 'Desert Storm', artist: 'Uma Garcia', price: 120, image: '/assets/images/1738770400302.jpg' },
  { id: 24, title: 'Cityscape', artist: 'Victor Hernandez', price: 130, image: '/assets/images/1738770400329.jpg' },
  { id: 25, title: 'Nightfall', artist: 'Wendy Martinez', price: 135, image: '/assets/images/1738770400355.jpg' },
];

// Async thunk for fetching art data
export const fetchArtworks = createAsyncThunk('art/fetchArtworks', async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve([...artworks]), 1000); // Ensure it's properly referenced
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
