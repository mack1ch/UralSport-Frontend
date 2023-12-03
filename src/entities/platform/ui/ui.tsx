import { IPlatformPage } from '@/shared/interface/platform';
import styles from './ui.module.scss';

export const Platform = ({ item }: { item: IPlatformPage }) => {
    return (
        <>
            <article className={styles.card}>
                <h3>{item.title}</h3>
                <span className={styles.loc}>
                    {item.location} / {item.coordinates}
                </span>
                <p className={styles.desc}>{item.description}</p>
            </article>
        </>
    );
};
