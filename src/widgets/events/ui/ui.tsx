'use client';
import styles from './ui.module.scss';
import { EventCard } from '@/features/eventCard';
import { IEvent } from '@/shared/interface/event';
import { GetModeratorEvents, GetPublishedEvents } from '../api';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Events = () => {
    const [publishedEvents, setPublishedEvents] = useState<IEvent[] | null | Error>(null);
    const [moderateEvents, setModerateEvents] = useState<IEvent[] | null | Error>(null);
    const pathname = usePathname();
    useEffect(() => {
        const fetchEvents = async () => {
            const EventPublishedData = await GetPublishedEvents();
            const EventModerateData = await GetModeratorEvents();
            setPublishedEvents(EventPublishedData);
            setModerateEvents(EventModerateData);
        };
        fetchEvents();
    }, []);

    return (
        <>
            <ul className={styles.eventsList}>
                {pathname === '/events/settings/published' && Array.isArray(publishedEvents)
                    ? publishedEvents?.map((item: IEvent) => (
                          <EventCard key={item.id} item={item} />
                      ))
                    : pathname === '/events/settings/moderation' &&
                      Array.isArray(moderateEvents) &&
                      moderateEvents?.map((item: IEvent) => (
                          <EventCard isModerate key={item.id} item={item} />
                      ))}
            </ul>
        </>
    );
};
