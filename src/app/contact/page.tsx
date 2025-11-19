import type { Metadata } from "next";
import { Container, Box, Typography, Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Phone, Person, LocationCity, Mail } from "@mui/icons-material";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with Rasmus Bremholm for freelance work, collaboration, or just to say hello.",
	openGraph: {
		title: "Contact | Rasmus Bremholm",
		description: "Get in touch with Rasmus Bremholm for freelance work, collaboration, or just to say hello.",
		url: "https://www.rasmusbremholm.com/contact",
		type: "website",
	},
};

export default function ContactPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact Rasmus Bremholm",
		description: "Get in touch with Rasmus Bremholm",
		url: "https://www.rasmusbremholm.com/contact",
		mainEntity: {
			"@type": "Person",
			name: "Rasmus Bremholm",
			email: "rasmus.brem@gmail.com",
			telephone: "+46762693031",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Göteborg",
				addressCountry: "SE",
			},
		},
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Container maxWidth='md' sx={{ pt: 8 }}>
			<Typography variant='h1' sx={{ mb: 1, fontSize: 120 }}>
				Get in touch
			</Typography>
			<Box>
				<Typography variant='body1' sx={{ pb: 1, fontSize: 20 }}>
					Looking for a fullstack developer who acctually ships? Then let&apos;s build something together!
				</Typography>
				<Typography variant='body1' sx={{ pb: 1, fontSize: 20 }}>
					I&apos;m always looking for new ways to connect and work on stuff together, both professionaly and more casual side projects.
				</Typography>
				<Typography variant='body1' sx={{ pb: 4, fontSize: 20 }}>
					You can always reach out to me, even if its a question or if you want to collaborate with me.
				</Typography>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
					gap: 4,
					alignItems: "top",
				}}>
				<Box>
					<a
						href='mailto:rasmus.brem@gmail.com'
						style={{
							color: "inherit",
							textDecoration: "none",
						}}>
						<Typography
							sx={{
								fontSize: { xs: 32, sm: 40, md: 48 },
								fontFamily: "Lato, sans-serif",
								fontWeight: 400,
								transition: "color 0.2s",
								"&:hover": {
									color: "primary.main",
								},
								wordBreak: "break-word",
							}}>
							rasmus.brem@gmail.com
						</Typography>
					</a>

					{/* Social icons will go here */}
					<Box sx={{ display: "flex", gap: 1, mt: 3 }}>
						<Tooltip title='Github'>
							<IconButton
								component={Link}
								href='https://github.com/rasmus-bremholm'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Visit my Github profile'
								size='large'>
								<GitHubIcon fontSize='large' />
							</IconButton>
						</Tooltip>
						<Tooltip title='Linkedin'>
							<IconButton
								component={Link}
								href='https://www.linkedin.com/in/rasmus-bremholm/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Visit my Linkedin profile'
								size='large'>
								<LinkedInIcon fontSize='large' />
							</IconButton>
						</Tooltip>
					</Box>
				</Box>

				<Box
					sx={{
						width: "100%",
						aspectRatio: "1/1",
						backgroundColor: "grey.800",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Typography>Photo</Typography>
				</Box>
				<Box
					sx={{
						border: "1px solid",
						borderColor: "divider",
						gridColumn: "span 2",
						p: 2,
						borderRadius: 1,
					}}>
					<Typography variant='h6' sx={{ mb: 2, fontSize: 24 }}>
						Contact Information
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Person fontSize='small' sx={{ color: "text.secondary" }} />
							<Typography>Rasmus Bremholm</Typography>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<LocationCity fontSize='small' sx={{ color: "text.secondary" }} />
							<Typography>Göteborg, Sweden</Typography>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Mail fontSize='small' sx={{ color: "text.secondary" }} />
							<Link href='mailto:rasmus.brem@gmail.com' style={{ color: "inherit" }}>
								rasmus.brem@gmail.com
							</Link>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
							<Phone fontSize='small' sx={{ color: "text.secondary" }} />
							<Link href='tel:+46762693031' style={{ color: "inherit" }}>
								(+46) 762 69 30 31
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
		</>
	);
}
