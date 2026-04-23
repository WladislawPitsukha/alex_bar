export type PropsMenuPage = {
    id: number;
    section: string;
    products: {
        id: number;
        name: string;
        price: number;
        info: {
            description: string;
            components: {
                text: string;
                amount: number;
            }[];
            photos: any[];
        }
    }[]
}