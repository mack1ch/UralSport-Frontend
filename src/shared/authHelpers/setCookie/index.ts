import { ICookieOptions } from '@/shared/interface/cookie';

export const setCookie = (name: string, value: string, options: ICookieOptions = {}): void => {
    const { expires, path, domain, secure } = options;
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires) {
        if (typeof expires === 'number') {
            const date = new Date();
            date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
            cookieString += `;expires=${date.toUTCString()}`;
        } else {
            cookieString += `;expires=${expires.toUTCString()}`;
        }
    }
    if (path) {
        cookieString += `;path=${path}`;
    }
    if (domain) {
        cookieString += `;domain=${domain}`;
    }
    if (secure) {
        cookieString += `;secure`;
    }
    document.cookie = cookieString;
};
