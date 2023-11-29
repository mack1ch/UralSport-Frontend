'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './ui.module.scss';
import { IHeaderItem } from '@/shared/interface/header';
import Link from 'next/link';

export const NavItem = ({ item }: { item: IHeaderItem }) => {
    const pathname = usePathname();
    return (
        <>
            <Link className={styles.item} href={item.path} key={item.id}>
                <Image
                    src={item.path === pathname ? item.activeIcon : item.icon}
                    width={20}
                    height={20}
                    alt={item.title}
                />
                <span
                    className={`${styles.title} ${
                        item.path === pathname ? styles.title__active : ''
                    }`}>
                    {item.title}
                </span>
            </Link>
        </>
    );
};
