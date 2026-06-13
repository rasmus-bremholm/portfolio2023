import { Box, Typography, Container } from "@mui/material";
import Link from "next/link";
import { GitHub, LinkedIn, EmailOutlined } from "@mui/icons-material";

const socialLinks = [
	{ id: 1, icon: <GitHub />, href: "https://github.com/rasmusbremholm" },
	{ id: 2, icon: <LinkedIn />, href: "https://github.com/rasmusbremholm" },
	{ id: 3, icon: <EmailOutlined />, href: "https://github.com/rasmusbremholm" },
];

export default function Footer() {
	return (
		<Box component='footer' sx={{ borderTop: "1px solid", borderColor: "divider", bgcolor: "background.default", zIndex: 1, position: "relative" }}>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(8, 1fr)",
						gap: "var(--grid-gap)",
						alignItems: "center",
						minHeight: "70px",
					}}>
					<Box sx={{ gridColumn: "span 2", display: "flex", justifyContent: "center" }}>
						<Typography variant='overline' sx={{ display: "flex", fontSize: "0.8rem" }}>
							© 2026 Rasmus Bremholm
						</Typography>
					</Box>
					<Box sx={{ gridColumn: "span 4", display: "flex", justifyContent: "flex-end", gap: 2 }}>
						{socialLinks.map((link) => (
							<Link key={link.id} href={link.href} target='_blank'>
								{link.icon}
							</Link>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
