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
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);
    const [currency, setCurrency] = useState('eur');

    const toggleDropdown = () => {
        setIsDropdownOpened(!isDropdownOpened);
    };

    const changeCurrency = (currencyString) => {
        if (currency !== currencyString) {
            setCurrency(currencyString);
            setIsDropdownOpened(false);
            setRangeValue(
                [currencyString === 'eur' ?
                    (rangeValue[0] / 1.14).toFixed(0)
                    : (rangeValue[0] * 1.14).toFixed(0)]
            );
        } else {
            setIsDropdownOpened(false);
        }
    };

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
                    max={currency === 'eur' ? 200 : (200 * 1.14).toFixed(0)}
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
                    type={'number'}
                    min={'5'}
                    max={currency === 'eur' ? 200 : (200 * 1.14).toFixed(0)}
                    value={rangeValue}
                    onChange={(e) => {
                        if (currency === 'eur') {
                            if (e.target.value > 200) {
                                setRangeValue([200]);
                            } else {
                                setRangeValue([e.target.value]);
                            }
                        } else if (currency === 'usd') {
                            if (e.target.value > 228) {
                                setRangeValue([228]);
                            } else {
                                setRangeValue([e.target.value]);
                            }
                        }
                    }}
                />
                <div
                    className={styles.dropdownWrapper}
                >
                    <div>
                        <span>
                            {currency}
                        </span>
                    </div>
                    <div
                        className={styles.dropdownArrowImageWrapper}
                        onClick={() => toggleDropdown()}
                    >
                        <img src={arrow} alt="" />
                    </div>
                    <div className={
                        isDropdownOpened ?
                            styles.dropdownContentVisible
                            : styles.dropdownContentUnvisible
                    }>
                        <div
                            className={styles.dropdownEurTab}
                            onClick={() => changeCurrency('eur')}
                        >
                            <div
                                className={styles.dropdownEurText}
                            >
                                eur
                            </div>
                        </div>
                        <div
                            className={styles.dropdownUsdTab}
                            onClick={() => changeCurrency('usd')}
                        >
                            <div
                                className={styles.dropdownUsdText}
                            >
                                usd
                            </div>
                        </div>
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
