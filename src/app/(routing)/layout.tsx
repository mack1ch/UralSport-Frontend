import { PrivateRoute } from '@/shared/authHelpers/privateRouter';
import { PageLayout } from '@/shared/layout/ui/ui';
import { Header } from '@/widgets/header';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <header>
                    <Header />
                </header>
                <main style={{ paddingBottom: '2rem' }}>
                    <PageLayout>
                        <PrivateRoute>{children}</PrivateRoute>
                    </PageLayout>
                </main>
            </div>
        </>
    );
}
