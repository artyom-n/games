import styles from './App.module.scss';
import logo from './assets/images/app/logo.png'
import SlideA from './components/slides/slideA/SlideA';
import SlideB from './components/slides/slideB/SlideB';
import SlideC from './components/slides/slideC/SlideC';
import SlideD from './components/slides/slideD/SlideD';
import SlideE from './components/slides/slideE/SlideE';
import { useSlide } from './context/SlideProvider';

const App = () => {

  const { slide } = useSlide();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="WinOwn" />
      </div>
      {slide === 1 && <SlideA />}
      {slide === 2 && <SlideB />}
      {slide === 3 && <SlideC />}
      {slide === 4 && <SlideD />}
      {slide === 5 && <SlideE />}
    </div>
  );
}

export default App;
