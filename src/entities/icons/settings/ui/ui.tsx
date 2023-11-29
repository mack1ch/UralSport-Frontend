import styles from './ui.module.scss';
import Image from 'next/image';
import Setting from '../../../../../public/icons/settings.svg';
import Link from 'next/link';
export const Settings = ({ id, className }: { id: number; className?: string | undefined }) => {
    return (
        <>
            <Link href={`/events/${id}`} className={`${styles.btn} ${className}`}>
                <Image src={Setting} width={24} height={24} alt="Настройки" />
            </Link>
        </>
    );
};
