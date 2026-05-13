import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    robots: "noindex, nofollow",
    title: "Muhammad Moon | Frontend Developer",
    description: "Portfolio of Muhammad Moon, a passionate frontend developer and designer.",

    openGraph: {
        title: "Muhammad Moon | Frontend Developer",
        description: "Portfolio of Muhammad Moon, a passionate frontend developer and designer.",
        url: "#",
        images: [
            {
                url: "#",
            },
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
