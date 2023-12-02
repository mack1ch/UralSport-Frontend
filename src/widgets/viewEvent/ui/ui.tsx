'use client';

import { Title } from '@/entities/title';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { IEvent } from '@/shared/interface/event';
import { GetEventById } from '../api';
import { URL, convertDateFormat, convertTimeFormat } from '../model';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/features/pageHeader';

export const ViewEvent = ({ id }: { id: number }) => {
    const [eventData, setEventData] = useState<IEvent | null>(null);
    const router = useRouter();
    useEffect(() => {
        const fetchEvent = async () => {
            const EventData = await GetEventById({ id });
            if (!(EventData instanceof Error)) {
                setEventData(EventData);
            }
        };
        fetchEvent();
    }, []);
    return (
        <>
            <div className={styles.header}>
                <PageHeader
                    pageName={eventData?.name || 'Загрузка...'}
                    prePageName="Просмотр мероприятий"
                />
                <div className={styles.column}>
                    <h2 className={styles.h2}>
                        {eventData?.price}₽ · {eventData?.total_tickets} билетов
                    </h2>
                    <h3 className={styles.h3}>
                        {eventData?.platform.name} · {convertDateFormat(eventData?.date)} ·{' '}
                        {convertTimeFormat(eventData?.time)}
                    </h3>
                </div>
                <div className={styles.main}>
                    {eventData?.cover && (
                        <Image
                            className={styles.cover}
                            src={URL + eventData?.cover}
                            width={360}
                            height={240}
                            alt="Изображение мероприятия"
                        />
                    )}
                    <p className={styles.description}>{eventData?.description}</p>
                </div>
            </div>
        </>
    );
};
