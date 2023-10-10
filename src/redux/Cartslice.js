import { createSlice } from "@reduxjs/toolkit";
import productdata from "../demodeta/ProductData";

const initialState = {
    cart: [],
    items: productdata,
    totalQuantity: 0,
    totalPrice: 0,
};

export const Cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload)
            }

        },
        getcartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice =parseInt(totalPrice.toFixed(2));
            state.totalQuantity= totalQuantity;
        },
        removeItem:(state,action)=>{
            state.cart =state.cart.filter((item)=> item.id !== action.payload)
        },
        incriseItemQuantity :(state,action)=>{
            state.cart = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return{...item, quantity: item.quantity+1}
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                // Check if quantity is greater than 0 before decrementing
                const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
                return { ...item, quantity: newQuantity };
              }
              return item;
            });
          },
    },
});
export const { addtocart ,getcartTotal,removeItem,decreaseItemQuantity,incriseItemQuantity} = Cartslice.actions;

export default Cartslice.reducer;