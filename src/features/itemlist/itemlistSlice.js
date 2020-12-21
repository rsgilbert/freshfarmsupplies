import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import * as firebase from "firebase/app"
// import "firebase/firestore"
import { initializeFirebase } from '../../functions'

const initialState = {
    itemlist: [
        {
            id: "1",
            name: "Tomatoes",
            description: "Ripe tomatoes",
            price: 500,
            specs: "",
            quantity: "",
            pictures: [
                "/tomato.jpg"
            ]
        },
        {
            id: "2",
            name: "Beans",
            description: "Tasty beans",
            price: 4000,
            specs: "",
            quantity: "",
            pictures: [
                "/beans.jpg",
                "/beans.jpg"
            ]
        },
        {
            id: "3",
            name: "Green paper",
            description: "Right from the garden green paper",
            price: 300,
            specs: "",
            quantity: "",
            pictures: [
                "/greenpaper.jpg"
            ]
        },
        {
            id: "4",
            name: "Ginger",
            description: "Surreptitious Ginger",
            price: 1000,
            specs: "",
            quantity: "2",
            pictures: [
                "/ginger2.jpg",
                "ginger.jpg"                
            ]
        },
        {
            id: "5",
            name: "Carrots",
            description: "Fresh carrots",
            price: 200,
            specs: "",
            quantity: "10",
            pictures: [
                "/carrot.jpg",           
            ]
        },
        {
            id: "6",
            name: "Matooke",
            description: "Masaaka grown matooke",
            price: 20000,
            specs: "Green",
            quantity: "",
            pictures: [
                "/matooke.jpg"
            ]
        },
        {
            id: "7",
            name: "Avocado",
            description: "We have lots of avocado",
            price: 2000,
            specs: "Almost ripe",
            quantity: "400",
            pictures: [
                "/avocado.jpg"
            ]
        },
    ],
    status: 'idle',
    error: null
}

export const fetchItems = createAsyncThunk('items/fetchItems', 
    async () => {
        // initializeFirebase()
        // const db = firebase.firestore()
        // return db.collection("items")
        //     .get()
        //     .then(snapshot => {
        //         const items = []
        //         snapshot.forEach(doc => items.push(doc.data()))
        //         return items
        //     })
        //     .catch(e => console.log("Error getting docs: ", e))
    })

export const watchItems = createAsyncThunk('items/watchItems', 
    async () => {
        // initializeFirebase()
        // const db = firebase.firestore()
        // db.collection("items")
        //     .onSnapshot(function (querySnapshot) {
        //         var items = []
        //         querySnapshot.forEach(function (doc) {
        //             items.push(doc.data())
        //         })
        //         return items
        //     })
    }
)



const itemlistSlice = createSlice({
    name: "itemlist",
    initialState,
    reducers: {
        itemlistUpdated(state, action) {
            console.log("payload is ", action.payload)
            state.itemlist = action.payload
        }
    },
    extraReducers: {
        [fetchItems.pending]: (state, action) =>  {
            state.status = 'loading'
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.itemlist = action.payload
            state.status = 'succeeded'
        },
        [fetchItems.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})


export const {  } = itemlistSlice.actions
 
export default itemlistSlice.reducer

export const selectAllItems = state => ({
    itemlist: state.itemlist.itemlist,
    status: state.itemlist.status 
})

export const selectItem = (state, id) => {
    const item = state.itemlist.itemlist.find(item => item.id === id)

    return {
        item,
        status: state.itemlist.status
    }
}

