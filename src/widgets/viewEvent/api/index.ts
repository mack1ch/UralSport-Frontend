import { instanceLogged } from '@/shared/axios';
import { IEvent } from '@/shared/interface/event';

export const GetEventById = async ({ id }: { id: number }): Promise<IEvent | Error> => {
    try {
        const { data }: { data: IEvent } = await instanceLogged.get(`/events/${id}/`);
        return data;
    } catch (error) {
        return error as Error;
    }
};
