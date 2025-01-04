import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItem";


//買い物かご状態の初期化
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //カート内のアイテムをクリアするアクションクリエーター
        clearCart: state => {
            return {
                cartItems: [],
                amount: 0,
                total: 0
            };
        },
        //選択したアイテムを削除するアクションクリエーター
        removeItem: (state,action) =>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter( item => item.id !== itemId);
        },
        //アイテムを１個追加するアクションクリエーター
        increase: (state,action) =>{
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1;
        },
        //アイテムを１個減らすアクションクリエーター
        decrease: (state,action) =>{
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount = cartItem.amount - 1;
        },
        //合計アイテム数と合計金額を計算するアクションクリエーター
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach( item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
            
        }
    }

});

export default cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions;