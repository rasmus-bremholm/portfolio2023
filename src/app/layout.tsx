import type { Metadata } from "next";
import Footer from "./components/surfaces/footer/Footer";
import Navbar from "./components/surfaces/navbar/Navbar";
import ThemeRegistry from "./ThemeRegistry";

export const metadata = {
	title: "Rasmus Bremholm | Portfolio",
	description:
		"Rasmus Bremholm | Fullstack Developer from Gothenburg Sweden. I specialise in Web Development but im also a skilled 3D Artist, feel free to reach out to me!",
	openGraph: {
		title: "Rasmus Bremholm | Frontend Portfolio",
		description: "Fullstack developer from Göteborg, Sweden. I love exploring areas where technology and artistry meet.",
		url: "https://www.rasmusbremholm.com",
		siteName: "Rasmus Bremholm Portfolio",
		images: [
			{
				url: "https://www.rasmusbremholm.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rasmus Bremholm Portfolio Banner",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rasmus Bremholm | Frontend Developer",
		description: "Fullstack developer from Göteborg, Sweden. I love exploring areas where technology and artistry meet.",
		images: [
			{
				url: "https://www.rasmusbremholm.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Rasmus Bremholm Portfolio Banner",
			},
		],
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
			</body>
		</html>
	);
}
