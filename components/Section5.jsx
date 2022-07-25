import style from './Section5.module.scss';
import Career from './Career';

export default props => {
    const careers = [
      {
        company: 'Tencnet',
        intro: '2021年6月入职腾讯，主要负责微视相关的前端业务开发',
        children: [
          {name: '微视登录服务重构', comp: <div>微视登录服务重构</div>}
        ]
      },
      {
        company: 'Baidu',
        intro: '2018年入职百度，负责过百度认证、百度保障、百家号相关的前端业务开发',
        children: [
          {name: '封面图片编辑器', comp: <div>封面图片编辑器</div>}
        ]
      }
    ]
    return <>
        <div className={style["section5"]} id="section5">
          <h3>我的职业生涯</h3>
          {careers.map(career => 
            <Career />
          )}
        </div>
    </>
}