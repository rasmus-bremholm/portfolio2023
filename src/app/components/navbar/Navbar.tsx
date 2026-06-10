import { Box, Typography } from "@mui/material";
import NavBtn from "../buttons/NavBtn";

export default function Navbar() {
	return (
		<Box
			component='nav'
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				minHeight: "70px",
				borderBottom: "1px solid",
				borderColor: "divider",
				px: 5,
			}}>
			<Box>
				<Typography variant='overline'>R / BREMHOLM</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 1 }}>
				<NavBtn label='Index' href='/' index='01' />
				<NavBtn label='Index' href='/' index='01' />
			</Box>
		</Box>
	);
}
