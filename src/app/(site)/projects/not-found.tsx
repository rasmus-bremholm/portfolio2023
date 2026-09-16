import { Container, Typography, Button, Box } from "@mui/material";

export default function ProjectsNotFound() {
	return (
		<Container maxWidth='lg' sx={{ py: 8, display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-start" }}>
			<Typography variant='h1'>Project not found</Typography>
			<Typography variant='body1'>The project you&apos;re looking for doesn&apos;t exist or may have been moved.</Typography>
			<Box>
				<Button href='/projects'>Back to projects</Button>
			</Box>
		</Container>
	);
}
