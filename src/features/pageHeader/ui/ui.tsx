'use client';

import styles from './ui.module.scss';
import LeftArrow from '../../../../public/icons/leftArrow.svg';
import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Title } from '@/entities/title';
interface PageHeaderProps {
    pageName: string;
    prePageName: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ pageName, prePageName }) => {
    const router = useRouter();
    return (
        <>
            <div className={styles.row}>
                <Title
                    className={styles.hover}
                    style={{ fontWeight: '600' }}
                    onClick={() => router.back()}>
                    {prePageName}
                </Title>
                <Image src={LeftArrow} width={24} height={24} alt="Следующая" />
                <Title style={{ fontWeight: '600' }}>{pageName}</Title>
            </div>
        </>
    );
};
