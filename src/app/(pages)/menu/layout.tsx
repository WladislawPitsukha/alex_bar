//TODO: add layout full-component's details of menu's page
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex's bar | Menu",
    description:
    "Alex's Bar in Poland: cozy Nordic atmosphere, signature cocktails, fresh dishes, live events, and easy table reservations.",
    keywords: [
        "Alex's Bar",
        "Nordic bar",
        "cozy cafe",
        "Warsaw bar",
        "cocktails",
        "reservation",
        "live music",
    ],
    openGraph: {
        title: "Alex's Bar | Main Page",
        description:
        "Discover Nordic flavors, cocktails, events, and a warm atmosphere at Alex's Bar.",
        type: "website",
        locale: "en_US",
        siteName: "Alex's Bar",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alex's Bar | Main Page",
        description:
        "Nordic taste, cozy vibes, cocktails, events, and reservations at Alex's Bar.",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return(
        <html lang="en">
            <body
                className={`${geistMono.variable} ${geistSans.variable}`}
            >
                {children}
            </body>
        </html>
    )
}