'use client';
import { PlusIcon } from '@/entities/icons/plus';
import { ThemeFactory, ThemeContext, Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
export const GroupEventButton = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            <ThemeContext.Provider value={GroupEventButtonTheme}>
                <div className={styles.row}>
                    <Button
                        size="large"
                        borderless
                        onClick={() => router.push('/events/settings/moderation')}
                        use={pathname === '/events/settings/moderation' ? 'primary' : 'text'}>
                        На модерации
                    </Button>
                    <Button
                        onClick={() => router.push('/events/settings/published')}
                        size="large"
                        borderless
                        use={pathname === '/events/settings/published' ? 'primary' : 'text'}>
                        Опубликованные
                    </Button>
                    <PlusIcon path="event/create" />
                </div>
            </ThemeContext.Provider>
        </>
    );
};
const GroupEventButtonTheme = ThemeFactory.create({
    btnBorderRadiusLarge: '15px',
    btnPrimaryBg: '#9932CC',
    btnTextBg: '#F8F8FA',
});
