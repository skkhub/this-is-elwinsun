import style from './Section5.module.scss';
import Career from './Career';

const Section = props => {
    const careers = [
      {
        company: 'Tencnet',
        pic: '/tencent.webp',
        intro: '中国最大互联网公司',
        projects: [
          {name: '微视登录服务重构', desc: 'OAuth2.0的一次实现'},
          {name: '弹窗组件', desc: '够通用，可配置'},
        ]
      },
      {
        company: 'Baidu',
        pic: 'baidu.png',
        intro: '最大中文搜索引擎',
        projects: [
          {name: '封面图片编辑器', pic: '/project1.png', desc: '百家号在使用的', link: '/projects/pic-editor'},
          {name: '认证前端架构重构', desc: '重构代码，提升开发效率'},
          {name: '百度智能认证小程序', pic: '/renzheng.jpg', desc: ''},
          {name: '百度保障商家端小程序', pic: '/baozhang.jpg'},
        ]
      },
      {
        company: 'LinkDoc',
        pic: 'linkdoc.png',
        intro: '零氪科技，医疗数据',
        projects: [
          {name: '患友之家论坛', desc: '发动态、点赞、评论'},
          {name: '医患咨询付费聊天页', desc: '类似微信聊天的web端IM页面'},
          {name: '问卷平台', desc: '低代码平台的一个实现'},
        ]
      },
      {
        company: '天地在线',
        pic: 'tiandi.png',
        backgroundColor: 'gray',
        intro: '互联网营销公司',
        projects: [
        ]
      },
    ]
    return <>
        <div className={style["section5"]} id="section5">
          <h3>我的职业生涯</h3>
          {careers.map(career =>
            <Career key={career.company} career={career} />
          )}
        </div>
    </>
};

export default Section;
