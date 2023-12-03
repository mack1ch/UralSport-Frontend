'use client';

import styles from './ui.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YandexMap = () => {
    let info;
    console.log(info);
    return (
        <>
            <div className={styles.map}>
                <YMaps>
                    <Map
                        width={'50vw'}
                        height={'80vh'}
                        defaultState={{ center: [55.755864, 37.617698], zoom: 9 }}>
                        <Placemark defaultGeometry={[55.714632, 37.572046]} />
                        <Placemark defaultGeometry={[55.732104, 37.60314]} />
                        <Placemark defaultGeometry={[55.791993, 37.56071]} />
                        <Placemark defaultGeometry={[55.716671, 37.553199]} />
                        <Placemark defaultGeometry={[55.702504, 37.645016]} />
                        <Placemark defaultGeometry={[55.787259, 37.539773]} />
                        <Placemark properties={info} defaultGeometry={[55.737738, 37.596314]} />
                        <Placemark properties={info} defaultGeometry={[55.709167, 37.647838]} />
                        <Placemark properties={info} defaultGeometry={[55.785685, 37.563175]} />
                        <Placemark properties={info} defaultGeometry={[55.786965, 37.530357]} />
                        <Placemark properties={info} defaultGeometry={[55.75407, 37.551698]} />
                        <Placemark properties={info} defaultGeometry={[55.863238, 37.45079]} />
                        <Placemark properties={info} defaultGeometry={[55.799286, 37.514212]} />
                        <Placemark properties={info} defaultGeometry={[55.739045, 37.773299]} />
                        <Placemark properties={info} defaultGeometry={[55.663015, 37.651367]} />
                        <Placemark properties={info} defaultGeometry={[55.766013, 37.660772]} />
                        <Placemark properties={info} defaultGeometry={[55.686911, 37.801439]} />
                        <Placemark properties={info} defaultGeometry={[55.794698, 37.677479]} />
                    </Map>
                </YMaps>
            </div>
        </>
    );
};
