import { PageHeader } from '@/features/pageHeader';
import styles from './ui.module.scss';
import { CreateEventForm } from '@/features/createEventForm';

export const CreateEvent = () => {
    return (
        <>
            <PageHeader pageName="Создание мероприятия" prePageName="Просмотр мероприятий" />
            <CreateEventForm />
        </>
    );
};
