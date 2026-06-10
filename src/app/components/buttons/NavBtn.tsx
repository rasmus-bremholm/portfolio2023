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
					border: isActive ? "1px solid" : "none",
					borderColor: "divider",
				}}>
				<Typography variant='overline'>
					<Box component='span'>{index}</Box>
					{label}
				</Typography>
			</Box>
		</Link>
	);
}
