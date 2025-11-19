import { Container, Box, Typography } from "@mui/material";

export default function ContactPage() {
	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Typography variant='h1' sx={{ mb: 6, fontSize: 92 }}>
				Get in touch
			</Typography>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
					gap: 4,
					alignItems: "center",
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
			</Box>
		</Container>
	);
}
