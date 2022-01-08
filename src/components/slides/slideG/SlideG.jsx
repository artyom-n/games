import styles from './SlideG.module.scss';
import ButtonA from '../../buttons/buttonA/ButtonA';

const SlideG = () => {

    return (
        <>
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
            />
        </>
    );
}

export default SlideG;
