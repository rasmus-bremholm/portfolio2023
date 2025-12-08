"use client";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function ProjectPageHeader() {
	return (
		<Box component={motion.header} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} sx={{ my: 8 }}>
			<Typography
				variant='h1'
				sx={{
					letterSpacing: "0.02em",
					lineHeight: 1,
					fontSize: { xs: "5rem", sm: "7rem", md: "9rem" },
					"& span": {
						color: "primary.main",
					},
				}}>
				Projects
			</Typography>
		</Box>
	);
}
