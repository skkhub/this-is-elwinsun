import style from './Section2.module.scss';

export default props => {
    
    return <>
        <div className={style["section2"]}>{props.children}</div>
    </>
}