import style from './Typewriting.module.scss';
import {useState, useRef, useEffect} from 'react';

export default props => {
    const [content, setContent] = useState('');
    let timer;

    useEffect(() => {
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
        <span className={style['content']}>{content}</span>
    </>
}