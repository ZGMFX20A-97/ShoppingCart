

import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';


function App() {

  const dispatch = useDispatch();
  const { cartItems } = useSelector( state => state.cart);
  const { isOpen } = useSelector( state => state.modal);
  //アイテムの内容が変化するたびに合計金額と合計アイテム数を計算する
  useEffect(() => {
    dispatch(calculateTotals());

  },[cartItems])

  
  return (
    <main>
      {/* もしisOpenがtrueの場合モーダルコンポーネントを表示する */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
