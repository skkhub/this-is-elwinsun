import {useRef} from 'react';
import Nav from '../components/Nav';
// import Wall from '../components/Wall';
import Banner from '../components/Banner';
import Section2 from '../components/Section2';
import Window from '../components/Window';
import Typewriting from '../components/Typewriting';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

export default function Index() {
    const banner = useRef();
    const showBanner = () => {
        banner.current.show();
    }
    return (<>
        <Banner className="banner" ref={banner}>
            <div className="intro">
            <Typewriting text="你好，我是Elwin Sun，一个普通的前端开发者，这是我的个人网站，欢迎访问！"/>
            </div>
        </Banner>
        <Nav />
        <main className="main">
            <Section2>
                <Window className="window" img="/images/img2.webp" onClick={showBanner}></Window>
            </Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
        </main>
    </>
    )
}