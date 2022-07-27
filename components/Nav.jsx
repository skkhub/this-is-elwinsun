import styles from './Nav.module.scss';
import {useEffect} from 'react';

const doms = [];
const Nav = () => {
    useEffect(() => {
        const menu1 = document.getElementById('section3');
        const menu2 = document.getElementById('section4');
        const menu3 = document.getElementById('section5');
        const menu4 = document.getElementById('section6');
        doms.push(menu1, menu2, menu3, menu4);
    }, []);

    const intoView = val => {
        doms[val].scrollIntoView({behavior: 'smooth'});
    }
    return (
        <ul className={styles.nav}>
            <li className={styles['icon']}>=</li>
            <li onClick={intoView.bind(null, 0)}>个人简介</li>
            <li onClick={intoView.bind(null, 1)}>开发技能</li>
            <li onClick={intoView.bind(null, 2)}>职业生涯</li>
            <li onClick={intoView.bind(null, 3)}>联系方式</li>
        </ul>
    )
};

export default Nav;
