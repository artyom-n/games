import { useSlide } from '../../context/SlideProvider';
import styles from './QuestionTabs.module.scss';

const QuestionTabs = () => {

    const { slide, updateSlide } = useSlide();

    return (
        <>
            <span className={styles.questionTabsText}>
                QUESTION 1/5
            </span>
            <div className={styles.questionTabsWrapper}>
                <div className={styles.questionTab}></div>
                <div className={styles.questionTab}></div>
                <div className={styles.questionTab}></div>
                <div className={styles.questionTab}></div>
                <div className={styles.questionTab}></div>
            </div>
        </>
    );
}

export default QuestionTabs;
