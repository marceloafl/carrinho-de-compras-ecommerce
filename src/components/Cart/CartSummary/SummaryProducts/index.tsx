import style from './SummaryProducts.module.scss';

interface Props {
    number: number,
    partialTotal: number,
    maskNumber(number: number): string
}

function SummaryProducts({number, partialTotal, maskNumber}: Props){
    return (
        <div className={style['summary-products']}>
            <h4>Produtos 
                <span>{` (${number}`}</span>
                {number > 1 && <span> {`itens)`}</span>}
                {number === 1 && <span> {`item)`}</span>}
            </h4>
            <h4>
                <span>{maskNumber(partialTotal)}</span>
            </h4>
        </div>
    )
}

export default SummaryProducts;