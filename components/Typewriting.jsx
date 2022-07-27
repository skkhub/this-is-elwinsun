import styles from './Typewriting.module.scss';
import {useState, useEffect} from 'react';

let timer;
const Typewriting = props => {
    const [content, setContent] = useState('');

    useEffect(() => {
        clearInterval(timer);
        const len = props.text.length;
        const cur = 1;
        timer = setInterval(() => {
            if (cur <= len) {
                setContent(props.text.slice(0, cur));
                cur++;
            }
            else {
                clearInterval(timer);
            }
        }, 200);
    }, [props.text]);
    return <>
        <span className={styles['content']}>{content}</span>
    </>
}

export default Typewriting;
