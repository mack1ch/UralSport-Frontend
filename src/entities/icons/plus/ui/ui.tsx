import Image from 'next/image';
import styles from './ui.module.scss';
import Plus from '../../../../../public/icons/plus.svg';
import Link from 'next/link';
export const PlusIcon = ({ path }: { path: string }) => {
    return (
        <>
            <Link href={path} className={styles.btn}>
                <Image src={Plus} width={24} height={24} alt="Создать" />
            </Link>
        </>
    );
};
