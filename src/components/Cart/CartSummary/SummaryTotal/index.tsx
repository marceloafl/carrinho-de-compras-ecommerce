import style from './SummaryTotal.module.scss';
import {maskNumber} from '../../../../common/utils/maskNumber';

interface Props{
    finalPrice: number
}

function SummaryTotal({finalPrice}: Props){
    return (
        <div className={style['summary-total']}>
            <h4>Subtotal</h4>
            <p>
                <span>{maskNumber(finalPrice)}</span>
            </p>
        </div>
    )
}

export default SummaryTotal;