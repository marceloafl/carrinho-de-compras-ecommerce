import { useState } from 'react';
import style from './Counter.module.scss';

function Counter(){
    const [number, setNumber] = useState(0);

    function increment(){
        return setNumber(number + 1)
    }

    function decrement(){
        if(number > 1){
            return setNumber(number - 1)
        }
        return number;
    }

    return (
        <div className={style['counter']}>
            <button onClick={decrement}>-</button>
            <p>{number}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;