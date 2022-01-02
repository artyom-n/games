import { useState } from 'react';
import styles from './SlideB.module.scss';
import provIco1 from '../../../assets/images/slides/slideB/providers/ico-1.png'
import provIco2 from '../../../assets/images/slides/slideB/providers/ico-2.png'
import provIco3 from '../../../assets/images/slides/slideB/providers/ico-3.png'
import provIco5 from '../../../assets/images/slides/slideB/providers/ico-5.png'
import provIco6 from '../../../assets/images/slides/slideB/providers/ico-6.png'
import provIco7 from '../../../assets/images/slides/slideB/providers/ico-7.png'
import provIco8 from '../../../assets/images/slides/slideB/providers/ico-8.png'
import provIco9 from '../../../assets/images/slides/slideB/providers/ico-9.png'
import gameIco1 from '../../../assets/images/slides/slideB/games/ico-1.png'
import gameIco2 from '../../../assets/images/slides/slideB/games/ico-2.png'
import gameIco3 from '../../../assets/images/slides/slideB/games/ico-3.png'
import gameIco4 from '../../../assets/images/slides/slideB/games/ico-4.png'
import gameIco5 from '../../../assets/images/slides/slideB/games/ico-5.png'
import gameIco6 from '../../../assets/images/slides/slideB/games/ico-6.png'
import gameIco7 from '../../../assets/images/slides/slideB/games/ico-7.png'
import gameIco8 from '../../../assets/images/slides/slideB/games/ico-8.png'
import ButtonA from '../../buttons/buttonA/ButtonA';
import TopText from '../../texts/topText/TopText';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import { useSlide } from '../../../context/SlideProvider';

const providersData = [
  { provider: 'Pragmatic', provIco: provIco2, gameIco: gameIco1, isSelected: false },
  { provider: 'Booming', provIco: provIco3, gameIco: gameIco2, isSelected: false },
  { provider: 'EGT', provIco: provIco9, gameIco: gameIco3, isSelected: false },
  { provider: 'Pragmatic', provIco: provIco2, gameIco: gameIco1, isSelected: false },
  { provider: 'Booming', provIco: provIco3, gameIco: gameIco2, isSelected: false },
  { provider: 'EGT', provIco: provIco9, gameIco: gameIco3, isSelected: false },
  { provider: 'Quickspin', provIco: provIco1, gameIco: gameIco4, isSelected: false },
  { provider: 'Softbet', provIco: provIco6, gameIco: gameIco5, isSelected: false },
  { provider: 'Ezugi', provIco: provIco7, gameIco: gameIco6, isSelected: false },
  { provider: 'Quickspin', provIco: provIco1, gameIco: gameIco4, isSelected: false },
  { provider: 'Softbet', provIco: provIco6, gameIco: gameIco5, isSelected: false },
  { provider: 'Ezugi', provIco: provIco7, gameIco: gameIco6, isSelected: false },
  { provider: 'Microgaming', provIco: provIco8, gameIco: gameIco7, isSelected: false },
  { provider: 'Habanero', provIco: provIco5, gameIco: gameIco8, isSelected: false },
  { provider: 'Booming', provIco: provIco3, gameIco: gameIco2, isSelected: false },
  { provider: 'Microgaming', provIco: provIco8, gameIco: gameIco7, isSelected: false },
  { provider: 'Habanero', provIco: provIco5, gameIco: gameIco8, isSelected: false },
  { provider: 'Booming', provIco: provIco3, gameIco: gameIco2, isSelected: false }
];

const SlideB = () => {

  const { updateSlide } = useSlide();
  const [providers, setProviders] = useState(providersData);
  const [games, setGames] = useState(false);

  const toggleCard = (i) => {
    const newProviders = providers.map((provider, index) => {
      if (index === i) {
        return {
          provider: provider.provider,
          provIco: provider.provIco,
          gameIco: provider.gameIco,
          isSelected: !provider.isSelected
        }
      } else {
        return {
          provider: provider.provider,
          provIco: provider.provIco,
          gameIco: provider.gameIco,
          isSelected: provider.isSelected
        }
      }
    })
    setProviders(newProviders);
  }

  return (
    <>
      <QuestionTabs
        question={'Question 1/5'}
      />
      <TopText
        text={'Pick up your favorite providers & games'}
      />
      <div className={styles.subTitleContainer}>
        <div className={styles.subTitleWrapper}>
          <span className={styles.subTitle}>
            {games ? 'Pick up favorite games' : 'Pick up favorite providers'}
          </span>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {providers.map((card, index) => {
            return (
              <div
                className={card.isSelected ? styles.cardSelected : styles.card}
                style={{ backgroundColor: games && 'transparent' }}
                onClick={() => toggleCard(index)}
                key={index}
              >
                <img src={games ? card.gameIco : card.provIco} alt={card.provider} />
              </div>
            )
          })}
        </div>
      </div>
      <BottomTextA
        text={'Please select at least 3 game providers & earn (5 free spins)'}
      />
      <ButtonA
        text={games ? 'Next' : 'Pick up games'}
        onBtnAClick={
          () => {
            games ? updateSlide(3) : setGames(true);
          }
        }
      />
    </>
  );
}

export default SlideB;
