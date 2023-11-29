'use client';

import styles from './ui.module.scss';
import ProductLogo from '../../../../public/assets/logo.svg';
import Image from 'next/image';
import { IHeaderItem } from '@/shared/interface/header';
import { NavItem } from '@/entities/navItem';
import { HeaderItems } from '../data';
export const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h2 className={styles.logo}>
                    <Image src={ProductLogo} width={201} height={31} alt="СпортСтат" />
                </h2>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {HeaderItems.map((item: IHeaderItem) => (
                            <NavItem item={item} key={item.id} />
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
