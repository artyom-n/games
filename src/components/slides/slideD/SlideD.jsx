import { useState } from 'react';
import styles from './SlideD.module.scss';
import TopText from '../../texts/topText/TopText';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import ButtonA from '../../buttons/buttonA/ButtonA';

const bonusesData = [
    { name: 'FREE SPINS', isSelected: false },
    { name: 'CASHBACK', isSelected: false },
    { name: '€100 CASINO BONUS', isSelected: false },
    { name: 'CRAZY BONUS 400% CASINO BONUS', isSelected: false },
    { name: 'TOURNAMENT €2000 CASH EVRY WEEK', isSelected: false },
    { name: 'DEPOSIT €20 & GET 100 FREE SPINS', isSelected: false },
    { name: 'HIGHROLLER BONUS 100% BONUS UP TO €500', isSelected: false },
    { name: '200% CASINO BONUS UP TO €100', isSelected: false },
    { name: '400% CASINO BONUS', isSelected: false }
];

const SlideD = () => {

    const [bonuses, setBonuses] = useState(bonusesData);

    const toggleBonus = (i) => {
        setBonuses(bonuses.map((bonus, index) => {
            if (i === index) {
                return { name: bonus.name, isSelected: !bonus.isSelected }
            } else {
                return bonus;
            }
        }));
    };

    return (
        <>
            <QuestionTabs
                question={'Question 3/5'}
            />
            <TopText
                text={'What kind of bonus do u prefer?'}
            />
            <div className={styles.bonusBtnsContainer}>
                <div
                    className={styles.bonusBtnsWrapper}
                >
                    {bonuses.map((bonus, index) => {
                        return (
                            <>
                                <button
                                    className={
                                        bonus.isSelected ?
                                            styles.bonusBtnSelected
                                            : styles.bonusBtnUnselected
                                    }
                                    key={index}
                                    onClick={() => toggleBonus(index)}
                                >
                                    {bonus.name}
                                </button>
                            </>
                        );
                    })}
                </div>
            </div>
            <BottomTextA
                text={'Please select at least 3 casino bonuses & earn (10 free spins)'}
            />
            <ButtonA
                text={'Next'}
                onBtnAClick={
                    () => {
                    }
                }
            />
        </>
    );
}

export default SlideD;
