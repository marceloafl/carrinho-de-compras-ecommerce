import React from "react";
import SectionTitle from "../../SectionTitle";
import style from './CartDetails.module.scss';
import CartContent from "./CartContent";
import { IProduct } from "../../../types/product";
import CartContentTitle from "./CartContent/CartContentTitle";

interface Props {
    number: number,
    products: IProduct[] | undefined,
    incrementTotal: () => void,
    decrementTotal: () => void,
    removeProduct: (product: IProduct) => void,
}

function CartDetails({number, products = [], incrementTotal, decrementTotal, removeProduct}: Props){
    return(
        <div className={style['cart-wrapper']}>
            <SectionTitle>
                Meu carrinho
            </SectionTitle>
            <CartContentTitle />
            <CartContent
                number={number}
                products={products}
                incrementTotal={incrementTotal}
                decrementTotal={decrementTotal}
                removeProduct={removeProduct}
            />
        </div>
    )
}

export default CartDetails;