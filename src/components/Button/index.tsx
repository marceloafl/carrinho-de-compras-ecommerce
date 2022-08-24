import { ReactNode } from 'react';
import style from './Button.module.scss';

interface Props{
    children: ReactNode,
    buttonType: string,
}

function Button({children, buttonType}: Props){
    return (
        <button className={`${style['button']} ${style[`${buttonType}-button`]}`}>
            {children}
        </button>
    )
}

export default Button;