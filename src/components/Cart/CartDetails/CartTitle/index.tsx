import React, { ReactNode } from "react";
import style from './CartTitle.module.scss';

function CartTitle(props: {children: ReactNode}){
    return (
        <div className={style['title-wrapper']}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default CartTitle;