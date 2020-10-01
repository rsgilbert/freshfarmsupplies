import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as firebase from "firebase/app"
import "firebase/firestore"
import { initializeFirebase } from '../../functions'

const initialState = {
    itemlist: [
        {
            id: "1",
            name: "Mix Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/7EB91210-25AE-4EE5-B60E-56599ED8A714.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/F4033A57-0473-4014-B35B-AE70561DB6D8.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/E4936DBC-904B-4EF4-806F-A2D4A34628A2.jpeg",
            
            ]
        },
        {
            id: "2",
            name: "Contrast Lace Satin Cami PJ Set",
            description: "Size Medium, Size Large",
            price: 60000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://firebasestorage.googleapis.com/v0/b/milzcollection.appspot.com/o/D9D00A76-0D85-4950-8780-6EDF32F0DDC8.jpeg?alt=media&token=bf104c2d-ac7e-417a-bdc1-0681271a0657"
                ,"https://firebasestorage.googleapis.com/v0/b/milzcollection.appspot.com/o/12CCCEFF-3987-4D60-9796-5A7071E39C6B.jpeg?alt=media&token=584f52ec-b4c6-415b-9d1a-0c19c549ac6e"
                ,"https://firebasestorage.googleapis.com/v0/b/milzcollection.appspot.com/o/8F5807D1-1869-40D4-94CE-5A63925DF638.jpeg?alt=media&token=f4177bad-5790-497d-a865-7d55c66847ba"
            ]
        },
        {
            id: "3",
            name: "Colored Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/1AA62C90-ADAD-4EBB-BFBA-C54AA67961F4.jpeg",
               "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/C426E3F1-FAA4-46A1-B5BE-8E9FC6A4AA25.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/5BEFB705-5F35-4007-A338-AE193E5C20F0.jpeg",
            ]
        },
        {
            id: "1",
            name: "Beautiful Pattern iPhone Case",
            description: "Color: Multicolor. Composition: 100% TPU. Pattern Type: Graphic. Type: Phone Cases",
            price: 23000,
            specs: "7/8, 7P/8P, X",
            quantity: "3@ & 2X",
            pictures: [
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/E4936DBC-904B-4EF4-806F-A2D4A34628A2.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/7EB91210-25AE-4EE5-B60E-56599ED8A714.jpeg",
                "https://emannore.sirv.com/Milz%20Collection.%20Consignment%201/F4033A57-0473-4014-B35B-AE70561DB6D8.jpeg",
               
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

