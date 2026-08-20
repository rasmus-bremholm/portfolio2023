import { Box, Typography, Container } from "@mui/material";
import { experiences } from "@/app/consts/consts";
export default function StatusBar() {
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
