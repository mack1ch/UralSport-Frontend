import { ReactNode } from 'react';
import styles from './ui.module.scss';
export const Marquee = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className={styles.layout}>
                <h4 className={styles.text}>{children}</h4>
            </div>
        </>
    );
};
