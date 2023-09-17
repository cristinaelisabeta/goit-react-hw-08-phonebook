import homeCover from '../../images/home.png';
import s from './Home.module.css';

const Home = () => {
  const home = homeCover;
  return (
    <div className={s.wrapper}>
      <img src={home} alt="cover"></img>
    </div>
  );
};

export default Home;
