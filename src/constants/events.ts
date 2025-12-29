import NorvegianFoodFest1 from "@/assets/imgs/events/norwegian-food-fest-1.jpg";
import NorvegianFoodFest2 from "@/assets/imgs/events/norwegian-food-fest-2.jpg";
import NorvegianFoodFest3 from "@/assets/imgs/events/norwegian-food-fest-3.jpg";
import VikingNight1 from "@/assets/imgs/events/viking-night-1.jpg";
import VikingNight2 from "@/assets/imgs/events/viking-night-2.jpg";
import VikingNight3 from "@/assets/imgs/events/viking-night-3.jpg";
import Midsummer1 from "@/assets/imgs/events/midsummer-1.jpg";
import Midsummer2 from "@/assets/imgs/events/midsummer-2.jpg";
import Midsummer3 from "@/assets/imgs/events/midsummer-3.jpg";

import { EventProps } from "@/types/eventProps";

export const events: EventProps[] = [
    {
        id: 1,
        title: "Norwegian Food Festival",
        date: "2024-05-15",
        description: "Join us for an authentic Norwegian food experience featuring traditional dishes and modern interpretations.",
        images: [
            {
                id: 1,
                src: NorvegianFoodFest1,
                alt: "Traditional Norwegian dishes display"
            },
            {
                id: 2,
                src: NorvegianFoodFest2,
                alt: "Chef preparing Norwegian specialties"
            },
            {
                id: 3,
                src: NorvegianFoodFest3,
                alt: "Festival atmosphere with dining guests"
            }
        ]
    },
    {
        id: 2,
        title: "Viking Theme Night",
        date: "2024-06-20",
        description: "Experience an evening of Viking culture with themed decorations, special menu items, and traditional entertainment.",
        images: [
            {
                id: 1,
                src: VikingNight1,
                alt: "Viking themed decorations"
            },
            {
                id: 2,
                src: VikingNight2,
                alt: "Traditional Viking feast setup"
            },
            {
                id: 3,
                src: VikingNight3,
                alt: "Viking entertainment performance"
            }
        ]
    },
    {
        id: 3,
        title: "Midsummer Celebration",
        date: "2024-06-24",
        description: "Celebrate the Norwegian Midsummer with traditional festivities, special cocktails, and live music.",
        images: [
            {
                id: 1,
                src: Midsummer1,
                alt: "Midsummer decoration and setup"
            },
            {
                id: 2,
                src: Midsummer2,
                alt: "Special midsummer cocktails"
            },
            {
                id: 3,
                src: Midsummer3,
                alt: "Live music performance"
            }
        ]
    },
    {
        id: 4,
        title: "Scandinavian Seafood Night",
        date: "2024-07-10",
        description: "A seafood extravaganza featuring the freshest catches and Nordic-inspired preparations — oysters, salmon, and more.",
        images: [
            {
                id: 1,
                src: NorvegianFoodFest2,
                alt: "Seafood platter"
            },
            {
                id: 2,
                src: NorvegianFoodFest1,
                alt: "Chef plating seafood"
            },
            {
                id: 3,
                src: Midsummer2,
                alt: "Guests enjoying seafood"
            }
        ]
    },
    {
        id: 5,
        title: "Sami Music & Story Night",
        date: "2024-08-02",
        description: "An intimate evening of Sámi joik, storytelling, and cultural tastings — a celebration of northern Norway's heritage.",
        images: [
            {
                id: 1,
                src: VikingNight3,
                alt: "Traditional performance"
            },
            {
                id: 2,
                src: Midsummer3,
                alt: "Live music close-up"
            },
            {
                id: 3,
                src: VikingNight2,
                alt: "Cultural instruments"
            }
        ]
    },
    {
        id: 6,
        title: "Christmas Market Preview",
        date: "2024-11-28",
        description: "Get an early taste of the festive season — holiday treats, mulled drinks, gift stalls and seasonal live sets.",
        images: [
            {
                id: 1,
                src: NorvegianFoodFest3,
                alt: "Holiday market stalls"
            },
            {
                id: 2,
                src: Midsummer1,
                alt: "Festive lights and decor"
            },
            {
                id: 3,
                src: NorvegianFoodFest1,
                alt: "Seasonal treats"
            }
        ]
    },
    {
        id: 7,
        title: "Oktoberfest Pop-Up",
        date: "2024-10-12",
        description: "A lively Oktoberfest-inspired evening with craft beers, pretzels and hearty German-Nordic fusion plates.",
        images: [
            {
                id: 1,
                src: VikingNight1,
                alt: "Oktoberfest decorations"
            },
            {
                id: 2,
                src: NorvegianFoodFest2,
                alt: "Beer and food pairing"
            },
            {
                id: 3,
                src: VikingNight3,
                alt: "Live band performance"
            }
        ]
    },
    {
        id: 8,
        title: "Live Jazz & Cocktails",
        date: "2024-10-30",
        description: "Smooth live jazz sets paired with a special cocktail menu crafted for the evening — perfect for date nights.",
        images: [
            {
                id: 1,
                src: Midsummer3,
                alt: "Jazz performance"
            },
            {
                id: 2,
                src: NorvegianFoodFest3,
                alt: "Cocktail close-up"
            },
            {
                id: 3,
                src: VikingNight2,
                alt: "Evening crowd enjoying music"
            }
        ]
    },
    {
        id: 9,
        title: "Christmas Market Preview",
        date: "2024-11-28",
        description: "Get an early taste of the festive season — holiday treats, mulled drinks, gift stalls and seasonal live sets.",
        images: [
            {
                id: 1,
                src: NorvegianFoodFest3,
                alt: "Holiday market stalls"
            },
            {
                id: 2,
                src: Midsummer1,
                alt: "Festive lights and decor"
            },
            {
                id: 3,
                src: NorvegianFoodFest1,
                alt: "Seasonal treats"
            }
        ]
    },
        {
        id: 10,
        title: "Nordic Winter Tasting Night",
        date: "2024-12-14",
        description: "A cozy winter evening featuring Nordic comfort dishes, warming drinks, candlelight ambiance, and acoustic live music.",
        images: [
            {
                id: 1,
                src: NorvegianFoodFest1,
                alt: "Nordic winter comfort food"
            },
            {
                id: 2,
                src: VikingNight2,
                alt: "Candlelit winter table setup"
            },
            {
                id: 3,
                src: Midsummer1,
                alt: "Cozy winter atmosphere"
            }
        ]
    }
];