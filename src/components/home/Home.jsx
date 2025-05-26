import { Link } from 'react-router-dom';
import { HOME_INFO } from '../../constants/home-info';

const Home = () => {
  return (
    <>
      <div>
        <h1>{HOME_INFO.title}</h1>
        <span>{HOME_INFO.wordTitle}</span>
        <p>{HOME_INFO.text}</p>
      </div>
      <Link to={HOME_INFO.link}>{HOME_INFO.linkText}</Link>
    </>
  );
};
export default Home;
