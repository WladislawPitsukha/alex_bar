export type ClientProps = {
    id: number;
    desc: {
        en: string;
        clientName: string;
    };
    comments: {
        id: number;
        rating: number;
        text: string;
        date: string;
    };
}