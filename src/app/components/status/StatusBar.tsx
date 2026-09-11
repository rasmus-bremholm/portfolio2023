import { Box, Typography, Container } from "@mui/material";
import { fetchSiteSettings } from "@/sanity/lib/client";

export default async function StatusBar() {
	const settings = await fetchSiteSettings();

	const experiences = [
		{ id: 1, title: "Now", text: `${settings.jobTitle} - ${settings.employer}`, showStatus: false },
		{ id: 2, title: "Previous", text: settings.previous, showStatus: false },
		{ id: 3, title: "Experience", text: settings.experience, showStatus: false },
		{ id: 4, title: "Focus", text: settings.focus, showStatus: false },
		{ id: 5, title: "Status", text: settings.status.label, showStatus: settings.status.isActive },
	];

	return (
		<Box
			sx={{
				gridColumn: "span 2",

				borderTop: "1px solid",
				borderBottom: "1px solid",
				borderColor: "#d5d8d5",
			}}>
			<Container maxWidth='lg' sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
				{experiences.map((e, index) => (
					<Box
						key={e.id}
						sx={{
							px: "16px",
							py: "16px",
							borderRight: index < experiences.length - 1 ? "1px solid" : "none",
							borderColor: "#d5d8d5",
						}}>
						{e.showStatus && (
							<Box
								aria-hidden='true'
								sx={{
									width: 8,
									height: 8,
									borderRadius: "50%",
									bgcolor: "primary.main",
									display: "inline-block",
									mr: 1,
								}}
							/>
						)}
						<Typography sx={{ fontSize: 10, color: "text.tertiary" }} variant='overline'>
							{e.title}
						</Typography>
						<Typography variant='body1'>{e.text}</Typography>
					</Box>
				))}
			</Container>
		</Box>
	);
}
