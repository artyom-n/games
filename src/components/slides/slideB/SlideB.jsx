import { useState } from 'react';
import styles from './SlideB.module.scss';
import ico1 from '../../../assets/images/slides/slideB/ico-1.png'
import ico2 from '../../../assets/images/slides/slideB/ico-2.png'
import ico3 from '../../../assets/images/slides/slideB/ico-3.png'
import ico4 from '../../../assets/images/slides/slideB/ico-4.png'
import ico5 from '../../../assets/images/slides/slideB/ico-5.png'
import ico6 from '../../../assets/images/slides/slideB/ico-6.png'
import ico7 from '../../../assets/images/slides/slideB/ico-7.png'
import ico8 from '../../../assets/images/slides/slideB/ico-8.png'
import ico9 from '../../../assets/images/slides/slideB/ico-9.png'
import ButtonA from '../../buttons/buttonA/ButtonA';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import QuestionTabs from '../../questionTabs/QuestionTabs';

const cards = [
  { name: 'Pragmatic', icon: ico2, isSelected: false },
  { name: 'Booming', icon: ico3, isSelected: false },
  { name: 'EGT', icon: ico9, isSelected: false },
  { name: 'Pragmatic', icon: ico2, isSelected: false },
  { name: 'Booming', icon: ico3, isSelected: false },
  { name: 'EGT', icon: ico9, isSelected: false },
  { name: 'Quickspin', icon: ico1, isSelected: false },
  { name: 'Softbet', icon: ico6, isSelected: false },
  { name: 'Ezugi', icon: ico7, isSelected: false },
  { name: 'Quickspin', icon: ico1, isSelected: false },
  { name: 'Softbet', icon: ico6, isSelected: false },
  { name: 'Ezugi', icon: ico7, isSelected: false },
  { name: 'Microgaming', icon: ico8, isSelected: false },
  { name: 'Habanero', icon: ico5, isSelected: false },
  { name: 'GoldHero', icon: ico4, isSelected: false },
  { name: 'Microgaming', icon: ico8, isSelected: false },
  { name: 'Habanero', icon: ico5, isSelected: false },
  { name: 'GoldHero', icon: ico4, isSelected: false }
];

const SlideB = () => {

  const [categories, setCategories] = useState(cards);

  const toggleCard = (i) => {
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
          isSelected: category.isSelected
        }
      }
    })
    setCategories(newCategories);
  }

  return (
    <>
      <QuestionTabs />
      <div className={styles.titleWrapper}>
        <span className={styles.title}>
          {'pick up your favorite providers & games'}
        </span>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {categories.map((card, index) => {
            return (
              <div
                className={card.isSelected ? styles.cardSelected : styles.cardDefault}
                onClick={() => toggleCard(index)}
                key={index}
              >
                <img src={card.icon} alt={card.name} />
              </div>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Please select at least 3 game providers & earn (5 free spins)'}
      />
      <ButtonA
        text='Pick up games'
      />
    </>
  );
}

export default SlideB;
