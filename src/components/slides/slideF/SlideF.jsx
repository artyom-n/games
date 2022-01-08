import { useSlide } from '../../../context/SlideProvider';
import { useState } from 'react';
import { Range } from 'react-range';
import styles from './SlideF.module.scss';
import QuestionTabs from '../../questionTabs/QuestionTabs';
import TopText from '../../texts/topText/TopText';
import BottomTextA from '../../texts/bottomTextA/BottomTextA';
import ButtonA from '../../buttons/buttonA/ButtonA';
import arrow from '../../../assets/images/slides/slideF/arrow-down.png';
import payLogos from '../../../assets/images/slides/slideF/pay-logos.png'

const SlideF = () => {

    const { updateSlide } = useSlide();
    const [rangeValue, setRangeValue] = useState([50]);

    return (
        <>
            <QuestionTabs />
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
            <div className={styles.rangeWrapper}>
                <Range
                    step={5}
                    min={5}
                    max={200}
                    values={rangeValue}
                    onChange={(value) => setRangeValue(value)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '14px',
                                maxWidth: '529px',
                                background: 'linear-gradient(89.79deg, #959CC3 -8.34%, #CED3EB 106.18%)',
                                borderRadius: '10px'
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
                                height: '41px',
                                width: '41px',
                                background: 'radial-gradient(81.71% 81.71% at 40.24% 48.78%, #FFBB00 0%, #F3B200 100%)',
                                borderRadius: '50%'
                            }}
                        />
                    )}
                />
            </div>
            <div className={styles.cashInputDropdownWrapper}>
                <input
                    className={styles.cashInput}
                    type="number"
                    min="5"
                    max="200"
                    value={rangeValue}
                    onChange={(e) => {
                        setRangeValue([e.target.value])
                    }}
                />
                <div
                    className={styles.dropdownWrapper}
                >
                    <div>
                        <span>
                            eur
                        </span>
                    </div>
                    <div>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.payLogosWrapper}>
                <img src={payLogos} alt="pay-logos" />
            </div>
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
