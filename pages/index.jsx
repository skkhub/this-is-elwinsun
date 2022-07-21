import Nav from '../components/nav';
export default function Index() {
    return (
        <main className="main">
            <article>Hello~<br/>
            My name is Elwin Sun. This is my home page.
            </article>
            <div><img src="" alt="avatar" /></div>
            <nav>基本信息</nav>
            <nav>开发技能</nav>
            <nav>职业生涯</nav>
            <nav>特色项目</nav>
            <nav>联系方式</nav>
            <Nav></Nav>
        </main>
    )
}