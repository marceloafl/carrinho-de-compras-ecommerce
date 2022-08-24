import { useEffect, useState } from 'react';
import DiscountCoupon from '../../DiscountCoupon';
import style from './CartSummary.module.scss';
import SummaryProducts from './SummaryProducts';
import SummaryShipping from './SummaryShipping';
import SummaryTotal from './SummaryTotal';
import { maskNumber } from '../../../common/utils/maskNumber'
import Button from '../../Button';

interface Props{
    number: number,
    price: number,
}

function CartSummary({number, price}: Props){
    const [partialTotal, setPartialTotal] = useState(price);
    const [shipping, setShipping] = useState(19.9);
    const [total, setTotal] = useState(price + shipping);

    useEffect(() => {
        calculatesPartialTotal(Number(price), number);
    }, [number]);
    
    useEffect(() => {
        calculateShipping(partialTotal);
        calculatesTotal(partialTotal, shipping);
    }, [partialTotal, shipping]);

    function calculatesPartialTotal(price: number, number:number){
        let partial = (price * number);
        setPartialTotal(partial);
    }

    function calculateShipping(partialTotal: number){
        if (partialTotal > 400){
            return setShipping(0)
        }
        return setShipping(19.9)
    }

    function calculatesTotal(partialTotal: number, shipping: number){
        const total = partialTotal + shipping
        return setTotal(total);
    }

    return (
        <div className={style['cart-sumary__wrapper']}>
            <h3>Resumo do Pedido</h3>
            <SummaryProducts
                number={number}
                partialTotal={partialTotal}
                maskNumber={maskNumber}
            />
            <SummaryShipping
                shipping={shipping}
                partialTotal={partialTotal}
                minimumValue={400}
                maskNumber={maskNumber}
            />
            <div className={style['summary-total-price']}>
                <SummaryTotal
                    number={number}
                    maskNumber={maskNumber}
                    total={total}
                />
            </div>
            <Button buttonType={'buy'}>Comprar</Button>
            <Button buttonType={'secondary'}>Escolher mais produtos</Button>
            <DiscountCoupon />
        </div>
    )
}

export default CartSummary;