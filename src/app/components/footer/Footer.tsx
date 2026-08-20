"use client";

import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import packageJson from "@root/package.json";
import Link from "next/link";
import { backgroundBlurriness } from "three/tsl";

export default function Footer() {
	return (
		<Box component='footer'>
			<Container maxWidth='lg' sx={{ display: "flex", bgcolor: "background.dark" }}>
				<Box>
					<Typography variant='body2'>CONTACT</Typography>
					<Typography variant='h3'>Tell me what you are building.</Typography>
					<Typography variant='overline'>v.{packageJson.version}</Typography>
					<Typography variant='overline'>© 2026 Rasmus Bremholm</Typography>
				</Box>
				<Box>
					<a href='mailto:rasmusbremholm@gmail.com'>
						<Typography variant='body2'>rasmusbremholm@gmail.com</Typography>
					</a>
					<Box>
						<IconButton href=''>
							<GitHub />
						</IconButton>
						<IconButton href=''>
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
