import { AccordionProps } from "@/types/accordionProps";

export const navigationsParams: AccordionProps[] = [
    {
        id: 1,
        title: "Page",
        select: [
            {
                id: 1,
                name: "Reservation",
                link: "/reservation",
            },
            {
                id: 2,
                name: "Menu",
                link: "/menu",
            },
            {
                id: 3,
                name: "Cafe Krakow",
                link: "/cafe_1s",
            },
            {
                id: 4,
                name: "Cafe Gdansk",
                link: "/cafe_2",
            },
        ]
    },
    {
        id: 2,
        title: "Navigation",
        select: [
            {
                id: 1,
                name: "Main",
                link: "main",
            },
            {
                id: 2,
                name: "Gallery",
                link: "gallery",
            },
            {
                id: 3,
                name: "Events",
                link: "events",
            },
            {
                id: 4,
                name: "Location",
                link: "location",
            },
        ]
    }
]