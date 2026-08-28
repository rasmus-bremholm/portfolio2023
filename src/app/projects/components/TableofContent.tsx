"use client";
import { Heading } from "@/app/lib/extractHeadings";
import { Box, Typography } from "@mui/material";

export default function TableofContent({ headings }: { headings: Heading[] }) {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Typography
				sx={{
					pb: 2,
					borderBottom: "1px solid",
					borderColor: "divider",
					letterSpacing: "0.2em",
				}}
				variant='body2'>
				Contents
			</Typography>
			{headings.map((heading, index) => (
				<Box key={heading.id} sx={{ display: "flex", py: 1.5, gap: 2, borderBottom: "1px solid", borderColor: "divider" }}>
					<Typography>{index}.</Typography>
					<Typography sx={{ fontFamily: "var(--font-spectral)", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
						{heading.text}
					</Typography>
				</Box>
			))}
		</Box>
	);
}
