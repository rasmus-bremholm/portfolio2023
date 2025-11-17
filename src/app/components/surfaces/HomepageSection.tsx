"use client";
import { motion } from "framer-motion";
import { Box, Typography, Divider, Button } from "@mui/material";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";

interface ContentSectionProps {
	title: string;
	content: any; // Block content from Sanity
	alignment: "left" | "right";
	order: number;
	ctaText?: string;
	ctaLink?: string;
}

const renderComponents: PortableTextComponents = {
	block: {
		normal: ({ children }) => (
			<Typography component='div' sx={{ mb: 2 }}>
				{children}
			</Typography>
		),
	},
	marks: {
		strong: ({ children }) => <strong>{children}</strong>,
		em: ({ children }) => <em>{children}</em>,
		link: ({ children, value }) => (
			<Link href={value.href} style={{ color: "inherit", textDecoration: "underline" }}>
				{children}
			</Link>
		),
	},
};

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
				<Box>
					<PortableText components={renderComponents} value={content} />
				</Box>
				{ctaText && ctaLink && <Button LinkComponent={Link} href={ctaLink} variant='contained' sx={{ mb: 2 }}></Button>}
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
