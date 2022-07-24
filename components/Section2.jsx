import style from './Section2.module.scss';
import {useState, useEffect} from 'react';

export default props => {
    
    return <>
        <div className={style["section2"]}>{props.children}</div>
    </>
}