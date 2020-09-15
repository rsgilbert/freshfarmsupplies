import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    newitem: {
        
    } 
}
export const saveItem = createAsyncThunk('newitem/saveItem', async () => {
    console.log("saving items")
})

const newitemSlice = createSlice({
    name: "newitem",
    initialState,
    reducers: {
        newitemUpdated(state, action) {
            const info = action.payload
            const old = state.newitem
            state.newitem = { ...old, ...info }
            console.log(state.newitem)
        },
    },
    extraReducers: {
        [saveItem.fulfilled]: (state, action) => {
            console.log("fullfilled extra reducer")
        }
    }
})




export const { newitemUpdated } = newitemSlice.actions
 
export const selectNewItemInfo = state => state.newitem.newitem

export default newitemSlice.reducer



