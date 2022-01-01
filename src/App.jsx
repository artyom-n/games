import styles from './App.module.scss';
import logo from './assets/images/app/logo.png'
import SlideA from './components/slides/slideA/SlideA';
import SlideB from './components/slides/slideB/SlideB';
import { useSlide } from './context/SlideProvider';

const App = () => {

  const {slide, updateSlide} = useSlide();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="WinOwn" />
      </div>
        {slide === 'SlideA' && <SlideA />}
        {slide === 'SlideB' && <SlideB />}   
    </div>
  );
}

export default App;
