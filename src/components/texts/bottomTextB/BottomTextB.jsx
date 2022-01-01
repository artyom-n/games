import styles from './BottomTextB.module.scss';

const BottomTextB = ({ normalText, underlinedText }) => {
    return (
        <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
                <span
                    className={styles.bottomTextNormal}
                >
                    {normalText}
                    <span
                        className={styles.bottomTextUnderlined}
                    >
                        {underlinedText}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default BottomTextB;
