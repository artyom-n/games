import { useSlide } from '../../../context/SlideProvider';
import styles from './TopText.module.scss';

const TopText = ({ text }) => {

    const { slide } = useSlide();

    return (
        <div
            className={styles.titleWrapper}
        >
            <span
                className={
                    (slide === 1 && styles.titleMaxWidth700)
                    || (slide === 3 && styles.titleMaxWidth730)
                }
            >
                {text}
            </span>
        </div>
    );
}

export default TopText;
