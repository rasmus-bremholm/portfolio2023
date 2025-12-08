"use client";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

interface BackButtonProps {
	href: string;
	label: string;
	ariaLabel?: string;
}

export default function BackButton({ href, label, ariaLabel }: BackButtonProps) {
	return (
		<Button component={Link} href={href} startIcon={<ArrowBack aria-hidden='true' />} sx={{ mb: 1 }} aria-label={ariaLabel}>
			{label}
		</Button>
	);
}
