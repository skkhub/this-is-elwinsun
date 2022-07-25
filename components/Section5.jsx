import style from './Section5.module.scss';
import Career from './Career';

export default props => {
    const careers = [
      {
        company: 'Tencnet',
        pic: '/tencent.webp',
        intro: '中国最大互联网公司',
        projects: [
          {name: '微视登录服务重构', comp: <div>微视登录服务重构</div>}
        ]
      },
      {
        company: 'Baidu',
        pic: 'baidu.png',
        intro: '最大中文搜索引擎',
        projects: [
          {name: '封面图片编辑器', comp: <div>封面图片编辑器</div>},
          {name: '认证前端架构重构', comp: <div>封面图片编辑器</div>},
        ]
      },
      {
        company: 'LinkDoc',
        pic: 'linkdoc.png',
        intro: '零氪科技，医疗数据',
        projects: [
          {name: '封面图片编辑器', comp: null}
        ]
      },
      {
        company: '天地在线',
        pic: 'tiandi.png',
        backgroundColor: 'gray',
        intro: '互联网营销公司',
        projects: [
          {name: '封面图片编辑器', comp: null}
        ]
      },
    ]
    return <>
        <div className={style["section5"]} id="section5">
          <h3>我的职业生涯</h3>
          {careers.map(career =>
            <Career career={career} />
          )}
        </div>
    </>
}