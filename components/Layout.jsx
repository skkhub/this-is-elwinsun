import style from './Layout.module.scss';

const Layout = props => <>
    <div className={style["background"]}></div>
    <main className={style["main"]}>{props.children}</main>
</>;

export default Layout;
