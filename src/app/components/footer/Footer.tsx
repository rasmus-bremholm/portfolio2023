import { Box, Typography, Container } from "@mui/material";
import Link from "next/link";

export default function Footer() {
	return (
		<Box component='footer' sx={{ borderTop: "1px solid", borderColor: "divider" }}>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(6, 1fr)",
						gap: "var(--grid-gap)",
						alignItems: "center",
						minHeight: "70px",
					}}>
					<Typography sx={{ fontSize: "0.8rem" }}>© 2026 Rasmus Bremholm</Typography>
				</Box>
			</Container>
		</Box>
	);
}
