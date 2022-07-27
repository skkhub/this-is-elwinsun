import style from './Window.module.scss';

const Window = props => <>
    <div className={style["window"] + ' ' + props.className}>
        <div className={style['inner']}
            style={{backgroundImage: `url(${props.img})`}}
            onClick={props.onClick}
            >
            {props.children}
        </div>
    </div>
</>

export default Window;
