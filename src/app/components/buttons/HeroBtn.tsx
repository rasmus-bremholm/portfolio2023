import Link from "next/link";
import { Box, Typography } from "@mui/material";

interface HeroBtnProps {
	href: string;
	label: string;
	variant: "outline" | "filled";
}

const variantStyles = {
	outline: {
		bgcolor: "transparent",
		border: "1px solid",
		borderColor: "divider",
		color: "text.secondary",
		"&:hover": {
			borderColor: "text.secondary",
		},
	},
	filled: {
		bgcolor: "primary.main",
		color: "background.default",
		border: "1px solid",
		"&:hover": {
			border: "1px solid",
			bgcolor: "transparent",
			borderColor: "primary.main",
			color: "primary.main",
		},
	},
} satisfies Record<HeroBtnProps["variant"], object>;

export default function HeroBtn({ href, label, variant }: HeroBtnProps) {
	return (
		<Link href={href}>
			<Box sx={[variantStyles[variant], { px: 2.5, py: 1, transition: "all 0.25s" }]}>
				<Typography sx={{ fontSize: "0.7rem" }} variant='overline'>
					{label}
				</Typography>
			</Box>
		</Link>
	);
}
