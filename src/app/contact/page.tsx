import { Container, Divider, Box } from "@mui/material";
import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch.",
};

export default function ContactPage() {
	return (
		<>
			<Container maxWidth='lg' sx={{ py: 8 }}>
				<ContactHero />
			</Container>
			<Divider />
			<Container maxWidth='lg' sx={{ py: 8, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 300px" }, gap: "80px", alignItems: "start" }}>
				<ContactForm />
				<ContactList />
			</Container>
		</>
	);
}
