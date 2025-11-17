import { Box, Typography, Divider } from "@mui/material";

interface ContentSectionProps {
	title: string;
	content: string;
	alignment: "left" | "right";
	order: number;
}

export default function HomepageSection({ title, content, alignment, order }: ContentSectionProps) {
	return (
		<Box component={"section"} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 4, py: 8 }}>
			<Box sx={{ order: alignment === "left" ? 1 : 2, textAlign: alignment === "left" ? "left" : "right" }}>
				<Typography variant='h4'>{title}</Typography>
				<Typography>{content}</Typography>
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
