import { fetchFeaturedProject, fetchHomepageSections, fetchSelectedWork } from "@/sanity/lib/client";
import { Container, Box, Typography } from "@mui/material";

export default async function SelectedWork() {
	const featuredProject = await fetchFeaturedProject();

	return (
		<Container maxWidth='lg' sx={{ py: "60px" }}>
			<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: "26px" }}>
				<Typography variant='h3'>Selected Work</Typography>
				<Typography variant='overline'>highlighted projects</Typography>
			</Box>
			{featuredProject && (
				<Box>
					<Box
						sx={{
							height: "400px",
							background: "repeating-linear-gradient(90deg,#e2e5e3 0 7px,#eaece9 7px 14px)",
							display: "flex",
							mb: "26px",
						}}
					/>
					<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 500px) 300px" } }}>
						<Box>
							<Typography variant='overline'>
								{new Date(`${featuredProject.publishedAt}`).toLocaleDateString("sv-SE", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</Typography>
							<Typography variant='h2'>{featuredProject.title}</Typography>
							<Typography variant='body1'>{featuredProject.description}</Typography>
						</Box>
						<Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
							<Box sx={{ display: "flex", justifyContent: "space-between", pb: "10px", borderBottom: "1px solid", borderColor: "#d5d8d5" }}>
								<Typography variant='body2'>Stack</Typography>
								<Typography variant='body2'>
									{featuredProject.technologies.map((tech, index) => (
										<span key={index}> {tech} </span>
									))}
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Container>
	);
}
