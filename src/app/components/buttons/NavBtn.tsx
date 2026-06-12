"use client";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ButtonProps {
	label: string;
	index: string;
	href: string;
}

export default function NavBtn({ href, label, index }: ButtonProps) {
	const pathName = usePathname();
	const isActive = pathName === href;

	return (
		<Link href={href}>
			<Box
				sx={{
					border: isActive ? "1px solid" : "1px solid",
					bgcolor: isActive ? "background.subtle" : "transparent",
					borderColor: isActive ? "divider" : "transparent",
					px: 2,
					py: 0.3,
					"&:hover": {
						borderColor: "divider",
					},
				}}>
				<Typography variant='overline'>
					<Box component='span' aria-hidden='true' sx={{ mr: 1, color: "divider" }}>
						{index}
					</Box>
					<Typography variant='overline' sx={{ color: isActive ? "primary.main" : "text.primary" }}>
						{label}
					</Typography>
				</Typography>
			</Box>
		</Link>
	);
}
