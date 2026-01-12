export interface Client {
    desc: { en: string };
    comments: { rating: number };
}

export function getAvarageRating(clients: Client[], city: string): number {
    const filtered = clients.filter(client =>
        client.desc.en.toLowerCase().includes(city.toLowerCase())
    );

    if (filtered.length === 0) return 0;

    const sum = filtered.reduce((acc, client) => acc + client.comments.rating, 0);

    return Math.round(sum / filtered.length);
}