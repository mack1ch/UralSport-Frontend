import { PrivateRoute } from '@/shared/authHelpers/privateRouter';
import { PageLayout } from '@/shared/layout';
import { Header } from '@/widgets/header';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <header>
                    <Header />
                </header>
                <main style={{ paddingBottom: '2rem' }}>
                    <PrivateRoute>
                        <PageLayout>{children}</PageLayout>
                    </PrivateRoute>
                </main>
            </div>
        </>
    );
}
