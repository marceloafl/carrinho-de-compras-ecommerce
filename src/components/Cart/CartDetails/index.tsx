import React from "react";
import CartTitle from "./CartTitle";
import style from './CartDetails.module.scss';
import CartContent from "./CartContent";
import { IProduct } from "../../../types/product";

interface Props {
    number: number,
    products: IProduct[],
    price: number,
    decrement: () => void,
    increment: () => void,
}

function CartDetails({number, products, price, decrement, increment, }: Props){
    return(
        <div className={style['cart-wrapper']}>
                <CartTitle>
                    Meu carrinho
                </CartTitle>
                <CartContent
                    number={number}
                    price={price}
                    decrement={decrement}
                    increment={increment}
                />
            </div>
    )
}

export default CartDetails;