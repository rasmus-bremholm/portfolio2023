import { Box, Typography } from "@mui/material";

export default function ProjectsHero({ projectCount }: { projectCount: number | undefined }) {
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
					WORK· {projectCount} PROJECTS
				</Typography>
				<Typography
					sx={{
						maxWidth: "800px",
						textWrap: "balance",
						fontWeight: 400,
					}}
					variant='h1'>
					Software I built because something needed solving.
				</Typography>
			</Box>
			<Box>
				<Typography variant='body1' sx={{ textWrap: "pretty", fontSize: "16px", lineHeight: 1.5 }}>
					Some of it shipped to real users. Some of it just needed to exist so I&apos;d stop thinking about it. Both count.
				</Typography>
			</Box>
		</Box>
	);
}
