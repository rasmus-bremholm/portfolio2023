// lib/portableTextComponents.tsx (or wherever you want it)
import { PortableTextComponents } from "@portabletext/react";
import { Typography } from "@mui/material";
import Link from "next/link";

export const renderComponents: PortableTextComponents = {
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
			<Link href={value?.href || "#"} style={{ color: "inherit", textDecoration: "underline" }}>
				{children}
			</Link>
		),
	},
};
