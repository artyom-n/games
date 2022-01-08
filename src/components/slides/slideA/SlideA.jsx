import { useState } from 'react';
import styles from './SlideA.module.scss';
import ico1 from '../../../assets/images/slides/slideA/ico-1.png'
import ico2 from '../../../assets/images/slides/slideA/ico-2.png'
import ico3 from '../../../assets/images/slides/slideA/ico-3.png'
import ico4 from '../../../assets/images/slides/slideA/ico-4.png'
import ico5 from '../../../assets/images/slides/slideA/ico-5.png'
import ico6 from '../../../assets/images/slides/slideA/ico-6.png'
import ButtonA from '../../buttons/buttonA/ButtonA';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import BottomTextB from '../../texts/bottomTextB/BottomTextB';
import { useSlide } from '../../../context/SlideProvider';
import TopText from '../../texts/topText/TopText';

const cards = [
  { name: 'Blackjack', icon: ico1, isSelected: false },
  { name: 'Roulette', icon: ico2, isSelected: false },
  { name: 'Baccarat', icon: ico3, isSelected: false },
  { name: 'Poker', icon: ico4, isSelected: false },
  { name: 'Dragon & Tiger', icon: ico5, isSelected: false },
  { name: 'Slots', icon: ico6, isSelected: false }
];

const SlideA = () => {

  const { updateSlide } = useSlide();
  const [categories, setCategories] = useState(cards);

  const toggleCategory = (i) => {
    const newCategories = categories.map((category, index) => {
      if (index === i) {
        return {
          name: category.name,
          icon: category.icon,
          isSelected: !category.isSelected
        }
      } else {
        return {
          name: category.name,
          icon: category.icon,
          isSelected: false
        }
      }
    })
    setCategories(newCategories);
  }

  return (
    <>
      <TopText
        text={'Pick any category, complete quiz & earn casino prize'}
      />
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesWrapper}>
          {categories.map((category, index) => {
            return (
              <div
                className={category.isSelected ? styles.categorySelected : styles.categoryDefault}
                onClick={() => toggleCategory(index)}
                key={index}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className={styles.categoryImage}
                />
                <div
                  className={styles.categoryName}
                >
                  {category.name}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Complete short QUIZ to test your casino knowledge and you’ll be rewarded with a special Bonus.'}
      />
      <ButtonA
        text='Start'
        onBtnAClick={() => { updateSlide(2) }}
      />
      <BottomTextB
        normalText={'Already a member? '}
        underlinedText={'Login'}
      />
    </>
  );
}

export default SlideA;
