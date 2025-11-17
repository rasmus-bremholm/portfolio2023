"use client";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

export default function HomePageHeader() {
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
				Hello, I&apos;m <span>Rasmus Bremholm</span>
			</Typography>
			<Typography variant='h3' component='h2'>
				Fullstack Developer
			</Typography>
			<Typography>Exploring areas where tech and artistry meet.</Typography>
		</Box>
	);
}
