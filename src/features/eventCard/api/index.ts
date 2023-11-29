import { instanceLogged } from '@/shared/axios';
import { Toast } from '@skbkontur/react-ui';

export const publishHandleClick = async (eventDataID: number) => {
    try {
        const published = await instanceLogged.patch(`/events/${eventDataID}/`, {
            published: true,
        });
        if (published.status >= 200 && published.status <= 299) {
            showComplexNotification();
        }
    } catch (error) {
        return error;
    }
};

export const rejectHandleClick = async (eventDataID: number) => {
    try {
        const reject = await instanceLogged.delete(`/events/${eventDataID}/`);
        if (reject.status >= 200 && reject.status <= 299) {
            showComplexNotification();
        }
    } catch (error) {
        return error;
    }
};

function showComplexNotification() {
    Toast.push('Изменение сохранены, перезагрузите страницу', {
        label: 'Окей',
        handler: () => Toast.push('Окей'),
    });
}
