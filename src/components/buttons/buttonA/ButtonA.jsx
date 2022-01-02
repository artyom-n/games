import styles from './ButtonA.module.scss';

const ButtonA = ({ text, onBtnAClick }) => {    

    return (
        <div className={styles.buttonWrapper}>
            <button
                className={styles.btnA}
                onClick={onBtnAClick}
            >
                {text}
            </button>
        </div>
    );
}

export default ButtonA;
