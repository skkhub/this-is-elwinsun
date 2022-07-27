import styles from './Career.module.scss';
import { useRouter } from 'next/router';
// import Image from 'next/image';

const Career = ({career}) => {
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

  return <div className={styles['career']}>
    <div className={styles['pic']} style={styleObj}></div>
    <div className={styles['intro']}>{career.intro}</div>
    <ul className={styles['projects']}>
      {career.projects.map(project =>
        <li key={project.name}
          style={{cursor: project.link ? 'pointer' : ''}}
          onClick={jumpToProject.bind(null, project.link)}>
          <div className={styles['paper']}>
            <h4 style={project.link ? {textDecoration: 'underline'} : null}>{project.name}</h4>
            {project.picList?.length > 0 && project.picList.map(pic => <img key={pic} src={pic} alt="" />)}
            <p>{project.desc}</p>
          </div>
        </li>
      )}
    </ul>
  </div>
};

export default Career;
