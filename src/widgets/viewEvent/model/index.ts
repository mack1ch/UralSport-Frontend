export function convertTimeFormat(timeString: string | undefined): string {
    if (!timeString) return '';
    const timeComponents = timeString.split(':');
    if (timeComponents.length === 3) {
        const hours = timeComponents[0];
        const minutes = timeComponents[1];
        const formattedTime = `${hours}:${minutes}`;
        return formattedTime;
    } else {
        return timeString;
    }
}

export function convertDateFormat(dateString: string | undefined): string {
    if (!dateString) return '';
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    const [year, month, day] = dateString.split('-').map(Number);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        const monthName = months[month - 1];
        return `${day} ${monthName}`;
    } else {
        return dateString;
    }
}

export const URL: string = 'https://inverse-tracker.store/';
