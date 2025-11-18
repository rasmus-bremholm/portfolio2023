"use client";
import { IconButton, Tooltip } from "@mui/material";
import { Share } from "@mui/icons-material";
import { useState } from "react";

export default function ShareButton() {
	const [copied, setCopied] = useState(false);

	const handleShare = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error("Failed to copy", error);
		}
	};

	return (
		<Tooltip title={copied ? "Link copied!" : "Copy Link"} arrow>
			<IconButton onClick={handleShare} aria-label='Copy link to share this blogpost' size='small' sx={{ width: 32, height: 32 }}>
				<Share aria-hidden='true' sx={{ fontSize: 18 }} />
			</IconButton>
		</Tooltip>
	);
}
