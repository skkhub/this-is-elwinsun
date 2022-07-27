import style from './Section3.module.scss';

const Section = props => {
    
    return <>
        <div className={style["section3"]} id="section3">
            <div className={style["line"]}></div>
            <div className={style["avatar"]}><img src="/avatar.jpg" /></div>
            <h3 className={style['name']}>Elwin Sun</h3>
            <section className={style['section']}>
                <p>我2014年毕业于北京一所普通大学，之后靠着热情转战互联网，从事前端开发。呆过创业公司，也呆过大公司；开发过pc端、移动端页面，也做过小程序、node服务。</p>
                <p>作为一个普通上班族，本以为生活会这样平静下去，不曾想互联网的海浪这么快就席卷而来。因为业务线收缩，公司大幅缩减成本，作为众多被缩减对象之一，我被毕业了。</p>
                <p>今年找工作太难了，各大公司都在勒紧裤腰带，HC更是少的可怜，还有大量的同学不断被毕业。没办法，经济周期走到下坡阶段，国家政策也不利好，大环境如此，作为普通人，只能认清现实，接受现状，在大风大浪中，尽自己的努力，保持平衡，不被生活的海浪掀翻。</p>
                <p style={{textAlign: 'right'}}>2022.7.24</p>
            </section>
        </div>
    </>
}

export default Section;
