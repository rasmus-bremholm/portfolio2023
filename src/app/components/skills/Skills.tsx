"use client";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
//import SkillsModel from "./SkillsModel";
import { SECTIONS, type Section } from "./types";
import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";

export default function Skills() {
	const [hoveredSection, setHoveredSection] = useState<Section | null>(null);

	const SkillsCanvas = dynamic(() => import("./SkillsModel"), { ssr: false });

	return (
		<Container maxWidth='lg' sx={{ my: 6 }}>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
					gap: "20px",
				}}>
				<Box>
					<Typography variant='h2' sx={{ mb: 2 }}>
						Tools I work with
					</Typography>
					{SECTIONS.map((skill) => (
						<Box
							onMouseEnter={() => setHoveredSection(skill.id)}
							onMouseLeave={() => setHoveredSection(null)}
							key={skill.id}
							sx={{
								display: "grid",
								gridTemplateColumns: "minmax(0,96px) minmax(0,1fr)",
								gap: "20px",
								py: "26px",
								borderTop: "1px solid",
								borderColor: "#d5d8d5",
								"&:hover": {
									bgcolor: "#eaece9",
								},
							}}>
							<Typography variant='body2' sx={{ textTransform: "uppercase", fontSize: "10px", color: "#4a6b7c", letterSpacing: ".2em" }}>
								{skill.title}
							</Typography>
							<Box sx={{ display: "flex", gap: 1 }}>
								{skill.tech.map((tech, index) => (
									<Typography key={index} variant='body2'>
										{tech}
									</Typography>
								))}
							</Box>
						</Box>
					))}
				</Box>

				<Box sx={{ position: "relative", width: "100%", height: { xs: 300, md: "auto" }, minHeight: 400 }}>
					<Canvas aria-hidden='true'>
						<ambientLight intensity={0.6} />
						<directionalLight position={[3, 3, 3]} />
						<SkillsCanvas hoveredSection={hoveredSection} />
						<OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
					</Canvas>
				</Box>
			</Box>
		</Container>
	);
}
