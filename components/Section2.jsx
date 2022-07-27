import styles from './Section2.module.scss';

const Section = props => {
    
    return <>
        <div className={styles["section2"]}>{props.children}</div>
    </>
};

export default Section;
