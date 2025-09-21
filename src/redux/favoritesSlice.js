import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
     toggleFavorite: (state, action) => {
      const recipe = action.payload; // Expecting the entire article object
      const existingIndex = state.favoriteRecipes.findIndex(
        (item) => item.id === recipe.idRecipe // Assuming articles have an 'id' property
      );
      if (existingIndex >= 0) {
        state.favoriteRecipes.splice(existingIndex, 1); // Remove from favorites
      } else {
        state.favoriteRecipes.push(article); // Add to favorites
      }
    },
   
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
