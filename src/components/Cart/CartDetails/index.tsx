import React from "react";
import SectionTitle from "../../SectionTitle";
import style from './CartDetails.module.scss';
import CartContent from "./CartContent";
import { IProduct } from "../../../types/product";
import CartContentTitle from "./CartContent/CartContentTitle";

interface Props {
    number: number,
    products: IProduct[] | undefined,
    decrement: () => void,
    increment: () => void,
}

function CartDetails({number, products = [], decrement, increment, }: Props){
    return(
        <div className={style['cart-wrapper']}>
            <SectionTitle>
                Meu carrinho
            </SectionTitle>
            <CartContentTitle />
            <CartContent
                number={number}
                decrement={decrement}
                increment={increment}
                products={products}
            />
        </div>
    )
}

export default CartDetails;