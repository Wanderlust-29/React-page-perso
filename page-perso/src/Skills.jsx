import Skill from './Skill.jsx';
import { skills } from './data.js';

const Skills = (props) => {
    const {title} = props
  return (
    <>
      <h1>Joan Doe</h1>
      <section>
        <h2>{title}</h2>
        <ul>
          <Skill skills={skills} />
        </ul>
      </section>
    </>
  );
};

export default Skills;