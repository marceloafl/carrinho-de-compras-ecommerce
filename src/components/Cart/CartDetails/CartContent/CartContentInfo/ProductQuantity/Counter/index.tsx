import style from './Counter.module.scss';

interface Props {
    number: number,
    decrement: () => void,
    increment: () => void,
}

function Counter({number, decrement, increment}: Props){
    return (
        <div className={style['counter']}>
            <button onClick={decrement}>-</button>
            <p>{number}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;