export type EventProps = {
    images: ImageEventProps[];
    id: number;
    title: string;
    date: string;
    description: string;
}

export type ImageEventProps = {
    id: number;
    src: any;
    alt: string;
}