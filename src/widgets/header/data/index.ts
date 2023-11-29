import { IHeaderItem } from '@/shared/interface/header';
import Calendar from '../../../../public/navicons/calendar.svg';
import ActiveCalendar from '../../../../public/navicons/activeCalendar.svg';
import Pin from '../../../../public/navicons/pin.svg';
import ActivePin from '../../../../public/navicons/activePin.svg';
import Analytic from '../../../../public/navicons/analytic.svg';
import ActiveAnalytic from '../../../../public/navicons/activeAnalytic.svg';
export const HeaderItems: IHeaderItem[] = [
    {
        id: 0,
        title: 'Мероприятия',
        path: '/events/settings/published',
        icon: Calendar,
        activeIcon: ActiveCalendar,
    },
    {
        id: 0,
        title: 'Площадки',
        path: '/platform',
        icon: Pin,
        activeIcon: ActivePin,
    },
    {
        id: 0,
        title: 'Аналитика',
        path: '/analytic',
        icon: Analytic,
        activeIcon: ActiveAnalytic,
    },
];
