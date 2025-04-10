import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string; // Adicione esta linha
}

interface FavoriteState {
  items: FavoriteItem[];
}

const initialState: FavoriteState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;