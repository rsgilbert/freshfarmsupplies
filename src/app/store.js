import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'
import itemlistReducer from '../features/itemlist/itemlistSlice'
import cartReducer from '../features/cart/cartSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    itemlist: itemlistReducer,
    cart: cartReducer,
  },
});
