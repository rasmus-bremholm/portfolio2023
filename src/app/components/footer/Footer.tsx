"use client";

import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import packageJson from "@root/package.json";
import Link from "next/link";
import { backgroundBlurriness } from "three/tsl";

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{
				color: "text.darkText",
				bgcolor: "background.dark",
				py: "clamp(32px, 3.9vw, 56px)",
			}}>
			<Container
				maxWidth='lg'
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "minmax(0, 500px) 300px" },
					gap: "clamp(32px, 4vw, 60px)",
					alignItems: "start",
				}}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2, justifyContent: "flex-start" }}>
					<Typography variant='body2' sx={{ color: "text.darkMuted" }}>
						CONTACT
					</Typography>
					<Typography sx={{ color: "inherit" }} variant='h2'>
						Tell me what you are building.
					</Typography>
					<Typography sx={{ color: "inherit" }} variant='overline'>
						v.{packageJson.version}
					</Typography>
					<Typography sx={{ color: "text.darkMuted" }} variant='overline'>
						© 2026 Rasmus Bremholm
					</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2, justifyContent: "flex-start" }}>
					<a href='mailto:rasmusbremholm@gmail.com'>
						<Typography sx={{ color: "text.darkMuted" }} variant='body2'>
							rasmusbremholm@gmail.com
						</Typography>
					</a>
					<Box>
						<IconButton
							href='/'
							color='inherit'
							sx={{
								transition: "all 0.2s ease",
								"&:hover": {
									color: "text.darkMuted",
								},
							}}>
							<GitHub />
						</IconButton>
						<IconButton
							href='/'
							color='inherit'
							sx={{
								transition: "all 0.2s ease",
								"&:hover": {
									color: "text.darkMuted",
								},
							}}>
							<LinkedIn />
						</IconButton>
					</Box>
					<Button LinkComponent={Link} href='/contact'>
						Get in touch
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
