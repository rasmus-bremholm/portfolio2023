import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import { navbarLinks } from "@/app/consts/consts";

export default function Navbar() {
	return (
		<Box sx={{ borderBottom: "1px solid", position: "sticky", top: 0 }}>
			<Container component='nav' sx={{ py: "22px", display: "flex", justifyContent: "space-between" }}>
				<Box>
					<Link href={"/"}>
						<Typography variant='body2' sx={{ textTransform: "uppercase", letterSpacing: "0.24em", fontSize: "11px" }}>
							Rasmus Bremholm
						</Typography>
					</Link>
				</Box>
				<Box sx={{ display: "flex", gap: 2 }}>
					{navbarLinks.map((link) => (
						<Link key={link.id} href={link.href}>
							<Typography
								variant='body2'
								key={link.id}
								sx={{
									position: "relative",

									"&::after": {
										content: '""',
										position: "absolute",
										bottom: -4,
										left: 0,
										width: "0%",
										height: "1px",
										backgroundColor: "text.primary",
										transition: "width 0.3s ease",
									},
									"&:hover::after": {
										width: "100%",
									},
								}}>
								{link.title}
							</Typography>
						</Link>
					))}
				</Box>
			</Container>
		</Box>
	);
}
