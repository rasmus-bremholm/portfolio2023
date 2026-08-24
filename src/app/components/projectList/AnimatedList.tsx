"use client";
import { Box, Typography } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";

interface AnimatedListProps {
	projects: ProjectPreview[];
}

const MotionBox = motion(Box);
const MotionChevron = motion(ChevronRight);

const container: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, x: 16 },
	show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const chevron: Variants = {
	rest: { x: 0 },
	hover: { x: 6 },
};

export default function AnimatedList({ projects }: AnimatedListProps) {
	return (
		<MotionBox
			variants={container}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			sx={{ borderTop: "1px solid", borderColor: "#d5d8d5" }}>
			{projects.map((project) => (
				<Link key={project._id} href={`/projects/${project.slug.current}`}>
					<MotionBox
						variants={item}
						whileHover='hover'
						sx={{
							py: "26px",

							display: "grid",
							gridTemplateColumns: "80px 1fr 230px 60px",
							gap: "30px",
							alignItems: "center",
							borderBottom: "1px solid",
							borderColor: "#d5d8d5",
							"&:hover": {
								bgcolor: "#eaece9",
							},
						}}>
						<Typography>
							{new Date(`${project.publishedAt}`).toLocaleDateString("sv-SE", {
								year: "numeric",
							})}
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", maxWidth: "560px" }}>
							<Typography variant='h3'>{project.title}</Typography>
							<Typography variant='body2'>{project.description}</Typography>
						</Box>
						<Box>
							<Typography variant='body2' sx={{ textTransform: "capitalize" }}>
								{project.technologies.map((tech, index) => (
									<span key={index}> {tech} </span>
								))}
							</Typography>
						</Box>
						<MotionChevron variants={chevron} transition={{ duration: 0.2, ease: "easeOut" }} />
					</MotionBox>
				</Link>
			))}
		</MotionBox>
	);
}
