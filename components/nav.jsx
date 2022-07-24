import style from './Nav.module.scss';
import {useEffect} from 'react';

export default function Nav() {
    const doms = [];
    useEffect(() => {
        const menu1 = document.getElementById('section3');
        const menu2 = document.getElementById('section4');
        doms.push(menu1, menu2);
    }, []);

    const intoView = val => {
        doms[val].scrollIntoView({behavior: 'smooth'});
    }
    return (
        <ul className={style.nav}>
            <li className={style['icon']}>=</li>
            <li onClick={intoView.bind(null, 0)}>个人简介</li>
            <li onClick={intoView.bind(null, 1)}>开发技能</li>
            <li>职业生涯</li>
            <li>联系方式</li>
        </ul>
    )
}