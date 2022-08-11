import style from './SummaryProducts.module.scss';

function SummaryProducts(){
    return (
        <div className={style['summary-products']}>
            <h4>Produtos (
                <span>1</span>
                <span> item</span>)
            </h4>
            <h4>R$
                <span> 179,90</span>
            </h4>
        </div>
    )
}

export default SummaryProducts;