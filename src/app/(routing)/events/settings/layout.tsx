import { Title } from '@/entities/title';
import { GroupEventButton } from '@/features/groupEvenrButton';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Title>Мероприятия</Title>
            <GroupEventButton />
            {children}
        </>
    );
}
