import React, { ReactNode } from "react";
import style from './Menu.module.scss';
import {FaAngleDown} from 'react-icons/fa';

function Menu(props: {children: ReactNode}){
    return (
        <div className={style['menu__wrapper']}>
            <p>{props.children}</p>
            <FaAngleDown />
        </div>
    )
}

export default Menu;