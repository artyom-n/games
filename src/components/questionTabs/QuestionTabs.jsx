import { useSlide } from '../../context/SlideProvider';
import styles from './QuestionTabs.module.scss';

const QuestionTabs = ({question}) => {

    const { slide } = useSlide();    

    return (
        <div className={styles.questionTabsContainer}>
            <div className={styles.questionTabsWrapper}>
                <span className={styles.questionTabsText}>
                    {question}
                </span>
                <div className={styles.questionTabs}>
                    <div className={styles.questionTab} style={{opacity: (slide >= 2) && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: (slide >= 3) && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: (slide >= 4) && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: (slide >= 5) && '1'}}></div>
                    <div className={styles.questionTab} style={{opacity: (slide >= 6) && '1'}}></div>
                </div>
            </div>
        </div>
    );
}

export default QuestionTabs;
