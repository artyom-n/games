// import styles from './SlideC.module.scss';
import TopText from '../../texts/topText/TopText';
import QuestionTabs from '../../questionTabs/QuestionTabs';

const SlideC = () => {  

  return (
    <>
     <QuestionTabs
        question={'Question 2/5'}
      />
      <TopText
        text={'Which casino game offers you the best statistical chance of winning?'}
      />
    </>
  );
}

export default SlideC;
