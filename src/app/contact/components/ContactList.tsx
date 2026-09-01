import { Box, Typography, Divider } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const faqs = [
	{
		question: "Are you available?",
		answer: "Open to new opportunities starting Q4 2026.",
	},
	{
		question: "How fast do you reply?",
		answer: "Within two working days.",
	},
	{
		question: "Do you take on smaller jobs?",
		answer: "I'm mainly looking for full-time positions, but always open to collaborations on smaller stuff too.",
	},
	{
		question: "Remote or onsite?",
		answer: "Remote across Europe, on site in Göteborg when it genuinely helps.",
	},
];

export default function ContactList() {
	return (
		<Box sx={{ py: 2, borderTop: "1px solid", borderColor: "text.primary", display: "flex", flexDirection: "column" }}>
			<Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary" }}>
					direct
				</Typography>
				<a href='mailto: rasmusbremholm@gmail.com'>
					<Typography variant='overline'>rasmusbremholm@gmail.com</Typography>
				</a>
			</Box>
			<Divider />
			<Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
				<Typography variant='overline' sx={{ textTransform: "uppercase", color: "text.tertiary" }}>
					elsewhere
				</Typography>
				<a href='www.github.com' target='_blank'>
					<Typography variant='overline' sx={{ display: "inline-flex", alignItems: "center", gap: 2, "&:hover": { color: "text.secondary" } }}>
						<GitHub fontSize='small' /> Github
					</Typography>
				</a>
				<a href='www.linkedin.com' target='_blank'>
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
				{faqs.map((faq) => (
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
