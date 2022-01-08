import { useSlide } from '../../../context/SlideProvider';
import styles from './SlideG.module.scss';
import ButtonA from '../../buttons/buttonA/ButtonA';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

const SlideG = () => {

    const { updateSlide } = useSlide();
    const [width, height] = useWindowSize();

    return (
        <>
            <Confetti
                width={width}
                height={height}
            />
            <div
                className={styles.congratsTextWrapper}
            >
                <span>
                    Congrats!
                </span>
            </div>
            <div
                className={styles.earnTextWrapper}
            >
                <span>
                    You have earned
                </span>
            </div>
            <div
                className={styles.spinsTextWrapper}
            >
                <span>
                    50 free spins
                </span>
            </div>
            <ButtonA
                text={'EARN NOW'}
                onBtnAClick={
                    () => { updateSlide(1) }
                }
            />
        </>
    );
}

export default SlideG;
