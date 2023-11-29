import { CSSProperties } from 'react';
import styles from './ui.module.scss';
export const Title = ({
    children,
    onClick,
    style,
}: {
    children: string;
    onClick?: () => void;
    style?: CSSProperties;
}) => {
    return (
        <>
            <h1
                style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
                onClick={onClick}
                className={styles.h1}>
                {children}
            </h1>
        </>
    );
};
