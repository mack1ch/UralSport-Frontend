import { Header } from '@/features/landingSlice/header';
import { Main } from '@/features/landingSlice/main';
import localFont from 'next/font/local';
const Oddaval = localFont({
    src: [
        {
            path: '../../public/fonts/Oddval-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
});
export default function Home() {
    return (
        <>
            <div
                className={Oddaval.className}
                style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Header />
                <Main />
            </div>
        </>
    );
}
