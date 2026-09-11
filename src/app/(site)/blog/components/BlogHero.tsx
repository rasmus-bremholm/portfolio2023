import { Box, Typography } from "@mui/material";

export default function BlogHero({ postCount }: { postCount: number | undefined }) {
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
				<Typography sx={{ mb: "28px" }} variant='overline'>
					BLOG · {postCount} POSTS
				</Typography>
				<Typography
					sx={{
						maxWidth: "800px",
						textWrap: "balance",
						fontWeight: 400,
					}}
					variant='h1'>
					Notes on building, teaching, and shipping.
				</Typography>
			</Box>
			<Box>
				<Typography variant='body1' sx={{ textWrap: "pretty", fontSize: "16px", lineHeight: 1.5 }}>
					Thoughts on web development, education, and the occasional detour.
				</Typography>
			</Box>
		</Box>
	);
}
