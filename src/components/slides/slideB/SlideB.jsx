import { useState } from 'react';
import styles from './SlideB.module.scss';
import ico1 from '../../../assets/images/slides/slideA/ico-1.png'
import ico2 from '../../../assets/images/slides/slideA/ico-2.png'
import ico3 from '../../../assets/images/slides/slideA/ico-3.png'
import ico4 from '../../../assets/images/slides/slideA/ico-4.png'
import ico5 from '../../../assets/images/slides/slideA/ico-5.png'
import ico6 from '../../../assets/images/slides/slideA/ico-6.png'
import ButtonA from '../../buttons/buttonA/ButtonA';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';

const cards = [
  { name: 'Blackjack', icon: ico1, isSelected: false },
  { name: 'Roulette', icon: ico2, isSelected: false },
  { name: 'Baccarat', icon: ico3, isSelected: false },
  { name: 'Poker', icon: ico4, isSelected: false },
  { name: 'Dragon & Tiger', icon: ico5, isSelected: false },
  { name: 'Slots', icon: ico6, isSelected: false }
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
                <span
                  className={styles.cardName}
                >
                  {card.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Please select at least 3 game providers & earn (5 free spins)'}
      />
      <ButtonA
        text='Pick Up Games'
      />      
    </>
  );
}

export default SlideB;
