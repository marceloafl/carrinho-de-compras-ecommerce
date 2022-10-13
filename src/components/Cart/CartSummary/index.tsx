import { useEffect, useState } from 'react';
import DiscountCoupon from '../../DiscountCoupon';
import style from './CartSummary.module.scss';
import SummaryProducts from './SummaryProducts';
import SummaryShipping from './SummaryShipping';
import SummaryTotal from './SummaryTotal';
import Button from '../../Button';
import CartCoupon from './CartCoupon';
import {discountCoupon} from '../../../common/utils/discountCoupon';
import { IDiscountCoupon } from '../../../types/discountCoupon';

interface Props{
    totalPrice: number
    totalQuantity: number
}

function CartSummary({totalPrice, totalQuantity}: Props){
    const minimumValue: number = 400;
    const [shippingValue, setShippingValue] = useState<number>(19.9);
    const [finalPrice, setFinalPrice] = useState<number>(0);
    const [couponInUse, setCouponInUse] = useState<IDiscountCoupon>();
    const [discount, setDiscount] = useState<number>();

    function freeShipping(){
        if (totalPrice > minimumValue){
            return setShippingValue(0);
        } else {
            return setShippingValue(19.9);
        }
    }

    function getFinalPrice(){
        discount ? setFinalPrice((totalPrice - discount) + shippingValue) : setFinalPrice(totalPrice + shippingValue);
    }

    function getCouponInUse(coupon?: string): boolean{
        if(coupon){
            const selectedCoupon = discountCoupon.find(element => element.name === coupon);
            setCouponInUse(selectedCoupon);
            return true;
        }
        setCouponInUse(undefined);
        return false;   
    }

    function calculateDiscount(){
        if (couponInUse){
            const multiplier = couponInUse?.value / 100;
            const discontValue = Math.round((totalPrice * multiplier) * 100) / 100;
            return setDiscount(discontValue);
        }
        return setDiscount(0);
    }
    
    useEffect(() => {
        freeShipping();
        getFinalPrice();
        calculateDiscount();
    }, [totalPrice, shippingValue, discount, couponInUse])

    return (
        <div className={style['cart-sumary__wrapper']}>
            <h3>Resumo do Pedido</h3>
            <SummaryProducts
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
            />
            {discount !== 0 &&
                <CartCoupon
                    discount={discount}
                />
            }
            <SummaryShipping
                totalPrice={totalPrice}
                shippingValue={shippingValue}
                minimumValue={minimumValue}
            />
            <div className={style['summary-total-price']}>
                <SummaryTotal
                    finalPrice={finalPrice}
                />
            </div>
            <Button buttonType={'buy'}>Comprar</Button>
            <Button buttonType={'secondary'}>Escolher mais produtos</Button>
            <DiscountCoupon
                getCouponInUse={getCouponInUse}
                couponInUse={couponInUse}
            />
        </div>
    )
}

export default CartSummary;