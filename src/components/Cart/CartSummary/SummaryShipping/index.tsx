import style from './SummaryShipping.module.scss';
import {maskNumber} from '../../../../common/utils/maskNumber';

interface Props {
    totalPrice: number,
    shippingValue: number,
    minimumValue: number,
}

function SummaryShipping({totalPrice, shippingValue, minimumValue}: Props){

    function calculateFreeShipping(partial: number, minimum: number){
        return maskNumber(minimum - partial);
    };    

    return (
        <>
            <div className={style['summary-shipping']}>
                <h4>Frete</h4>
                <p>{maskNumber(shippingValue)}</p>
            </div>
            {shippingValue > 0 ?
                <p className={style['summary-shipping--free']}>
                    Faltam<span>{` ${calculateFreeShipping(totalPrice, minimumValue)} `}</span>reais pra você ter frete grátis.
                </p> : 
                <p className={style['summary-shipping--free']}>
                    Parabéns, você ganhou frete grátis!
                </p>}
        </>
    )
}

export default SummaryShipping;