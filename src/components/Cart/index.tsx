import style from './Cart.module.scss';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';
import {IProduct} from '../../types/product';
import { useState } from 'react';

interface Props{
    products: IProduct[],
    number: number,
    decrement: () => void,
    increment: () => void,
}

function Cart({products, number, decrement, increment}: Props){
    const [price, setPrice] = useState(179.9);
    return (
        <div className={style.main}>
                <CartDetails
                    number={number}
                    decrement={decrement}
                    increment={increment}
                    products={products}
                    price={price}
                />
                <CartSummary
                    number={number}
                    price={price}
                />
        </div>
    )
}

export default Cart;