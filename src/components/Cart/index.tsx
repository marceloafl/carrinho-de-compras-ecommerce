import style from './Cart.module.scss';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';

function Cart(){
    return (
        <div className={style.main}>
                <CartDetails />
                <CartSummary />
        </div>
    )
}

export default Cart;