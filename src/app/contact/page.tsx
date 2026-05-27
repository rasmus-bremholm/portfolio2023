import { Container, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch.",
};

export default function ContactPage() {
	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Typography variant='h1' sx={{ mb: 4 }}>
				Contact
			</Typography>
			<Typography color='text.secondary'>
				{/* TODO: Add contact form or contact details */}
				This page is under construction.
			</Typography>
		</Container>
	);
}
