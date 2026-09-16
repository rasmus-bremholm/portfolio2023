import type { Metadata } from "next";
import { Container, Typography, Button, Box } from "@mui/material";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "@/app/global.css";
import ThemeRegistry from "@/app/(site)/ThemeRegistry";

const newsreader = Newsreader({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-newsreader",
});

const hanken = Hanken_Grotesk({
	subsets: ["latin"],
	variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
	title: "Page Not Found",
	description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
	return (
		<html lang='en' className={`${newsreader.variable} ${hanken.variable}`}>
			<body>
				<ThemeRegistry>
					<Container
						maxWidth='lg'
						sx={{ py: 8, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", gap: 3, alignItems: "flex-start" }}>
						<Typography variant='h1'>Page not found</Typography>
						<Typography variant='body1'>The page you&apos;re looking for doesn&apos;t exist.</Typography>
						<Box>
							<Button href='/'>Back to home</Button>
						</Box>
					</Container>
				</ThemeRegistry>
			</body>
		</html>
	);
}
