import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'
import itemlistReducer from '../features/itemlist/itemlistSlice'


export default configureStore({
  reducer: {
    search: searchReducer,
    itemlist: itemlistReducer,
  },
});
