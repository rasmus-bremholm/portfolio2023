import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { Newsreader, Spectral, Hanken_Grotesk, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./global.css";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Rasmus Bremholm",
		template: "%s | Rasmus Bremholm",
	},
	description: "Fullstack developer & teacher.",
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
					<Navbar />
					{/* TODO: Add Navbar here */}
					<main>{children}</main>
					{/* TODO: Add Footer here */}
				</ThemeRegistry>
			</body>
		</html>
	);
}
