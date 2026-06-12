import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { Archivo, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GridOverlay from "./components/grid/GridOverlay";
import "./global.css";

export const metadata: Metadata = {
	title: {
		default: "Rasmus Bremholm",
		template: "%s | Rasmus Bremholm",
	},
	description: "Fullstack developer & teacher.",
};

const archivo = Archivo({
	subsets: ["latin"],
	weight: ["400", "500", "700", "800", "900"],
	variable: "--font-archivo",
});

const interTight = Inter_Tight({
	subsets: ["latin"],
	variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${archivo.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
				<ThemeRegistry>
					{/* TODO: Add Navbar here */}
					<Navbar />
					<main>{children}</main>
					<GridOverlay />
					{/* TODO: Add Footer here */}
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
