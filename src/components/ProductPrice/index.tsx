import style from './ProductPrice.module.scss';
import { maskNumber } from '../../common/utils/maskNumber';
import { useState } from 'react';

interface Props{
    price: number,
}

function ProductPrice({price}: Props){
    return (
        <div className={style.price}>
            {<p>{maskNumber(price)}</p>}
        </div>
    )
}

export default ProductPrice;