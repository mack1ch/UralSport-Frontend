'use client';

import Link from 'next/link';
import styles from './ui.module.scss';
import { ConnectButton } from '@/entities/buttons/connect';
import { Marquee } from '@/entities/marquee';

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link className={styles.title} href="/">
                    <span className={styles.purple}>Спорт</span>Стат
                </Link>
                <Marquee> Активная жизнь вместе с Inverse</Marquee>
                <div className={styles.buttons}>
                    <Link className={styles.auth} href="/auth">
                        Войти
                    </Link>
                    <ConnectButton path="/form">Подключиться</ConnectButton>
                </div>
            </header>
        </>
    );
};
