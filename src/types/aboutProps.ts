import { CommonProps } from "@mui/material/OverridableComponent";
import { ClientProps } from "./clientProps";

export type CafeInfoProps = {
    id: number;
    title: string;
    info: {
        descr: string;
        moreDesc: string;
        coolFacts: string;
    };
    address: string;
    networks: {
        email: string;
        phone: string;
        socials: {
            id: number;
            labelText: string;
            href: string;
        }[];
    };
    time: {
        days: string;
        hours: string;
    };
    comments: ClientProps[];
}