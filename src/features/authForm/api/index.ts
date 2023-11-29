import { setCookie } from '@/shared/authHelpers/setCookie';
import { instance } from '@/shared/axios';
import { IAuth } from '@/shared/interface/auth';

export const Login = async (userData: IAuth) => {
    try {
        const fetch = await instance.post('users/auth/token/login/', userData);
        setCookie('accessToken', fetch.data.auth_token, { expires: 30, path: '/' });
    } catch (e) {
        return e;
    }
};
