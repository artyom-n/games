import styles from './SlideC.module.scss';
import TopText from '../../texts/topText/TopText';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';

const answers = [
  'Slots',
  'Baccarat',
  'Blackjack',
  'Roulette'
];

const SlideC = () => {

  return (
    <>
      <QuestionTabs
        question={'Question 2/5'}
      />
      <TopText
        text={'Which casino game offers you the best statistical chance of winning?'}
      />
      <div className={styles.answerButtonsContainer}>
        <div className={styles.answerButtonsWrapper}>
          {answers.map((answer, index) => {
            return (
              <button
                className={styles.btnAnswer}
                key={index}
              >
                {answer}
              </button>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Select the answer to earn (10 Free Spins)'}
      />
      <div className={styles.buttonWrapper}>
        <button
          className={styles.btnUnactive}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default SlideC;
