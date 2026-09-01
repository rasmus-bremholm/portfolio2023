import { Container } from "@mui/material";
import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch.",
};

export default function ContactPage() {
	return (
		<Container maxWidth='lg' sx={{ py: 8 }}>
			<ContactHero />
		</Container>
		
	);
}
