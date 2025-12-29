"use client"

import { AccordionProps } from "@/types/accordionProps";
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

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded);
    };

    return (
        <Accordion
            key={id}
            expanded={expanded}
            onChange={handleChange}
            className="relative h-12 overflow-visible border-none" // fixed height, allow dropdown overflow
        >
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
                className="h-12 flex items-center px-2 cursor-pointer border-none"
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
                    className="absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg z-50 min-w-[160px] p-0"
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
    );
}