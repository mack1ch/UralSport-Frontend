import { instanceLogged } from '@/shared/axios';
import { IEvent } from '@/shared/interface/event';

export const GetEvents = async (): Promise<IEvent[] | Error> => {
    try {
        const { data }: { data: IEvent[] } = await instanceLogged.get('/events/published/');
        return data;
    } catch (error) {
        return error as Error;
    }
};
