import style from './CartContent.module.scss';
import CartContentInfo from './CartContentInfo';
import CartContentTitle from './CartContentTitle';

interface Props {
    number: number,
    price: number,
    decrement: () => void,
    increment: () => void,
}

function CartContent({number, price, decrement, increment}: Props){
    return (
        <div className={style['cart-content-wrapper']}>
            <CartContentTitle />
            <CartContentInfo
                number={number}
                price={price}
                decrement={decrement}
                increment={increment}
            />
        </div>
    )
}

export default CartContent;