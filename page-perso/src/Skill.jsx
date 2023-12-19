import { StarFill, Star } from 'react-bootstrap-icons';

const Skill = ({ skills }) => {
  const renderStars = (grade) => {
    const filledStars = grade;
    const emptyStars = 5 - filledStars;

    const filledStarsArray = Array(filledStars).fill(<StarFill className="text-warning" />);
    const emptyStarsArray = Array(emptyStars).fill(<Star className="text-warning" />);

    return [...filledStarsArray, ...emptyStarsArray];
  };

  return (
    <>
      {skills.map((skill, index) => (
        <li key={index}>
          <h3>{skill.name}</h3>
          <p>{renderStars(skill.grade)}</p>
        </li>
      ))}
    </>
  );
};

export default Skill;


