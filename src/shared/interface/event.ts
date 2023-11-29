export interface IEvent {
    id: number;
    name: string;
    cover: string;
    description: string;
    date: string;
    total_tickets: string;
    age_limit: string;
    time: string;
    price: number;
    artist: string;
    pushkin_payment: boolean;
    platform: IPlatform;
    tags: ITags[];
    category: ICategory[];
    images: IImages[];
}

export interface IPlatform {
    id: number;
    name: string;
    description: string;
    location_data?: string;
}
export interface ITags {
    id: number;
    name: string;
}
export interface ICategory {
    id: number;
    name: string;
    tags: ITags[];
}

export interface IImages {
    id: number;
    image: string;
}
