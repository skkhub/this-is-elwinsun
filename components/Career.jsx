import style from './Career.module.scss';

export default ({career}) => {
  const styleObj = {
    backgroundImage: `url(${career.pic})`,
    backgroundColor: career.backgroundColor,
    // boxShadow: `0px 0px 0px 2px ${career.theme}`,

  }
  return <div className={style['career']}>
    <div className={style['pic']} style={styleObj} />
    <div className={style['intro']}>{career.intro}</div>
    <ul className={style['projects']}>
      {career.projects.map(project => 
        <li>
          <div className={style['paper']}>
            {project.name}

          </div>
          </li>
      )}
    </ul>
  </div>
}
