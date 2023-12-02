import { CSSProperties } from 'react';
import styles from './ui.module.scss';
export const Title = ({
    children,
    onClick,
    style,
    className,
}: {
    children: string;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string | undefined;
}) => {
    return (
        <>
            <h1
                style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
                onClick={onClick}
                className={`${styles.h1} ${className}`}>
                {children}
            </h1>
        </>
    );
};
