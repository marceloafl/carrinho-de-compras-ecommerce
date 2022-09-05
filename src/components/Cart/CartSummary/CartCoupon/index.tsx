import style from './CartCoupon.module.scss';
import {maskNumber} from '../../../../common/utils/maskNumber';

interface Props {
    discount: number | undefined
}

function CartCoupon({discount}: Props){ 
    return (
        <div className={style['summary-coupon']}>
            <h4>Desconto</h4>
            {
                <p className={style['discount-value']}>{discount ? `${maskNumber(discount)}` : `R$ 0,00`}</p>
            }
        </div>
    )
}

export default CartCoupon;