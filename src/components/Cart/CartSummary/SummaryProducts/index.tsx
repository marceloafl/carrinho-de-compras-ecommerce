import style from './SummaryProducts.module.scss';
import {maskNumber} from '../../../../common/utils/maskNumber';

interface Props {
    totalPrice: number,
    totalQuantity: number
}

function SummaryProducts({totalPrice, totalQuantity}: Props){
    return (
        <div className={style['summary-products']}>
            <h4>Produtos 
                <span>{` (${totalQuantity}`}</span>
                {totalQuantity > 1 && <span> {`itens)`}</span>}
                {totalQuantity === 1 && <span> {`item)`}</span>}
            </h4>
            <h4>
                <span>{maskNumber(totalPrice)}</span>
            </h4>
        </div>
    )
}

export default SummaryProducts;