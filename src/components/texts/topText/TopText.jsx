import { useSlide } from '../../../context/SlideProvider';
import styles from './TopText.module.scss';

const TopText = ({ text }) => {

    const { slide } = useSlide();

    return (
        <div
            className={styles.titleWrapper}
        >
            <span
                className={slide === 'SlideA' && styles.titleMaxWidth700}
            >
                {text}
            </span>
        </div>
    );
}

export default TopText;
