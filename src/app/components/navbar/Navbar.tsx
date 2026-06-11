import { Box, Typography } from "@mui/material";
import NavBtn from "../buttons/NavBtn";
import Link from "next/link";

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
				px: 20,
			}}>
			<Link href={"/"}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Box
						aria-hidden='true'
						sx={{
							width: 10,
							height: 10,
							bgcolor: "primary.main",
							flexShrink: 0,
							"&:hover": { bgcolor: "primary.light" },
						}}
					/>
					<Typography variant='overline'>R / BREMHOLM</Typography>
				</Box>
			</Link>
			<Box sx={{ display: "flex", gap: 1 }}>
				<NavBtn label='Index' href='/' index='01' />
				<NavBtn label='Work' href='/projects' index='02' />
				<NavBtn label='Blog' href='/blog' index='03' />
				<NavBtn label='Contact' href='/contact' index='04' />
			</Box>
		</Box>
	);
}
