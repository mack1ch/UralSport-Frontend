'use client';

import { useRouter } from 'next/navigation';
import { isAuthenticated, redirectToLogin } from '../auth/index';
import { useEffect } from 'react';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            redirectToLogin(router);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
};
