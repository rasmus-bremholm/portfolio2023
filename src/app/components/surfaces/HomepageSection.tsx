"use client";
import { motion } from "framer-motion";
import { Box, Typography, Divider, Button } from "@mui/material";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface ContentSectionProps {
	title: string;
	content: any; // Block content from Sanity
	alignment: "left" | "right";
	order: number;
	ctaText?: string;
	ctaLink?: string;
}

export default function HomepageSection({ title, content, alignment, order, ctaText, ctaLink }: ContentSectionProps) {
	return (
		<Box
			component={motion.section}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4, py: 8 }}>
			<Box sx={{ order: alignment === "left" ? 1 : 2, textAlign: alignment === "left" ? "left" : "right" }}>
				<Typography variant='h4' sx={{ fontSize: 60, color: "text.primary" }}>
					{title}
				</Typography>
				<Typography sx={{ mb: 3 }}>
					<PortableText value={content} />
				</Typography>
				<Divider sx={{ mt: 4 }} />
			</Box>
			<Box
				sx={{
					order: alignment === "left" ? 2 : 1,
					textAlign: alignment === "left" ? "left" : "right",
					display: { xs: "hidden", sm: "flex" },
					justifyContent: "center",
					alignItems: "center",
				}}></Box>
		</Box>
	);
}
