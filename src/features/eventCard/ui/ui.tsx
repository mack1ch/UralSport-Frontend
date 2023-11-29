import { Settings } from '@/entities/icons/settings';
import styles from './ui.module.scss';
import { IEvent } from '@/shared/interface/event';
import Image from 'next/image';
import { publishHandleClick, rejectHandleClick } from '../api';

export const EventCard = ({ item, isModerate = false }: { item: IEvent; isModerate?: boolean }) => {
    return (
        <>
            <article className={styles.eventCard} /*href={`/events/${item.id}`}*/>
                <section className={styles.header}>
                    <Image
                        className={styles.cover}
                        src={item?.cover}
                        width={340}
                        height={160}
                        alt="Изображение мероприятия"
                    />
                    <Settings className={styles.settings} id={item.id} />
                </section>
                <section className={styles.main}>
                    <div className={styles.main__title}>
                        <h4 title={item.name} className={styles.name}>
                            {item.name}
                        </h4>
                        <dd className={styles.tickers}>
                            <Image src="/icons/ticker.svg" width={18} height={18} alt="Билеты" />
                            <p className={styles.total_tickets}>{item.total_tickets} билетов</p>
                        </dd>
                    </div>
                    <p title={item.platform.name} className={styles.platform}>
                        {item.platform.name}
                    </p>
                    {!isModerate && (
                        <div className={styles.btnSettings}>
                            <button
                                onClick={() => publishHandleClick(item.id)}
                                className={styles.published}>
                                Опубликовать
                            </button>
                            <button
                                onClick={() => rejectHandleClick(item.id)}
                                className={styles.reject}>
                                Отклонить
                            </button>
                        </div>
                    )}
                </section>
            </article>
        </>
    );
};
