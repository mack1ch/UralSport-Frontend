import styles from './ui.module.scss';
export const Title = ({ children }: { children: string }) => {
    return (
        <>
            <h1 className={styles.h1}>{children}</h1>
        </>
    );
};
