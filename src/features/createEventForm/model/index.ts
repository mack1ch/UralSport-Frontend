import { IPlatform } from '@/shared/interface/event';

export const optionsArr = (categories: IPlatform[]): readonly any[] => {
    return categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));
};
