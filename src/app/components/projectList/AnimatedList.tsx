"use client";
import { Box, Typography } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import { motion } from "framer-motion";

interface AnimatedListProps {
	projects: ProjectPreview[];
}

const container = {
	hidden: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AnimatedList({ projects }: AnimatedListProps) {
	return (
		<Box>
			{projects.map((project) => (
				<Box key={project._id}>Hej</Box>
			))}
		</Box>
	);
}
