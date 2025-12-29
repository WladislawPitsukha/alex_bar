import { LinksFotProps } from "@/types/linksFotProps";
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const linksFot: LinksFotProps[] = [
    { 
        id: 1, 
        labelText: "Instagram", 
        icon: FaInstagram, 
        href: "https://instagram.com" 
    },
    { 
        id: 2, 
        labelText: "Facebook",  
        icon: FaFacebookF, 
        href: "https://facebook.com" 
    },
    { 
        id: 3, 
        labelText: "Twitter",   
        icon: FaTwitter, 
        href: "https://twitter.com" 
    },
    { 
        id: 4, 
        labelText: "Email",     
        icon: FaEnvelope, 
        href: "mailto:hello@alexbar.com" 
    },
]