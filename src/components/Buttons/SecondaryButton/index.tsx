import { ReactNode } from 'react';
import style from './SecondaryButton.module.scss';

function SecondaryButton(props: {children: ReactNode}){
    return (
        <button className={style['button']}>
            {props.children}
        </button>
    )
}

export default SecondaryButton;