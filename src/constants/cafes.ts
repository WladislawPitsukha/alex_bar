import { CafeInfoProps } from "@/types/aboutProps";
import { clients } from "./clients";

export const cafes: CafeInfoProps[] = [
    {
        id: 1,
        title: "Alex Bar Main",
        info: {
            description: "The flagship Alex Bar in the heart of Warsaw, known for its vibrant atmosphere and signature cocktails.",
            moreDesc: "Spacious, modern, and always buzzing. Perfect for both casual meetups and special occasions.",
            coolFacts: "Where Warsaw meets for a good time!",
        },
        city: "Warsaw",
        address: "Nowy Świat 10, Warsaw",
        connection: {
            phone: "+48 22 123 45 67",
            email: "warsaw@alexbar.com",
        },
        socials: [
            { 
                id: 1, 
                labelText: "Instagram", 
                href: "https://instagram.com/alexbarwarsaw" 

            },
            { 
                id: 2, 
                labelText: "Facebook", 
                href: "https://facebook.com/alexbarwarsaw" 
            },
        ],
        time: {
            days: "Mon–Sun",
            hours: "08:00–01:00",
        },
        comments: clients.filter(client =>
            ["Warsaw", "Lodz", "Poznan", "Katowice", "Szczecin"].some(city =>
                client.desc.en.includes(city)
            )
        ),
    },
    {
        id: 2,
        title: "Alex Bar Gdansk",
        info: {
            description: "A cozy spot near the old town, offering local brews and sea-inspired snacks.",
            moreDesc: "Enjoy the maritime vibe and friendly service just steps from the Motława river.",
            coolFacts: "Taste the Baltic breeze!",
        },
        city: "Gdansk",
        address: "Długa 50, Gdansk", 
        connection: {
            phone: "+48 58 987 65 43",
            email: "gdansk@alexbar.com",
        },
        socials: [
            { 
                id: 1, 
                labelText: "Instagram", 
                href: "https://instagram.com/alexbargdansk" 
            },
            { 
                id: 2, 
                labelText: "Facebook", 
                href: "https://facebook.com/alexbargdansk" 
            },
        ],
        time: {
            days: "Mon–Sun",
            hours: "10:00–23:00",
        },
        comments: clients.filter(client =>
            ["Gdansk", "Gdynia"].some(city =>
                client.desc.en.includes(city)
            )
        ),
    },
    {
        id: 3,
        title: "Alex Bar Krakow",
        info: {
            description: "Historic charm meets modern taste in the heart of Krakow’s main square.",
            moreDesc: "Sip coffee or cocktails with a view of St. Mary's Basilica. Live music on weekends.",
            coolFacts: "Old town, new flavors!",
        },
        city: "Krakow",
        address: "Rynek Główny 20, Krakow",
        connection: {
            phone: "+48 12 345 67 89",
            email: "krakow@alexbar.com",
        },
        socials: [
            { 
                id: 1, 
                labelText: "Instagram", 
                href: "https://instagram.com/alexbarkrakow" 
            },
            { 
                id: 2, 
                labelText: "Facebook", 
                href: "https://facebook.com/alexbarkrakow" 
            },
        ],
        time: {
            days: "Mon–Sun",
            hours: "09:00–00:00",
        },
        comments: clients.filter(client =>
            client.desc.en.includes("Krakow")
        ),
    },
];
