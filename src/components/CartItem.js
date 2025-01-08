import React from 'react'
import { PlusButton,MinusButton } from '../HeroIcons'
import { useDispatch } from 'react-redux'
import { increase,decrease, removeItem } from '../features/cart/CartSlice'

const CartItem = ({ id,img,title,price,amount }) => {

        const dispatch = useDispatch();

    return (

    <article className="cart-item">
        <img src={img} alt="商品の画像" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}円</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>削除</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() => dispatch(increase(id))}>
                <PlusButton />
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={() => {
                // もしアイテム数が１の時は削除する
                if(amount === 1){
                    dispatch(removeItem(id));
                    return;
                }
                //それ以外の場合は１減らす
                dispatch(decrease(id));
                
            }}>
                <MinusButton />
            </button>
        </div>
    </article>
  )
}

export default CartItem;