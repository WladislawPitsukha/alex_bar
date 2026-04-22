"use client"

import { AccordionProps } from "@/types/accordionProps";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";

const dropdownGradients = [
    "from-pink-500 via-red-400 to-yellow-300",
    "from-blue-500 via-cyan-400 to-green-300",
    "from-purple-500 via-fuchsia-400 to-pink-300",
];

export default function AccordionUsage({
    id,
    title,
    select
}: AccordionProps) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const gradient = dropdownGradients[(id - 1) % dropdownGradients.length];

    const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded);
    };

    const isPageLink = (link: string) => link.startsWith("/");

    const handleScrollTo = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setExpanded(false);
        }
    };

    return (
        <Accordion
            key={id}
            expanded={expanded}
            onChange={handleChange}
            sx={{
                background: "transparent",
                boxShadow: "none",
                "&::before": { display: "none" },
            }}
            className="relative h-12 overflow-visible border-none"
        >
            <AccordionSummary
                expandIcon={<MdExpandMore className="text-white" />}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
                className="h-12 flex items-center px-3 cursor-pointer border-none rounded-full"
                sx={{
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    borderRadius: "9999px",
                    transition: "all 0.2s",
                }}
            >
                <Typography
                    className="text-white font-bold text-lg tracking-wide drop-shadow"
                    component="span"
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                className={`absolute left-0 top-full mt-2 bg-gradient-to-br ${gradient} animate-gradient-move rounded-xl shadow-2xl z-50 min-w-[180px] p-1 border border-white/20 flex flex-col gap-1`}
            >
                {select.map((obj) =>
                    isPageLink(obj.link) ? (
                        <Link
                            key={obj.id}
                            href={obj.link}
                            className="block transition-all duration-200 rounded-lg p-3 hover:bg-black/30"
                        >
                            <h3 className="text-base font-semibold text-white drop-shadow">
                                {obj.name}
                            </h3>
                        </Link>
                    ) : (
                        <button
                            key={obj.id}
                            onClick={() => handleScrollTo(obj.link)}
                            className="block w-full text-left transition-all duration-200 rounded-lg p-3 hover:bg-black/30"
                        >
                            <h3 className="text-base font-semibold text-white drop-shadow">
                                {obj.name}
                            </h3>
                        </button>
                    )
                )}
            </AccordionDetails>
        </Accordion>
    );
}