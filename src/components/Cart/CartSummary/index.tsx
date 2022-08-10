import BuyButton from '../../Buttons/BuyButton';
import SecondaryButton from '../../Buttons/SecondaryButton';
import DiscountCoupon from '../../DiscountCoupon';
import style from './CartSummary.module.scss';
import SummaryProducts from './SummaryProducts';
import SummaryShipping from './SummaryShipping';
import SummaryTotal from './SummaryTotal';

function CartSummary(){
    return (
        <div className={style['cart-sumary__wrapper']}>
            <h3>Resumo do Pedido</h3>
            <SummaryProducts />
            <SummaryShipping />
            <div className={style['summary-total-price']}>
                <SummaryTotal />
            </div>
            <BuyButton>Comprar</BuyButton>
            <SecondaryButton>Escolher mais produtos</SecondaryButton>
            <DiscountCoupon />
        </div>
    )
}

export default CartSummary;