import style from './Counter.module.scss';

interface Props {
    quantity: number,
    decrement: () => void,
    increment: () => void,
}

function Counter({quantity, decrement, increment}: Props){
    return (
        <div className={style['counter']}>
            <button onClick={decrement}>-</button>
            <p>{quantity}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;