export type MenuProps = {
    id: number;
    section: string;
    products: {
        id: number;
        price: number;
        info: {
            description: string;
            components: {
                id: number;
                text: string;
                amount: number;
            }[];
            photos: any[];
        }
    }[]
}