import styles from './SlideF.module.scss';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import TopText from '../../texts/topText/TopText';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import ButtonA from '../../buttons/buttonA/ButtonA';
import { useSlide } from '../../../context/SlideProvider';

const SlideF = () => {

    const { updateSlide } = useSlide();

    return (
        <>
            <QuestionTabs
                question={'Question 5/5'}
            />
            <TopText
                text={'Please, set up your preferred betting range'}
            />
            <div
                className={styles.titleWrapper}
            >
                <span>
                    Deposit Limit Per month
                </span>
            </div>
            <BottomTextA
                text={'Set up deposit limit per month to earn (10 Free Spins)'}
            />
            <ButtonA
                text={'Set'}
                onBtnAClick={
                    () => { updateSlide(7) }
                }
            />
        </>
    );
}

export default SlideF;
