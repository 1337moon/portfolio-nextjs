import type { Metadata } from "next";
import { Oswald, Nunito_Sans } from "next/font/google";
import "./globals.css";const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    robots: "noindex, nofollow",
    title: "Jane Doe | Frontend Developer",
    description: "Portfolio of Jane Doe, a passionate frontend developer and designer.",

    openGraph: {
        title: "Jane Doe | Frontend Developer",
        description: "Portfolio of Jane Doe, a passionate frontend developer and designer.",
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
                className={`${oswald.variable} ${nunitoSans.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
