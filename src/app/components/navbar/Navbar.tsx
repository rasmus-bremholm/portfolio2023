import { Container, Box, Typography } from "@mui/material";

export default function Navbar() {
	return (
		<Box sx={{ borderBottom: "1px solid", position: "sticky", top: 0 }}>
			<Container component='nav' sx={{ py: "22px" }}>
				<Box>
					<Typography variant='body2' sx={{ textTransform: "uppercase", letterSpacing: "0.24em", fontSize: "11px" }}>
						Rasmus Bremholm
					</Typography>
				</Box>
				<Box></Box>
			</Container>
		</Box>
	);
}
