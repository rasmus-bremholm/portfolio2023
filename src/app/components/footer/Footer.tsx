import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
	return (
		<Box component='footer' sx={{ display: "flex", alignItems: "center", minHeight: "70px", px: 20, borderTop: "1px solid", borderColor: "divider" }}>
			<Typography sx={{ fontSize: "0.8rem" }}>© 2026 Rasmus Bremholm</Typography>
		</Box>
	);
}
