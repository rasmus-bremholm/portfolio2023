import { Box, Typography } from "@mui/material";

export default function StatusSection() {
	return (
		<Box sx={{ gridColumn: "span 8", display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
			<Box>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Currently
				</Typography>
				<Typography variant='overline' sx={{ color: "primary.main" }}>
					Open to Roles, Q3 2026
				</Typography>
			</Box>
			<Box>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Based
				</Typography>
				<Typography variant='overline' sx={{ color: "text.primary" }}>
					Göteborg, Sweden
				</Typography>
			</Box>
			<Box>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Stack
				</Typography>
				<Typography variant='overline' sx={{ color: "text.primary" }}>
					Next.js - Postgres - Typescript - Sanity - ASP .Net
				</Typography>
			</Box>
			<Box>
				<Typography variant='overline' sx={{ color: "text.secondary" }}>
					Open To
				</Typography>
				<Typography variant='overline' sx={{ color: "text.primary" }}>
					Hybrid - On Location
				</Typography>
			</Box>
		</Box>
	);
}
