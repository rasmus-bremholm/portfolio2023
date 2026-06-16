import { Box, Divider, Typography } from "@mui/material";
import type { ProjectPreview } from "@/types/sanity/projectpage";
import SelectedWorkItem from "./SelectedWorkItem";

interface Props {
	items: ProjectPreview[];
}

export default function SelectedWork({ items }: Props) {
	return (
		<Box>
			<Box sx={{ my: 4, display: "flex", justifyContent: "space-between" }}>
				<Typography sx={{ color: "text.secondary" }} variant='overline'>
					Selected Work
				</Typography>
				<Typography sx={{ color: "text.secondary" }} variant='overline'>
					{items.length + " Entries"}
				</Typography>
			</Box>

			<Divider sx={{ my: 4 }}></Divider>
			{items?.map((item, index) => (
				<SelectedWorkItem item={item} key={item._id} index={index} />
			))}
		</Box>
	);
}
