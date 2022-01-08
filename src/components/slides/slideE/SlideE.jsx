import { useState } from 'react';
import styles from './SlideE.module.scss';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import ButtonA from '../../buttons/buttonA/ButtonA';
import { useSlide } from '../../../context/SlideProvider';

const exceptionsData = [
    { name: `A or 10 for the dealer`, isSelected: false },
    { name: `If u have couple of 8's`, isSelected: false },
    { name: `Don't have any exceptions`, isSelected: false }
];

const SlideE = () => {

    const { updateSlide } = useSlide();
    const [exceptions, setExceptions] = useState(exceptionsData);

    const toggleException = (i) => {
        setExceptions(exceptions.map((exception, index) => {
            if (i === index) {
                return { name: exception.name, isSelected: !exception.isSelected }
            } else {
                return { name: exception.name, isSelected: false };
            }
        }));
    };

    return (
        <>
            <QuestionTabs />
            <div
                className={styles.titleWrapper}
            >
                <div>
                    In Blackjack basic strategy,
                </div>
                <div>
                    what is the exception for double down on 11?
                </div>
            </div>
            <div className={styles.exceptionBtnsContainer}>
                <div
                    className={styles.exceptionBtnsWrapper}
                >
                    {exceptions.map((exception, index) => {
                        return (
                            <button
                                className={
                                    exception.isSelected ?
                                        styles.exceptionBtnSelected
                                        : styles.exceptionBtnUnselected
                                }
                                key={index}
                                onClick={() => toggleException(index)}
                            >
                                {exception.name}
                            </button>
                        );
                    })}
                </div>
            </div>
            <BottomTextA
                text={'Select the answer to earn (10 Free Spins)'}
            />
            <ButtonA
                text={'Next'}
                onBtnAClick={
                    () => { updateSlide(6) }
                }
            />
        </>
    );
}

export default SlideE;
