import style from './SummaryTotal.module.scss';

interface Props{
    number: number,
    total: number,
    maskNumber: (number: number) => string
}

function SummaryTotal({number, total, maskNumber}: Props){
    return (
        <div className={style['summary-total']}>
            <h4>Subtotal</h4>
            <p>
                <span>{` ${maskNumber(total)}`}</span>
            </p>
        </div>
    )
}

export default SummaryTotal;