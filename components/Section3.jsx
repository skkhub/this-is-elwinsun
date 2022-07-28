import styles from './Section3.module.scss';

const Section = props => {
    
    return <>
        <div className={styles["section3"]} id="section3">
            <div className={styles["line"]}></div>
            <div className={styles["avatar"]}><img src="/images/avatar.jpg" /></div>
            <h3 className={styles['name']}>Elwin Sun</h3>
            <section className={styles['section'] + ' ' + 'jinghong'}>
                <p>不跳出温水，就在温水中熟透。</p>
                <p>所有荒废的年华，终将受到惩罚；一切付出的努力，定会收获回报。</p>
                <p>世界是共有的，是受人支配的，别人希望你怎样不重要，问问自己希望怎样。</p>
                <p>风雨中，只有那些有分量的人才不会被击倒。</p>
            </section>

            <section className={styles['section']}>
                <p>我2014年毕业于北京一所普通大学，之后靠着热情转战互联网，从事前端开发。呆过创业公司，也呆过大公司；开发过pc端、移动端页面，也做过小程序、node服务。</p>
                <p>开发本站的目的，主要是记录下自己做过的项目，沉淀起来。</p>
                <p>生活的海浪从未停息。作为普通人，在大风大浪中，尽自己的努力，不疯不浪，积极向上。</p>
                <p style={{textAlign: 'right'}}>2022.7.24</p>
            </section>
        </div>
    </>
}

export default Section;
