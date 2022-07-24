import {useRef} from 'react';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Section2 from '../components/Section2';
import Window from '../components/Window';
import Typewriting from '../components/Typewriting';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

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
        <main className="main">
            <Section2>
                <Window className="window" img="/img2.webp" onClick={showBanner}></Window>
                <Nav />
            </Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Layout>
                <article>Hello~<br/>
                My name is Elwin Sun. This is my home page.
                </article>
                <div><img src="" alt="avatar" /></div>
                <nav>基本信息</nav>
                <nav>开发技能</nav>
                <nav>职业生涯</nav>
                <nav>特色项目</nav>
                <nav>联系方式</nav>
                <nav>blog</nav>
            </Layout>
        </main>
    </>
    )
}