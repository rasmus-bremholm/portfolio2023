"use client";
import { ProjectPreview } from "@/types/sanity/projectpage";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Chip, Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/sanityImageUrl";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface ProjectListProps {
	posts: ProjectPreview[];
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delay: 0.8,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function ProjectsList({ posts }: ProjectListProps) {
	return (
		<Container>
			<Grid container spacing={2} component={motion.div} variants={container} initial='hidden' animate='show'>
				{posts?.map((post) => (
					<Grid size={{ xs: 12, md: 6 }} key={post._id}>
						<Card sx={{ border: "1px solid transparent", "&:hover": { borderColor: "primary.main" } }} component={motion.div} variants={item}>
							{post.featuredImage && <CardMedia sx={{ height: 200 }} image={urlFor(post.featuredImage).width(600).url()} />}
							<CardContent sx={{ p: 3 }}>
								<Link href={`/projects/${post.slug.current}`} style={{ textDecoration: "none", color: "inherit" }}>
									<Typography
										variant='h4'
										sx={{
											fontSize: { xs: 32, sm: 48, md: 60 },
											textDecoration: "none",
											transition: "color 0.2s",
											"&:hover": {
												color: "primary.main",
												cursor: "pointer",
											},
										}}>
										{post.title}
									</Typography>
								</Link>

								<Typography sx={{ color: "text.secondary", opacity: 0.9, mb: 1 }}>{post.description}</Typography>
								<Box sx={{ textTransform: "capitalize", my: 2, display: "flex", gap: 1 }}>
									{post.technologies.map((tag) => (
										<Chip variant='outlined' size='small' key={tag} label={tag} sx={{ px: 1 }} />
									))}
								</Box>
								<CardActions sx={{ display: "flex", justifyContent: "space-between", p: 0, gap: 2 }}>
									{post.liveUrl && (
										<Button
											variant='contained'
											href={post.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`Live demo of ${post.title}`}
											startIcon={<LaunchIcon />}>
											Live Demo
										</Button>
									)}
									{post.githubUrl && (
										<Button
											variant='outlined'
											href={post.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`Github Repo of ${post.title}`}
											startIcon={<GitHubIcon />}>
											Github Repo
										</Button>
									)}
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
