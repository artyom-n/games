import { useSlide } from '../../../context/SlideProvider';
import styles from './BottomTextA.module.scss';

const BottomTextA = ({ text }) => {

    const { slide } = useSlide();

    return (
        <div
            className={styles.textContainer}
        >
            <div
                className={
                    slide === 1 ?
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
