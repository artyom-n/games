import { useSlide } from '../../../context/SlideProvider';
import styles from './BottomTextA.module.scss';

const BottomTextA = ({ text }) => {

    const { slide, updateSlide } = useSlide();

    return (
        <div
            className={styles.textContainer}
        >
            <div
                className={
                    slide === 'SlideA' ?
                        styles.textWrapperSlideA
                        :
                        styles.textWrapper}
            >
                <span
                    className={styles.bottomTextA}
                >
                    {text}
                </span>
            </div>
        </div>
    );
}

export default BottomTextA;
