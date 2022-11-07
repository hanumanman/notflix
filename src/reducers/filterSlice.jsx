import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../app/API/config";

export const filterByGenre = createAsyncThunk(
  "filter/filterByGenre",
  async ({ genreId, currentPage }) => {
    const response = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=${currentPage}`
    );
    return response.data;
  }
);

export const filterByNewest = createAsyncThunk(
  "filter/filterByNewest",
  async ({ currentPage }) => {
    const response = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${currentPage}`
    );
    return response.data;
  }
);

export const filterByTopRated = createAsyncThunk(
  "filter/filterByTopRated",
  async ({ currentPage }) => {
    const response = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&page=${currentPage}`
    );
    return response.data;
  }
);

export const asyncSearch = createAsyncThunk(
  "filter/asyncSearch",
  async ({ query, currentPage }) => {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${currentPage}`
    );
    return response.data;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    browsing: "Pick something! Right over there ↑",
    results: [],
    pagesAmount: 1,
    currentPage: 1,
  },
  reducers: {
    updatePage: (state, action) => {
      console.log(`update page!`);
      state.currentPage = action.payload;
    },
    updateUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
    updatePagesAmount: (state, action) => {
      state.pagesAmount = action.payload;
    },
    updateBrowsing: (state, action) => {
      state.browsing = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(filterByGenre.fulfilled, (state, action) => {
      state.results = action.payload.results;
      action.payload.total_pages <= 500
        ? (state.pagesAmount = action.payload.total_pages)
        : (state.pagesAmount = 500);
    });

    builder.addCase(filterByNewest.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.browsing = "Newest ";
      action.payload.total_pages <= 500
        ? (state.pagesAmount = action.payload.total_pages)
        : (state.pagesAmount = 500);
    });

    builder.addCase(filterByTopRated.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.browsing = "Top Rated";
      action.payload.total_pages <= 500
        ? (state.pagesAmount = action.payload.total_pages)
        : (state.pagesAmount = 500);
    });

    builder.addCase(asyncSearch.fulfilled, (state, action) => {
      state.results = action.payload.results;
      action.payload.total_pages <= 500
        ? (state.pagesAmount = action.payload.total_pages)
        : (state.pagesAmount = 500);
    });
  },
});
export const { updatePage, updateUrl, updatePagesAmount, updateBrowsing } =
  filterSlice.actions;
export default filterSlice.reducer;
