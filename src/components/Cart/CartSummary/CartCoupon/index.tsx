import style from './CartCoupon.module.scss';

function CartCoupon(){
    return (
        <div className={style['summary-coupon']}>
            <h4>Desconto</h4>
            <p>R$ 0,00</p>
        </div>
    )
}

export default CartCoupon;