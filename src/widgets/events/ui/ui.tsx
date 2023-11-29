'use client';
import styles from './ui.module.scss';
import { EventCard } from '@/features/eventCard';
import { IEvent } from '@/shared/interface/event';
import { GetEvents } from '../api';
import { useEffect, useState } from 'react';
export const Events = () => {
    const [events, setEvents] = useState<IEvent[] | null | Error>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const EventData = await GetEvents();
            setEvents(EventData);
        };

        fetchEvents();
    }, []);
    return (
        <>
            <ul className={styles.eventsList}>
                {Array.isArray(events) &&
                    events.map((item: IEvent) => <EventCard key={item.id} item={item} />)}
            </ul>
        </>
    );
};
