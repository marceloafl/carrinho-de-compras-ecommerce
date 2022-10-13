import style from './IconCart.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

interface Props{
    totalQuantity: number
}

function IconCart({totalQuantity}: Props){
    return (
        <div className={style['icon--shopping-cart']}>
            <FaShoppingCart />
            <div className={style['shopping-cart-counter']}>{totalQuantity}</div>
        </div>
    )
}

export default IconCart;