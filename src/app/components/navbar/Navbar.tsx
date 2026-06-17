import { Box, Container, Typography } from "@mui/material";
import NavBtn from "../buttons/NavBtn";
import Link from "next/link";

export default function Navbar() {
	return (
		<Box
			component='nav'
			sx={{
				borderBottom: "1px solid",
				borderColor: "divider",
				minHeight: "70px",
				bgcolor: "rgba(10,10,10,0.85)",
				backdropFilter: "blur(3px)",
				zIndex: 1,
				position: "sticky",
				top: 0,
			}}>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(6, 1fr)",
						gap: "var(--grid-gap)",
						alignItems: "center",
						minHeight: "70px",
					}}>
					<Box sx={{ gridColumn: "span 2" }}>
						<Link href='/'>
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
								<Typography variant='overline'>RB / BREMHOLM</Typography>
							</Box>
						</Link>
					</Box>
					<Box sx={{ gridColumn: "span 4", display: "flex", justifyContent: "flex-end", gap: 1 }}>
						<NavBtn label='Index' href='/' index='01' />
						<NavBtn label='Work' href='/projects' index='02' />
						<NavBtn label='Blog' href='/blog' index='03' />
						<NavBtn label='Contact' href='/contact' index='04' />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
