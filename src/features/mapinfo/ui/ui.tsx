import { Title } from '@/entities/title';
import styles from './ui.module.scss';
import { Platform } from '@/entities/platform';
import { PlatformData } from '../data';
import { IPlatformPage } from '@/shared/interface/platform';

export const MapInfo = () => {
    return (
        <>
            <div className={styles.layout}>
                <Title>Площадки</Title>
                {PlatformData.map((item: IPlatformPage) => (
                    <Platform key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};
