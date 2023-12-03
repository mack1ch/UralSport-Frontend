import { MapInfo } from '@/features/mapinfo';
import { YandexMap } from '@/features/ymap';

export default function Platform() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'flex-start',
                }}>
                <YandexMap />
                <MapInfo />
            </div>
        </>
    );
}
