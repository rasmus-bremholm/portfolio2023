import { PortableTextComponents } from "@portabletext/react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { createClient } from "next-sanity";

const imageClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2023-05-03",
	useCdn: true,
});

const builder = imageUrlBuilder(imageClient);

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
		blockquote: ({ value }) => {
			return (
				<blockquote
					style={{
						margin: "2rem 0",
						padding: "1rem 1.5rem",
						borderLeft: "4px solid",
						fontStyle: "italic",
						background: "rgba(255,255,255,0,05)",
					}}>
					<Typography component='p' sx={{ mb: 1 }}>
						&quot;{value.quote}&quot;
					</Typography>
					{value.author && (
						<Typography component='cite' sx={{ fontSize: "0.9rem", opacity: 0.8, fontStyle: "normal" }}>
							- {value.author}
							{value.source && `, ${value.source}`}
						</Typography>
					)}
				</blockquote>
			);
		},
		youtube: ({ value }) => {
			if (!value?.url) return null;

			const getVideoId = (url: string) => {
				if (url.includes("youtu.be/")) {
					return url.split("youtu.be/")[1].split("?")[0];
				}
				const match = url.match(/[?&]v=([^&]+)/);
				return match ? match[1] : null;
			};
			const videoId = getVideoId(value.url);
			if (!videoId) return null;

			return (
				<figure style={{ margin: "2rem 0" }}>
					<div
						style={{
							position: "relative",
							paddingBottom: "56.25%", // 16:9 aspect ratio
							height: 0,
							overflow: "hidden",
						}}>
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${videoId}`}
							title='YouTube video'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								border: 0,
							}}
						/>
					</div>
					{value.caption && (
						<Typography component='figcaption' sx={{ mt: 1, fontStyle: "italic", textAlign: "center" }}>
							{value.caption}
						</Typography>
					)}
				</figure>
			);
		},
	},
};
