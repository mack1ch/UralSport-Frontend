import { CSSProperties } from 'react';
import styles from './ui.module.scss';

export const PageLayout = ({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: CSSProperties;
}) => {
    return (
        <>
            <div className={styles.layout} style={style}>
                {children}
            </div>
        </>
    );
};
