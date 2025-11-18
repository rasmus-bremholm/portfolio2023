import { Container, Divider, Box, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
	return (
		<Container sx={{ bgcolor: "#111111" }}>
			<Divider />
			<Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
				<Box>© 2025 Rasmus Bremholm</Box>
				<Box sx={{ display: "flex", gap: 2 }}>
					<Tooltip title='GitHub' arrow>
						<IconButton
							component={Link}
							href='https://github.com/rasmus-bremholm'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my GitHub profile'
							size='small'>
							<GitHubIcon fontSize='small' />
						</IconButton>
					</Tooltip>
					<Tooltip title='LinkedIn' arrow>
						<IconButton
							component={Link}
							href='https://www.linkedin.com/in/rasmus-bremholm/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit my LinkedIn profile'
							size='small'>
							<LinkedInIcon fontSize='small' />
						</IconButton>
					</Tooltip>
					<Tooltip title='Email' arrow>
						<IconButton component={Link} href='mailto:rasmus.brem@gmail.com' aria-label='Send me an email' size='small'>
							<AlternateEmailIcon fontSize='small' />
						</IconButton>
					</Tooltip>
				</Box>
			</Box>
		</Container>
	);
}
