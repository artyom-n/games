import { useState } from 'react';
import { Range } from 'react-range';
import styles from './SlideF.module.scss';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import TopText from '../../texts/topText/TopText';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import ButtonA from '../../buttons/buttonA/ButtonA';
import { useSlide } from '../../../context/SlideProvider';

const SlideF = () => {

    const { updateSlide } = useSlide();
    const [rangeValues, setRangeValues] = useState([50]);

    return (
        <>
            <QuestionTabs
                question={'Question 5/5'}
            />
            <TopText
                text={'Please, set up your preferred betting range'}
            />
            <div
                className={styles.titleWrapper}
            >
                <span>
                    Deposit Limit Per month
                </span>
            </div>
            <Range
                step={5}
                min={5}
                max={200}
                values={rangeValues}
                onChange={(values) => setRangeValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100%',
                            backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '42px',
                            width: '42px',
                            backgroundColor: '#999',
                            borderRadius: '50%'
                        }}
                    />
                )}
            />
            <BottomTextA
                text={'Set up deposit limit per month to earn (10 Free Spins)'}
            />
            <ButtonA
                text={'Set'}
                onBtnAClick={
                    () => { updateSlide(7) }
                }
            />
        </>
    );
}

export default SlideF;
