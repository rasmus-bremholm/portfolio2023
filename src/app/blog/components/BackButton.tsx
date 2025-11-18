"use client";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";

export default function BackButton() {
	return (
		<Button component={Link} href='/blog' startIcon={<ArrowBack aria-hidden='true' />} sx={{ mb: 1 }} aria-label='Return to blog list'>
			Blog
		</Button>
	);
}
