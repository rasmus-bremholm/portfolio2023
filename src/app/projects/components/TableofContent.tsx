"use client";
import { Heading } from "@/app/lib/extractHeadings";
import { Box, Typography } from "@mui/material";

export default function TableofContent({ headings }: { headings: Heading[] }) {
	return (
		<Box sx={{ display: "flex" }}>
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
			{headings.map((heading) => (
				<Box key={heading.id} sx={{ py: 2, borderBottom: "1px solid", borderColor: "divider" }}>
					<Typography>{heading.text}</Typography>
				</Box>
			))}
		</Box>
	);
}
