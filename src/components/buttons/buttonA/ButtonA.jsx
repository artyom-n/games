import { useSlide } from '../../../context/SlideProvider';
import styles from './ButtonA.module.scss';

const ButtonA = ({ text }) => {

    const { updateSlide } = useSlide();

    return (
        <div className={styles.buttonWrapper}>
            <button
                className={styles.btnA}
                onClick={() => { updateSlide('SlideB') }}
            >
                {text}
            </button>
        </div>
    );
}

export default ButtonA;
