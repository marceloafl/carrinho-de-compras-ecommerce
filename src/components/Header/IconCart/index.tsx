import style from './IconCart.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

interface Props{
    totalQuantity: number
}

function IconCart({totalQuantity}: Props){
    return (
        <a href="#" className={style['icon--shopping-cart']}>
            <FaShoppingCart />
            <div className={style['shopping-cart-counter']}>{totalQuantity}</div>
        </a>
    )
}

export default IconCart;