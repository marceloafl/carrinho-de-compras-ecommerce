import { ReactNode } from 'react';
import style from './Button.module.scss';

interface Props{
    children: ReactNode,
    buttonType: string,
    onClick?: () => void,
}

function Button({children, buttonType, onClick}: Props){
    return (
        <button
            className={`${style['button']} ${style[`${buttonType}-button`]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;