import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { openModal } from '../features/modal/ModalSlice';

const CartContainer = () => {

    //アクションクリエーターを発信するdispatcherを用意する
    const dispatch = useDispatch();
    //storeからアイテム数、アイテムデータ、合計金額を取得する
    const { amount,cartItems,total } = useSelector( state => state.cart)

    //もし買い物カゴ内に何もない場合下記を表示する
    if(amount<1){

        return (
            <section className="cart">
                <header>
                    <h2>買い物カゴ</h2>
                    <h4 className="empty-cart"> 何も入っていません・・・😿</h4>
                </header>
            
            </section>
            
          );
    }

    return (
        <section>
            <header>
                <h2>買い物カゴ</h2>
            </header>

            <div>{cartItems.map( item => {
                return (
                    <CartItem key={item.id} {...item}/>
                )
            })}
            </div>

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                    合計<span>{total}円</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(openModal())}>クリア</button>
            </footer>
        </section>
    )
  
}

export default CartContainer