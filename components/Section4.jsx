import styles from './Section4.module.scss';

const Section = props => {
    const skills = [
        { name: 'HTML', progress: 70},
        { name: 'CSS', progress: 70},
        { name: 'JS', progress: 75},
        { name: 'TS', progress: 60},
        { name: 'VUE', progress: 70},
        { name: 'REACT', progress: 50},
        { name: 'NODE', progress: 40},
        { name: 'mini-app', progress: 45},
    ]
    return <>
        <div className={styles["section4"]} id="section4">
            <h3>我的技能</h3>
            <ul>
                {skills.map(skill =>
                    <li key={skill.name}
                        style={{
                            backgroundImage: `linear-gradient(to right, #0a0 ${skill.progress}%, #3a0 ${skill.progress + 15}%, transparent ${skill.progress + 30}%)`
                        }}>{skill.name}</li>
                )}
            </ul>
        </div>
    </>
};

export default Section;