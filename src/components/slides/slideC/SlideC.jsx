import { useState } from 'react';
import styles from './SlideC.module.scss';
import TopText from '../../texts/topText/TopText';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import { useSlide } from '../../../context/SlideProvider';

const answersData = [
  { name: 'Slots', value: false, isSelected: false },
  { name: 'Baccarat', value: false, isSelected: false },
  { name: 'Blackjack', value: true, isSelected: false },
  { name: 'Roulette', value: false, isSelected: false }
];

const SlideC = () => {

  const {updateSlide} = useSlide();
  const [answers, setAnswers] = useState(answersData);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const findCorrectAnswer = (i) => {
    const newAnswers = answers.map((answer, index) => {
      if (i === index) {
        answer.value ?
          setIsCorrectAnswer(true)
          : setIsCorrectAnswer(false);
        return { name: answer.name, value: answer.value, isSelected: !answer.isSelected }
      } else {
        return { name: answer.name, value: answer.value, isSelected: false };
      }
    })
    setAnswers(newAnswers);
  };

  return (
    <>
      <QuestionTabs />
      <TopText
        text={'Which casino game offers you the best statistical chance of winning?'}
      />
      <div className={styles.answerButtonsContainer}>
        <div className={styles.answerButtonsWrapper}>
          {answers.map((answer, index) => {
            return (
              <button
                className={
                  answer.isSelected ?
                    (
                      answer.value ?
                        styles.btnAnswerSelectedTrue
                        : styles.btnAnswerSelectedFalse
                    )
                    : styles.btnAnswerUnselected
                }
                key={index}
                onClick={() => {
                  answer.isSelected ?
                    setIsSelected(false)
                    : setIsSelected(true)
                  findCorrectAnswer(index)
                }}
              >
                {answer.name}
              </button>
            )
          })}
        </div>
      </div>
      {isSelected ? (
        <div className={styles.resultTextContainer}>
          <div className={styles.resultTextWrapper}>
            <span className={
              isCorrectAnswer ?
                styles.resultTrueAnswerText
                : styles.resultFalseAnswerText
            }>
              {(isSelected && isCorrectAnswer) && 'You won 10 Free Spins!'}
              {(isSelected && !isCorrectAnswer) && 'That’s not it, try again!'}
            </span>
          </div>
        </div>
      ) : (
        <BottomTextA
          text={'Select the answer to earn (10 Free Spins)'}
        />
      )}
      <div className={styles.buttonNextWrapper}>
        <button
          onClick={() => {
            isCorrectAnswer && updateSlide(4);
          }}
          className={
            isCorrectAnswer ?
              styles.btnNextActive
              : styles.btnNextUnactive
          }
        >
          Next
        </button>
      </div>
    </>
  );
}

export default SlideC;
