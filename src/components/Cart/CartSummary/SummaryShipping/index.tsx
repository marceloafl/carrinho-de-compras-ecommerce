import style from './SummaryShipping.module.scss';

interface Props {
    shipping: number,
    partialTotal: number,
    minimumValue: number,
    maskNumber(number: number): string
}

function SummaryShipping({shipping, partialTotal, minimumValue, maskNumber}: Props){

    function calculateFreeShipping(partial: number, minimum: number){
        return maskNumber(minimum - partial);
    }

    return (
        <>
            <div className={style['summary-shipping']}>
                <h4>Frete</h4>
                <p>{maskNumber(shipping)}</p>
            </div>
            {partialTotal < minimumValue ?
                <p className={style['summary-shipping--free']}>
                    Faltam<span>{` ${calculateFreeShipping(partialTotal, minimumValue)} `}</span>reais pra você ter frete grátis.
                </p> : 
                <p className={style['summary-shipping--free']}>
                    Parabéns, você ganhou frete grátis!
                </p>}
        </>
    )
}

export default SummaryShipping;