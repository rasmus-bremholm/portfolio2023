import { Box, Typography, Button } from "@mui/material";
export default function Hero() {
	return (
		<Box sx={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "var(--grid-gap)", alignItems: "center", mb: 8 }}>
			<Box sx={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Role
				</Typography>
				<Typography variant='overline'>Fullstack Developer</Typography>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Status
				</Typography>
				<Typography variant='overline' sx={{ color: "primary.main" }}>
					● Avalible Q3 2026
				</Typography>
			</Box>

			<Box sx={{ gridColumn: "span 8" }}>
				<Typography variant='h1'>Rasmus Bremholm</Typography>
			</Box>
			<Box sx={{ display: "flex", gridColumn: "span 8" }}>
				<Typography variant='h2'>Exploring Areas where tech and artistry meet</Typography>
				<Typography variant='overline'>A Swedish Fullstack Developer specializing in creating optimized and scalable Javascript</Typography>
			</Box>
			<Box sx={{ display: "flex", gridColumn: "span 8" }}>
				<Button>Selected Work</Button>
				<Button>Get In Touch</Button>
			</Box>
		</Box>
	);
}
