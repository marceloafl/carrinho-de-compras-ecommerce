import { useState } from 'react';
import Counter from './Counter';
import style from './ProductQuantity.module.scss';

interface Props {
    number: number,
    quantity: number,
    increment: () => void,
    decrement: () => void,
}

function ProductQuantity({number, quantity, increment, decrement}: Props){
    

    return (
        <div className={style.quantity}>
            <Counter
                quantity={quantity}
                decrement={decrement}
                increment={increment}
            />
        </div>
    )
}

export default ProductQuantity;