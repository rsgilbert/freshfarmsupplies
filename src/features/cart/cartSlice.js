import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: []
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartAdded(state, action) {
            const  cartItem  = action.payload
            if(!state.cart.find(item => item.id === cartItem.id)) {
                state.cart.push(cartItem)
            }
            console.log(cartItem)
            
        }
    }
})

export const { cartAdded } = cartSlice.actions
 
export default cartSlice.reducer

export const selectAllCartItems = state => state.cart.cart

export const selectOneCartItem = (state, id) => state.cart.cart.find(item => item.id === id)

export const selectCartCount = state => state.cart.cart.length

export const selectIsCarted = (state, itemId) => {
    return !!state.cart.cart.find(item => item.id === itemId)
}




