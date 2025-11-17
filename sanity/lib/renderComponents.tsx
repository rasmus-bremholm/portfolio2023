import { PortableTextComponents } from "@portabletext/react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "./client";

const builder = imageUrlBuilder(client);

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
	types: {
		imageBlock: ({ value }) => {
			if (!value?.asset) return null;
			return (
				<figure style={{ margin: "2rem 0" }}>
					<Image
						src={builder.image(value).width(800).url()}
						alt={value.alt || ""}
						width={800}
						height={600}
						style={{ width: "100%", height: "auto" }}
					/>
					{value.caption && (
						<Typography component='figcaption' sx={{ mt: 1, fontStyle: "italic", textAlign: "center" }}>
							{value.caption}
						</Typography>
					)}
				</figure>
			);
		},
		codeBlock: ({ value }) => {
			return (
				<Box sx={{ my: 2 }}>
					{value.filename && <Typography sx={{ mb: 1, opacity: 0.7 }}>{value.filename}</Typography>}
					<pre style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>{value.code}</code>
					</pre>
				</Box>
			);
		},
	},
};
