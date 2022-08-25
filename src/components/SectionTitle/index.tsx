import React, { ReactNode } from "react";
import style from './SectionTitle.module.scss';

function SectionTitle(props: {children: ReactNode}){
    return (
        <div className={style['title-wrapper']}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default SectionTitle;