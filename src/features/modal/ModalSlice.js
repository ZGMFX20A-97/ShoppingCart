import { createSlice } from "@reduxjs/toolkit";



//モーダルの状態を設定する
const initialState = {
    //デフォルトでは活性化していない状態
    isOpen: false,
    
};

const modalSlice = createSlice(
    {
        name: "modal",
        initialState,
        reducers:{
            //モーダルを出すアクションクリエーター
            openModal: state => {
                state.isOpen = true;
            },
            //モーダルを閉じるアクションクリエーター
            closeModal: state => {
                state.isOpen = false;
            }
        }
    }
)

export const {openModal,closeModal} = modalSlice.actions;
export default modalSlice.reducer;