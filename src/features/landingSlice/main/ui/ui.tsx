import styles from './ui.module.scss';

export const Main = () => {
    return (
        <>
            <main className={styles.layout}>
                <div className={styles.cover}>
                    <div className={styles.circle}>
                        <span className={styles.circle1}>
                            {' '}
                            <span className={styles.circle2}>
                                {' '}
                                <span className={styles.circle3}></span>
                            </span>
                        </span>
                        <div className={styles.block}>
                            <h1 className={styles.h1}>Inverse</h1>
                            <span className={styles.sport}>Спорт</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
