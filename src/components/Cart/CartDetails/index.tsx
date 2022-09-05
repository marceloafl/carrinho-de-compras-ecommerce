import React from "react";
import SectionTitle from "../../SectionTitle";
import style from './CartDetails.module.scss';
import CartContent from "./CartContent";
import { IProduct } from "../../../types/product";
import CartContentTitle from "./CartContent/CartContentTitle";

interface Props {
    products: IProduct[] | undefined,
    removeProduct: (product: IProduct) => void,
    getQuantity: (product: IProduct, quantity: number) => void,
}

function CartDetails({products = [], removeProduct, getQuantity}: Props){
    return(
        <div className={style['cart-wrapper']}>
            <SectionTitle>
                Meu carrinho
            </SectionTitle>
            <CartContentTitle />
            <CartContent
                products={products}
                removeProduct={removeProduct}
                getQuantity={getQuantity}
            />
        </div>
    )
}

export default CartDetails;