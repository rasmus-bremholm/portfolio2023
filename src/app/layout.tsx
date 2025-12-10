import type { Metadata } from "next";
import Footer from "./components/surfaces/footer/Footer";
import Navbar from "./components/surfaces/navbar/Navbar";
import ThemeRegistry from "./ThemeRegistry";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.rasmusbremholm.com"),
	title: {
		default: "Rasmus Bremholm | Fullstack Developer",
		template: "%s | Rasmus Bremholm",
	},
	description:
		"Portfolio of Rasmus Bremholm, a fullstack developer based in Göteborg, Sweden who builds production-ready applications. Currently interning at Volvo Connected Solutions.",
	openGraph: {
		title: "Rasmus Bremholm | Fullstack Developer",
		description: "Portfolio of Rasmus Bremholm, a fullstack developer based in Göteborg, Sweden who builds production-ready applications.",
		url: "https://www.rasmusbremholm.com",
		siteName: "Rasmus Bremholm",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rasmus Bremholm Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rasmus Bremholm | Fullstack Developer",
		description: "Portfolio of Rasmus Bremholm, a fullstack developer based in Göteborg, Sweden who builds production-ready applications.",
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					<Navbar />
					{children}
					<Footer />
				</ThemeRegistry>
				<Analytics />
			</body>
		</html>
	);
}
