import styles from './Window.module.scss';

const Window = props => <>
    <div className={styles["window"] + ' ' + props.className}>
        <div className={styles['inner']}
            style={{backgroundImage: `url(${props.img})`}}
            onClick={props.onClick}
            >
            {props.children}
        </div>
    </div>
</>

export default Window;
