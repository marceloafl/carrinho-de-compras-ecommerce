import { useEffect, useState } from 'react';
import Button from '../Button'
import style from './DiscountCoupon.module.scss';
import {discountCoupon} from '../../common/utils/discountCoupon';
import { IDiscountCoupon } from '../../types/discountCoupon';
import {FaTrashAlt} from 'react-icons/fa';

interface Props {
    getCouponInUse: (coupon?: string) => void,
    couponInUse: IDiscountCoupon | undefined
}

function DiscountCoupon({getCouponInUse, couponInUse}: Props){
    const [writtenCoupon, setWrittenCoupon] = useState<string>('');

    function checkCoupon(writtenCoupon: string): boolean{
        let coupons: string[] = discountCoupon.map(coupon => coupon.name);
        if(coupons.includes(writtenCoupon)){
            return true;
        }
        return false;
    }

    useEffect(() => {
        checkCoupon(writtenCoupon);
    }, [writtenCoupon])

    return (
        <>{couponInUse ?
            <div className={style['coupon-in-use__wrapper']}>
                <div className={style['coupon-in-use']}>
                    <p>Cupom<span>{` ${couponInUse?.name} `}</span>aplicado.</p>
                    <FaTrashAlt onClick={() => getCouponInUse()}/>
                </div>
                <p className={style['coupon-in-use__legal']}>*Desconto não cumulativo com outras promoções.</p>
            </div> :
             <div className={style['discount-coupon']}>
             <input
                 type="text"
                 placeholder="Cupom de desconto"
                 name="discountCoupon"
                 value={writtenCoupon}
                 onChange={event => setWrittenCoupon(event.target.value)}
                 
                 />
             <Button
                 buttonType={'main'}
                 onClick={() => checkCoupon(writtenCoupon) && getCouponInUse(writtenCoupon)}
                 >
                 Aplicar
             </Button>
         </div>
        }</>
    )
}

export default DiscountCoupon;