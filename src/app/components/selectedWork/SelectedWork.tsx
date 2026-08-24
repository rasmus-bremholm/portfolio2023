import { fetchFeaturedProject } from "@/sanity/lib/client";
import Link from "next/link";
import { Container, Box, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

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
					<Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 300px" } }}>
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
							<Box sx={{ display: "flex", justifyContent: "space-between", pb: "10px", borderBottom: "1px solid", borderColor: "#d5d8d5" }}>
								<Typography variant='body2'>Repository</Typography>
								<a href={featuredProject.githubUrl}>
									<Typography
										sx={{
											display: "inline-flex",
											gap: 1,
											alignItems: "center",
											fontWeight: 500,
											transition: "color 0.2s ease",
											"&:hover": {
												color: "text.darkMuted",
											},
										}}
										variant='body2'>
										Github <GitHub />
									</Typography>
								</a>
							</Box>
							{featuredProject.liveUrl && (
								<Box sx={{ display: "flex", justifyContent: "space-between", pb: "10px", borderBottom: "1px solid", borderColor: "#d5d8d5" }}>
									<Typography variant='body2'>Deployed</Typography>
									<a href={featuredProject.liveUrl}>
										<Typography
											sx={{
												display: "inline-flex",
												gap: 1,
												alignItems: "center",
												fontWeight: 500,
												transition: "color 0.2s ease",
												"&:hover": {
													color: "text.tertiary",
												},
											}}
											variant='body2'>
											Live URL
										</Typography>
									</a>
								</Box>
							)}
							<Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
								<Link href={`/projects/${featuredProject.slug.current}`}>
									<Typography
										variant='overline'
										sx={{
											fontWeight: 600,
											fontSize: "13px",
											transition: "all 0.2s ease",
											color: "text.tertiary",
											"&:hover": {
												color: "text.primary",
											},
										}}>
										Read the case study
									</Typography>
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</Container>
	);
}
