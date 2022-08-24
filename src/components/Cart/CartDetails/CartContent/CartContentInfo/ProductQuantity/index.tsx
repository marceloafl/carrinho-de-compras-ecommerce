import Counter from './Counter';
import style from './ProductQuantity.module.scss';

interface Props {
    number: number,
    decrement: () => void,
    increment: () => void,
}

function ProductQuantity({number, decrement, increment}: Props){
    return (
        <div className={style.quantity}>
            <Counter
                number={number}
                decrement={decrement}
                increment={increment}
            />
        </div>
    )
}

export default ProductQuantity;