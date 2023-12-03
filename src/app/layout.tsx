import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import Head from 'next/head';
const openGraphImage = { images: ['../../public/assets/cover.png'] };
const Mont = localFont({
    src: [
        {
            path: '../../public/fonts/Mont-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Mont-SemiBold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Mont-Bold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
});

export const metadata: Metadata = {
    title: 'Урал Спорт',
    description: 'Админ панель для Министерства спорта Свердловской области',
    ...openGraphImage,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <meta property="og:image" content="../../public/assets/cover.png" />
            </Head>
            <html lang="ru">
                <body className={Mont.className}>{children}</body>
            </html>
        </>
    );
}
