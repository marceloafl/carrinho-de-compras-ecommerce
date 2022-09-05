import { IProduct } from '../../../../../../../types/product';
import style from './Counter.module.scss';

interface Props {
    product: IProduct,
    increment: () => void,
    decrement: () => void
}

function Counter({product, increment, decrement}: Props){
    return (
        <div className={style['counter']}>
            <button onClick={decrement}>-</button>
            <p>{product.quantity}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;