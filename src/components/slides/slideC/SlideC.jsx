import { useState } from 'react';
import styles from './SlideC.module.scss';
import TopText from '../../texts/topText/TopText';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';

const answersData = [
  { name: 'Slots', value: false, isSelected: false },
  { name: 'Baccarat', value: false, isSelected: false },
  { name: 'Blackjack', value: true, isSelected: false },
  { name: 'Roulette', value: false, isSelected: false }
];

const SlideC = () => {

  const [answers, setAnswers] = useState(answersData);

  const findCorrectAnswer = (i) => {    ;
    const newAnswers = answers.map((answer, index) => {
      if (i === index) {
        return { name: answer.name, value: answer.value, isSelected: !answer.isSelected }
      } else {
        return { name: answer.name, value: answer.value, isSelected: false };
      }
    })
    setAnswers(newAnswers);
  };

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
                className={answer.isSelected ? styles.btnAnswerSelected : styles.btnAnswerUnselected}
                key={index}
                onClick={() => findCorrectAnswer(index)}
              >
                {answer.name}
              </button>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Select the answer to earn (10 Free Spins)'}
      />
      <div className={styles.buttonNextWrapper}>
        <button
          className={styles.btnNextUnactive}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default SlideC;
