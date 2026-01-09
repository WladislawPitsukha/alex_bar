import { CommonProps } from "@mui/material/OverridableComponent";
import { ClientProps } from "./clientProps";

export type CafeInfoProps = {
    id: number;
    title: string;
    info: {
        description: string;
        moreDesc: string;
        coolFacts: string;
    };
    city: string;
    address: string;
    connection: {
        phone: string;
        email: string;
    }
    socials?: {
        id: number;
        labelText: string;
        href: string;
    }[];
    time: {
        days: string;
        hours: string;
    };
    comments?: ClientProps[];
}