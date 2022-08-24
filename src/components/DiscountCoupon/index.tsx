import Button from '../Button'
import style from './DiscountCoupon.module.scss';

function DiscountCoupon(){
    return (
        <div className={style['discount-coupon']}>
             <input
                type="text"
                placeholder="Cupom de desconto"
                name="discountCoupon"
            />
            <Button buttonType={'main'}>Aplicar</Button>
        </div>
    )
}

export default DiscountCoupon;