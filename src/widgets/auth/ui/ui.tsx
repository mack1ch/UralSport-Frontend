'use client';

import { AuthForm } from '@/features/authForm';
import styles from './ui.module.scss';

export const Auth = () => {
    return (
        <>
            <main className={styles.page}>
                <AuthForm />
            </main>
        </>
    );
};
