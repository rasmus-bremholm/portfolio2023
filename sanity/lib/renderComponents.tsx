import { PortableTextComponents } from "@portabletext/react";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import { createImageUrlBuilder } from "@sanity/image-url";
import Image from "next/image";
import { createClient } from "next-sanity";
import { codeToHtml } from "shiki";

const imageClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2023-05-03",
	useCdn: true,
});

const builder = createImageUrlBuilder(imageClient);

export const renderComponents: PortableTextComponents = {
	block: {
		normal: ({ children }) => (
			<Typography component='div' sx={{ fontSize: "17px", mb: 2, fontFamily: "var(--font-spectral), serif" }}>
				{children}
			</Typography>
		),
		h2: ({ children }) => (
			<Typography variant='h2' sx={{ mt: 6, mb: 2 }}>
				{children}
			</Typography>
		),
		h3: ({ children }) => (
			<Typography variant='h3' sx={{ mt: 2, mb: 2 }}>
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
		code: ({ children }) => (
			<Box
				component='code'
				sx={{
					backgroundColor: "#24292e",
					color: "#e1e4e8",
					borderRadius: "4px",
					padding: "0.15em 0.4em",
					fontSize: "0.875em",
					fontFamily: "monospace",
				}}>
				{children}
			</Box>
		),
	},
	types: {
		imageBlock: ({ value }) => {
			if (!value?.asset) return null;
			const dimensions = value.asset.metadata?.dimensions;
			const width = dimensions?.width || 800;
			const height = dimensions?.height || 600;
			return (
				<figure style={{ margin: "2rem 0" }}>
					<Image
						src={builder.image(value).width(800).url()}
						alt={value.alt || ""}
						width={width}
						height={height}
						style={{ width: "100%", height: "auto" }}
					/>
					{value.caption && (
						<Typography variant='overline' component='figcaption' sx={{ mt: 1, display: "block", color: "text.secondary" }}>
							{value.caption}
						</Typography>
					)}
				</figure>
			);
		},
		codeBlock: async ({ value }) => {
			const html = await codeToHtml(value.code, {
				lang: value.language || "typescript",
				theme: "github-dark",
			});

			return (
				<Box sx={{ my: 2 }}>
					{value.filename && <Typography sx={{ mb: 1, opacity: 0.7 }}>{value.filename}</Typography>}
					<Box
						sx={{ "& pre": { borderRadius: "4px", padding: "1rem", overflow: "auto", fontSize: "0.875rem" } }}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Box>
			);
		},
		blockquote: ({ value }) => {
			return (
				<Box
					component='blockquote'
					sx={{
						margin: "2rem 0",
						padding: "1rem 1.5rem",
						borderLeft: "4px solid",
						borderColor: "divider",
						background: "rgba(255,255,255,0.05)",
					}}>
					<Typography variant='h6' component='p' sx={{ mb: 1, fontWeight: 400, color: "text.primary" }}>
						{value.quote}
					</Typography>
					{value.author && (
						<Typography component='cite' sx={{ fontSize: "0.9rem", opacity: 0.8, color: "text.secondary" }}>
							- {value.author}
							{value.source && `, ${value.source}`}
						</Typography>
					)}
				</Box>
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
						<Typography variant='overline' component='figcaption' sx={{ mt: 1, display: "block", color: "text.secondary" }}>
							{value.caption}
						</Typography>
					)}
				</figure>
			);
		},
	},
};
