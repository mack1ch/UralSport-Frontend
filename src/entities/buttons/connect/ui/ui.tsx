import { ReactNode } from 'react';
import styles from './ui.module.scss';
import Link from 'next/link';
export const ConnectButton = ({
    children,
    path,
}: {
    children: ReactNode;
    path?: string | undefined;
}) => {
    return (
        <>
            <Link className={styles.btn} href={path ? path : ''}>
                {children}
            </Link>
        </>
    );
};
