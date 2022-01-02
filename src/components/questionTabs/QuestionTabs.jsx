import { useSlide } from '../../context/SlideProvider';
import styles from './QuestionTabs.module.scss';

const QuestionTabs = ({question}) => {

    const { slide } = useSlide();

    console.log(slide)

    return (
        <div className={styles.questionTabsContainer}>
            <div className={styles.questionTabsWrapper}>
                <span className={styles.questionTabsText}>
                    {question}
                </span>
                <div className={styles.questionTabs}>
                    <div className={styles.questionTab} style={{opacity: slide === 'SlideB' && 1 || slide === 'SlideC' && 1}}></div>
                    <div className={styles.questionTab} style={{opacity: slide === 'SlideD' && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: slide === 'SlideE' && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: slide === 'SlideF' && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: slide === 'SlideG' && '1'}}></div>
                </div>
            </div>
        </div>
    );
}

export default QuestionTabs;
