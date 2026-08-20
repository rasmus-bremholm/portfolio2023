import { Box, Typography } from "@mui/material";
import { experiences } from "@/app/consts/consts";
export default function Hero() {
	return (
		<Box
			component='header'
			sx={{
				display: "grid",
				gridTemplateColumns: "1fr 300px",
				gap: "80px",
				alignItems: "end",
			}}>
			<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
				<Typography sx={{ mb: "28px" }} variant='overline'>
					FULLSTACK DEVELOPER · GÖTEBORG, SWEDEN
				</Typography>
				<Typography
					sx={{
						maxWidth: "800px",
						textWrap: "balance",
						fontWeight: 400,
					}}
					variant='h1'>
					Rasmus Bremholm Portfolio.
				</Typography>
			</Box>
			<Box>
				<Typography variant='body1' sx={{ textWrap: "pretty", fontSize: "16px", lineHeight: 1.5 }}>
					Fifteen years across web development, education & e-commerce. Over six years have I taught hundreds of people how to express themselves with
					either code or art.
				</Typography>
			</Box>
			<Box sx={{ columnSpan: 2 }}>
				{experiences.map((e) => (
					<Box key={e.id}>
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
						<Typography variant='overline'>{e.title}</Typography>
						<Typography variant='body1'>{e.text}</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}
