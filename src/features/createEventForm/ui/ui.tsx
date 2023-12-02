'use client';
import {
    ThemeFactory,
    ThemeContext,
    Input,
    Textarea,
    FileUploader,
    Button,
} from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { AddImagesToEvent, CreateEvent, GetPlatforms } from '../api';
import { optionsArr } from '../model';
import { conditions } from '../data';
import { ISelect } from '../types';

export const CreateEventForm = () => {
    const [eventCategories, setEventCategories] = useState<readonly any[]>([]);
    const [formState, setFormState] = useState({
        eventName: '',
        eventDescription: '',
        venue: null as ISelect | null,
        eventCover: null as File | null,
        eventPhotos: [] as File[],
        eventDate: '',
        eventTime: '',
        entranceCondition: null as ISelect | null,
        ticketQuantity: '',
        ticketPrice: '',
    });
    useEffect(() => {
        const fetchCategories = async () => {
            const EventPlatforms = await GetPlatforms();
            if (Array.isArray(EventPlatforms)) {
                setEventCategories(optionsArr(EventPlatforms));
            } else return;
        };
        fetchCategories();
    }, []);

    const handleInputChange = (name: string, value: string | number | File | File[]) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleFileUpload = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const filesArray: File[] = Array.from(files);
            setFormState((prevState) => ({
                ...prevState,
                [name]: filesArray,
            }));
        }
    };
    const handleSelectChange = (name: string, selectedOption: ISelect | null) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: selectedOption,
        }));
    };
    const handleCreateEvent = async () => {
        try {
            const eventData = {
                name: formState.eventName,
                description: formState.eventDescription,
                date: formState.eventDate,
                total_tickets: formState.ticketQuantity.toString(),
                age_limit: 6,
                time: formState.eventTime,
                price: formState.ticketPrice,
                artist: '',
                pushkin_payment: false,
                platform: formState.venue?.value,
                tags: [8],
                category: 7,
            };

            const res = await CreateEvent(eventData);

            if (
                'status' in res &&
                res.status >= 200 &&
                res.status <= 299 &&
                formState.eventCover &&
                formState.eventPhotos
            ) {
                const re = await AddImagesToEvent(res.data.id, formState.eventCover);
                console.log(re);
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <>
            <ThemeContext.Provider value={CreateEventFormTheme}>
                <section className={styles.header}>
                    <div className={styles.inputs}>
                        <Input
                            name="eventName"
                            value={formState.eventName}
                            onChange={(e) => handleInputChange('eventName', e.target.value)}
                            width={'100%'}
                            placeholder="Название мероприятия"
                            size="large"
                        />
                        <Textarea
                            name="eventDescription"
                            value={formState.eventDescription}
                            onChange={(e) => handleInputChange('eventDescription', e.target.value)}
                            width={'100%'}
                            placeholder="Описание мероприятия"
                            autoResize
                            size="large"
                        />
                        <Select
                            name="venue"
                            maxMenuHeight={100}
                            placeholder="Площадка"
                            defaultValue={formState.venue}
                            onChange={(selectedOption) =>
                                handleSelectChange('venue', selectedOption)
                            }
                            options={eventCategories}
                        />
                        <div className={styles.fileUpload}>
                            <span className={styles.label}>Обложка мероприятия</span>
                            <FileUploader
                                name="eventCover"
                                onChange={(files) => handleFileUpload('eventCover', files)}
                                size="medium"
                                accept="image/*"
                                placeholder="Обложка мероприятия"
                                width={'100%'}
                            />
                        </div>
                        <div className={styles.fileUpload}>
                            <span className={styles.label}>Фотографии мероприятия</span>
                            <FileUploader
                                name="eventPhotos"
                                onChange={(files) => handleFileUpload('eventPhotos', files)}
                                size="medium"
                                multiple
                                accept="image/*"
                                placeholder="Фотографии мероприятия"
                                width={'100%'}
                            />
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <Input
                            name="eventDate"
                            value={formState.eventDate}
                            onChange={(e) => handleInputChange('eventDate', e.target.value)}
                            width={'100%'}
                            placeholder="Дата"
                            type="date"
                            size="large"
                        />
                        <Input
                            name="eventTime"
                            value={formState.eventTime}
                            onChange={(e) => handleInputChange('eventTime', e.target.value)}
                            width={'100%'}
                            placeholder="Время"
                            type="time"
                            size="large"
                        />
                        <Select
                            name="entranceCondition"
                            maxMenuHeight={100}
                            placeholder="Условия входа"
                            defaultValue={formState.entranceCondition}
                            onChange={(selectedOption) =>
                                handleSelectChange('entranceCondition', selectedOption)
                            }
                            options={conditions}
                        />
                        {formState?.entranceCondition?.value === '5' && (
                            <>
                                <Input
                                    name="ticketQuantity"
                                    value={formState.ticketQuantity}
                                    onChange={(e) =>
                                        handleInputChange(
                                            'ticketQuantity',
                                            parseInt(e.target.value),
                                        )
                                    }
                                    width={'100%'}
                                    placeholder="Количество билетов"
                                    type="number"
                                    size="large"
                                />
                                <Input
                                    name="ticketPrice"
                                    value={formState.ticketPrice}
                                    onChange={(e) =>
                                        handleInputChange('ticketPrice', parseInt(e.target.value))
                                    }
                                    width={'100%'}
                                    placeholder="Цена одного билета"
                                    type="number"
                                    size="large"
                                />
                            </>
                        )}
                        <Button onClick={handleCreateEvent} size="large" use="primary">
                            Создать мероприятие
                        </Button>
                    </div>
                </section>
            </ThemeContext.Provider>
        </>
    );
};

const CreateEventFormTheme = ThemeFactory.create({
    inputBorderColorFocus: '#9932cc',
    textareaBorderColorFocus: '#9932cc',
    btnPrimaryBg: '#9932cc',
    btnBorderRadiusLarge: '8px',
});
