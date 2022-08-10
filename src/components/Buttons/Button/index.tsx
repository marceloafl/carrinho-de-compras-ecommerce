import { ReactNode } from 'react';
import style from './Button.module.scss';

function Button(props: {children: ReactNode}){
    return (
        <button className={style['button']}>
            {props.children}
        </button>
    )
}

export default Button;