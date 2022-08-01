import styles from './Banner.module.scss';
import {useState, useLayoutEffect, useRef, useImperativeHandle, forwardRef} from 'react';

let running = false;
let Banner = (props, ref) => {
    const banner = useRef(null);
    const [anima, setAnima] = useState(null);
    useLayoutEffect(() => {
        setAnima({
            position: 'fixed',
        });
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 40 || e.which === 40) {
                hide();
            }
        });
        banner.current.addEventListener('mousewheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                hide();
            }
        });
    }, []);

    useImperativeHandle(ref, () => ({
        show() {
            if (running) {
                return;
            }
            const scrollTop = getScrollTop();
            running = true;
            setAnima({
                position: 'fixed',
                display: 'block',
                transform: `scale(0.5) translateY(${-200-scrollTop}px)`,
                opacity: 0,
            });
            setTimeout(() => {
                setAnima({
                    position: 'fixed',
                    display: 'block',
                });
                running = false;
            });
        }
    }));

    function hide() {
        if (running) {
            return;
        }
        running = true;
        const scrollTop = getScrollTop();
        setAnima({
            position: 'fixed',
            transform: `scale(0.5) translateY(${-scrollTop*1.55}px)`,
            opacity: 0,
        });
        setTimeout(() => {
            setAnima({
                display: 'none',
                position: 'fixed',
                transform: `scale(0.5) translateY(${-scrollTop*1.55}px)`,
                opacity: 0,
            });
            running = false;
        }, 500);
    }

    function getScrollTop() {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        return scrollTop;
    }
    return <>
        <div className={styles["banner"] + ' ' + props.className} style={anima} onClick={hide} ref={banner}>{props.children}</div>
    </>
}

Banner = forwardRef(Banner);

export default Banner;
