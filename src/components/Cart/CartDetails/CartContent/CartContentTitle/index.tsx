import { ReactNode } from "react";
import style from './CartContentTitle.module.scss';

function CartContentTitle(){
    return (
        <div className={style['title__wrapper']}>
            <h3 className={style['title--product']}>Produto</h3>
            <h3 className={style['title--quantity']}>Quantidade</h3>
            <h3 className={style['title--price']}>Preço</h3>
        </div>
    )
}

export default CartContentTitle;