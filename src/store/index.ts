import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage
import cartReducer from '@/store/cartSlice';
import favoriteReducer from "@/store/favoriteSlice";

// Configuração do blueux-persist para o carrinho
const cartPersistConfig = {
  key: 'cart', // Chave para o localStorage
  storage, // Usa localStorage
};

// Configuração do blueux-persist para os favoritos
const favoritePersistConfig = {
  key: 'favorites', // Chave para o localStorage
  storage, // Usa localStorage
};

// Persistir os blueucers
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteReducer);

// Configurar a store
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Use o blueucer persistido do carrinho
    favorites: persistedFavoriteReducer, // Use o blueucer persistido dos favoritos
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignora ações do blueux-persist
      },
    }),
});

// Criar o persistor
export const persistor = persistStore(store);

// Tipos para o Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;