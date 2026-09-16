import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { Newsreader, Spectral, Hanken_Grotesk, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "@/app/global.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo/site";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
};

const newsreader = Newsreader({
	subsets: ["latin"],
	weight: ["400", "500", "700", "800"],
	variable: "--font-newsreader",
});

const spectral = Spectral({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "700"],
	variable: "--font-spectral",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

const hanken = Hanken_Grotesk({
	subsets: ["latin"],
	variable: "--font-hanken-grotesk",
});

const ibm = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "700"],
	variable: "--font-ibm",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${newsreader.variable} ${spectral.variable} ${jetbrainsMono.variable} ${hanken.variable} ${ibm.variable}`}>
				<ThemeRegistry>
					<a href='#main-content' className='skip-link'>Skip to main content</a>
					<Navbar />
					<main id='main-content'>{children}</main>
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
