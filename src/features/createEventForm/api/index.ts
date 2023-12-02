import { instanceLogged } from '@/shared/axios';
import { IPlatform } from '@/shared/interface/event';
import { AxiosError, AxiosResponse } from 'axios';

export const GetPlatforms = async (): Promise<IPlatform[] | Error> => {
    try {
        const { data }: { data: IPlatform[] } = await instanceLogged.get('/events/platforms/');
        return data;
    } catch (error) {
        return error as Error;
    }
};

export const CreateEvent = async (eventData: any): Promise<AxiosResponse | Error> => {
    try {
        const fetch: AxiosResponse = await instanceLogged.post('/events/', eventData);
        return fetch;
    } catch (e) {
        return e as AxiosError;
    }
};

export const AddImagesToEvent = async (id: number, cover: File): Promise<AxiosResponse | Error> => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    const formData = new FormData();
    formData.append('cover', cover);
    try {
        const fetch: AxiosResponse = await instanceLogged.patch(`/events/${id}/`, formData, config);
        return fetch;
    } catch (e) {
        return e as AxiosError;
    }
};
