import { ReactNode } from 'react';
import style from './BuyButton.module.scss';

function BuyButton(props: {children: ReactNode}){
    return (
        <button className={style['buy-button']}>
            {props.children}
        </button>
    )
}

export default BuyButton;