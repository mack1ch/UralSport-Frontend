'use client';

import { useRouter } from 'next/navigation';
import { isAuthenticated, redirectToLogin } from '../auth/index';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter();
    if (!isAuthenticated()) {
        redirectToLogin(router);
    }
    return <>{children}</>;
};
