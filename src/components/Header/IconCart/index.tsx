import style from './IconCart.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

function IconCart(){
    return (
        <a className={style['icon--shopping-cart']}>
            <FaShoppingCart />
            <div className={style['shopping-cart-counter']}>1</div>
        </a>
    )
}

export default IconCart;