import { Box, Typography } from "@mui/material";

export default function ContactHero() {
	return (
		<Box
			component='header'
			sx={{
				display: "grid",
				gridTemplateColumns: { xs: "1fr", sm: "1fr 300px" },
				gap: "80px",
				alignItems: "end",
				pb: "36px",
				borderBottom: "1px solid",
				borderColor: "divider",
			}}>
			<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
				<Typography
					sx={{
						maxWidth: "800px",
						textWrap: "balance",
						fontWeight: 400,
					}}
					variant='h1'>
					Tell me what you are building.
				</Typography>
			</Box>
			<Box>
				<Typography variant='body1' sx={{ textWrap: "pretty", fontSize: "16px", lineHeight: 1.5 }}>
					Im always looking for new oppurtunities and experiences, so lets connect and talk about what you are building. A few sentences are plenty.
				</Typography>
			</Box>
		</Box>
	);
}
