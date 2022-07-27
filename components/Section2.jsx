import style from './Section2.module.scss';

const Section = props => {
    
    return <>
        <div className={style["section2"]}>{props.children}</div>
    </>
};

export default Section;
