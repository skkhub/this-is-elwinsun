import style from './Layout.module.scss';

export default props => <>
    <div className={style["background"]}></div>
    <main className={style["main"]}>{props.children}</main>
</>