import style from './SummaryTotal.module.scss';

function SummaryTotal(){
    return (
        <div className={style['summary-total']}>
            <h4>Subtotal</h4>
            <p>R$
                <span> 29,90</span>
            </p>
        </div>
    )
}

export default SummaryTotal;