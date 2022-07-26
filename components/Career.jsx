import style from './Career.module.scss';
import { useRouter } from 'next/router';
export default ({career}) => {
  const styleObj = {
    backgroundImage: `url(${career.pic})`,
    backgroundColor: career.backgroundColor,
  }
  
  const router = useRouter();
  const jumpToProject = link => {
    if (link) {
      router.push(link);
    }
  }
  return <div className={style['career']}>
    <div className={style['pic']} style={styleObj} />
    <div className={style['intro']}>{career.intro}</div>
    <ul className={style['projects']}>
      {career.projects.map(project =>
        <li key={project.name}
          style={{cursor: project.link ? 'pointer' : ''}}
          onClick={jumpToProject.bind(null, project.link)}>
          <div className={style['paper']}>
            <h4>{project.name}</h4>
            <img src={project.pic} alt="" />
            <p>{project.desc}</p>
          </div>
        </li>
      )}
    </ul>
  </div>
}
