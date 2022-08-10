import ProductImage from './CartContentInfo/ProductImage';
import style from './CartContent.module.scss';
import CartContentInfo from './CartContentInfo';
import CartContentTitle from './CartContentTitle';

function CartContent(){
    return (
        <div className={style['cart-content-wrapper']}>
            <CartContentTitle />
            <CartContentInfo />
        </div>
    )
}

export default CartContent;