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

export default function ProjectsList({ posts }: ProjectListProps) {
	return (
		<Container>
			<Grid container spacing={2}>
				{posts.map((post) => (
					<Grid size={{ xs: 12, md: 6 }} key={post._id}>
						<Card>
							{post.featuredImage && <CardMedia sx={{ height: 140 }} image={urlFor(post.featuredImage).width(600).url()} />}
							<CardContent sx={{ p: 3 }}>
								<Typography variant='h4' sx={{ fontSize: { xs: 32, sm: 48, md: 60 } }}>
									{post.title}
								</Typography>
								<Typography sx={{ color: "text.secondary", opacity: 0.9, mb: 1 }}>{post.description}</Typography>
								<Box sx={{ textTransform: "capitalize", my: 2, display: "flex", gap: 1 }}>
									{post.technologies.map((tag) => (
										<Chip variant='outlined' key={tag} label={tag} sx={{ px: 1 }} />
									))}
								</Box>
								<CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
									<Button variant='contained' component={Link} href={post.liveUrl} startIcon={<LaunchIcon />}>
										Live Demo
									</Button>
									<Button variant='outlined' component={Link} href={post.githubUrl} startIcon={<GitHubIcon />}>
										Github Repo
									</Button>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
