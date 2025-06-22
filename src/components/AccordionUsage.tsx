"use client"

import { AccordionProps } from "@/app/types/accordionProps";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import Link from "next/link";

import { MdExpandMore } from "react-icons/md";
import { useState } from "react";

export default function AccordionUsage({
    id,
    title,
    select
}: AccordionProps) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const handleChange = (event: React.SyntheticEvent, isExpended: boolean) => {
        setExpanded(isExpended);
    };
    return(
        <Accordion
            key={id}
            className="border-none"
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
                className="duration-200 border-none cursor-pointer hover:bg-gray-50"
            >
                <Typography 
                    className="text-black font-medium text-lg"
                    component="span"
                >
                    {title}
                </Typography>
            </AccordionSummary>
            {select.map((obj, index) => (
                <AccordionDetails
                    key={index}
                    className=""
                >
                    <Link 
                        key={obj.id}
                        href={obj.link}
                        className="block transition-colors duration-200 rounded-md p-2"
                    >
                        <h3 className="hover:text-foreground text-base text-black">
                            {obj.name}
                        </h3>
                    </Link>
                </AccordionDetails>
            ))}
        </Accordion>
    )
}