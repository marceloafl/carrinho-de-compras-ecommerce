import React from "react";
import CartTitle from "./CartTitle";
import style from './CartDetails.module.scss';
import CartContent from "./CartContent";

class Cart extends React.Component {
    render() {
        return (
            <div className={style['cart-wrapper']}>
                <CartTitle>
                    Meu carrinho
                </CartTitle>
                <CartContent />
            </div>
        )
    }
}

export default Cart;