import { Box, Typography, Divider } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import { fetchSiteSettings } from "@/sanity/lib/client";

export default async function ContactList() {
	const settings = await fetchSiteSettings();

	return (
		<Box sx={{ py: 2, borderTop: "1px solid", borderColor: "text.primary", display: "flex", flexDirection: "column" }}>
			<Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary" }}>
					direct
				</Typography>
				<a href={`mailto:${settings.email}`}>
					<Typography variant='overline'>{settings.email}</Typography>
				</a>
			</Box>
			<Divider />
			<Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary" }}>
					elsewhere
				</Typography>
				<a href={settings.githubUrl} target='_blank' rel='noopener noreferrer'>
					<Typography variant='overline' sx={{ display: "inline-flex", alignItems: "center", gap: 2, "&:hover": { color: "text.secondary" } }}>
						<GitHub fontSize='small' /> Github
					</Typography>
				</a>
				<a href={settings.linkedinUrl} target='_blank' rel='noopener noreferrer'>
					<Typography variant='overline' sx={{ display: "inline-flex", alignItems: "center", gap: 2, "&:hover": { color: "text.secondary" } }}>
						<LinkedIn fontSize='small' /> Linkedin
					</Typography>
				</a>
			</Box>
			<Divider />
			<Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary" }}>
					cv
				</Typography>
				<Link href='/CV-Rasmus-Bremholm-2024.pdf' aria-label='Download Rasmus Bremholm CV as PDF' download={true}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							border: "1px solid",
							px: 2,
							py: 1,
							"&:hover": {
								bgcolor: "background.paper",
							},
						}}>
						<Typography variant='body1'>Download CV</Typography>
						<Typography variant='overline' sx={{ fontSize: "0.7rem", color: "text.tertiary" }}>
							PDF 240KB
						</Typography>
					</Box>
				</Link>
			</Box>
			<Divider />
			<Box sx={{ display: "flex", flexDirection: "column", py: 2, gap: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary", fontFamily: "var(--font-hanken-grotesk)" }}>
					before you write
				</Typography>
				{settings.faqs.map((faq) => (
					<Box key={faq.question} sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
						<Typography variant='body2' sx={{ fontWeight: 600, fontFamily: "var(--font-hanken-grotesk)" }}>
							{faq.question}
						</Typography>
						<Typography variant='body2' sx={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 400 }}>
							{faq.answer}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
