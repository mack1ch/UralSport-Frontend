import { Header } from '@/features/landingSlice/header';
import { Main } from '@/features/landingSlice/main';

export default function Home() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Header />
                <Main />
            </div>
        </>
    );
}
