import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import style from './CartContentInfo.module.scss';

interface Props {
    number: number,
    price: number,
    decrement: () => void,
    increment: () => void,
}

function CartContentInfo({number, price, decrement, increment}: Props){
    return (
        <div className={style['info__wrapper']}>
            <ProductImage />
            <ProductDescription />
            <ProductQuantity
                number={number}
                decrement={decrement}
                increment={increment}
            />
            <ProductPrice price={price}/>
        </div>
    )
}

export default CartContentInfo;