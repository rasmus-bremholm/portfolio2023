import { Container, Typography, Button, Box } from "@mui/material";

export default function BlogNotFound() {
	return (
		<Container maxWidth='lg' sx={{ py: 8, display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-start" }}>
			<Typography variant='h1'>Post not found</Typography>
			<Typography variant='body1'>The post you&apos;re looking for doesn&apos;t exist or may have been moved.</Typography>
			<Box>
				<Button href='/blog'>Back to blog</Button>
			</Box>
		</Container>
	);
}
