import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

const links = [
	{ id: 1, title: "Projects" },
	{ id: 2, title: "Blog" },
	{ id: 3, title: "Contact" },
];

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
					{links.map((l) => (
						<Link key={l.id} href={l.title.toLocaleLowerCase()}>
							<Typography
								variant='body2'
								key={l.id}
								sx={{
									borderBottom: "1px solid transparent",
									transition: "all 0.3s ease",
									"&:hover": {
										borderBottom: "1px solid",
									},
								}}>
								{l.title}
							</Typography>
						</Link>
					))}
				</Box>
			</Container>
		</Box>
	);
}
