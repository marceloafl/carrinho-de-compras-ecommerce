import style from './IconCart.module.scss';
import {FaShoppingCart} from 'react-icons/fa';

interface Props{
    number: number,
}

function IconCart({number}: Props){
    return (
        <a href="#" className={style['icon--shopping-cart']}>
            <FaShoppingCart />
            <div className={style['shopping-cart-counter']}>{number}</div>
        </a>
    )
}

export default IconCart;