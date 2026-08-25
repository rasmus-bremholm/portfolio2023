"use client";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import SkillsModel from "./SkillsModel";
import { SECTIONS, type Section } from "./types";

export default function Skills() {
	const [hoveredSection, setHoveredSection] = useState<Section | null>(null);

	return (
		<Container maxWidth='lg'>
			<Box>
				<Typography variant='h2'>Tools I work with</Typography>
				{SECTIONS.map((skill) => (
					<Box key={skill.id}>
						<Typography>{skill.title}</Typography>
						{skill.tech.map((tech, index) => (
							<Typography key={index}>{tech}</Typography>
						))}
					</Box>
				))}
			</Box>
			<Canvas>
				<ambientLight intensity={0.6} />
				<SkillsModel hoveredSection={hoveredSection} />
			</Canvas>
		</Container>
	);
}
