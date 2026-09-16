"use client";

import React, { useState } from "react";
import { sendContactMessage } from "../actions/actions";
import { Box, TextField, ToggleButtonGroup, ToggleButton, Button, Typography } from "@mui/material";

const CATEGORIES = {
	"new-project": {
		label: "New project",
		placeholder: "What are you building, and where do you need help?",
	},
	"contract-role": {
		label: "Contract role",
		placeholder: "What's the role, and what's the timeline?",
	},
	audit: {
		label: "Audit or second opinion",
		placeholder: "What should I take a look at?",
	},
	teaching: {
		label: "Teaching",
		placeholder: "What are you trying to learn or teach?",
	},
	other: {
		label: "Something else",
		placeholder: "What's on your mind?",
	},
} as const;

type CategoryKey = keyof typeof CATEGORIES;

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [category, setCategory] = useState<CategoryKey>("new-project");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<"idle" | "sending" | "sucess" | "error">("idle");
	const [error, setError] = useState("");

	const canSubmit = name.trim() && email.trim() && message.trim();

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("sending");
		const result = await sendContactMessage({ name, email, category, message });
		if (result.success) {
			setStatus("sucess");
		} else {
			setStatus("error");
			setError(result.error ?? "Something went wrong.");
		}
	}

	if (status === "sucess") {
		return <Typography>Thank you - I&apos;ll reply within two working days.</Typography>;
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{ py: 2, borderTop: "1px solid", borderColor: "text.primary", display: "flex", flexDirection: "column", gap: 5 }}>
			<Box sx={{ display: "flex", gap: 2, border: "1px solid", borderColor: "divider", p: 2 }}>
				<TextField variant='standard' placeholder='Your name' label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
				<TextField variant='standard' placeholder='you@company.com' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
			</Box>

			<Box>
				<Typography variant='overline' component='label' sx={{ display: "block", mb: 1 }}>
					What is this about?
				</Typography>
				<ToggleButtonGroup
					exclusive
					aria-label='What is this about?'
					value={category}
					onChange={(_, v) => v && setCategory(v)}
					sx={{
						gap: 1,
						"& .MuiToggleButtonGroup-grouped": {
							margin: 0,
							border: "1px solid",
							borderColor: "divider",
							borderRadius: "2px !important",
							textTransform: "none",
						},
						"& .Mui-selected": {
							bgcolor: "grey.200",
							borderColor: "text.primary !important",
						},
					}}>
					{Object.entries(CATEGORIES).map(([value, { label }]) => (
						<ToggleButton key={value} value={value}>
							{label}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>

			<Box>
				<Typography variant='overline' component='label' id="contact-message" sx={{ display: "block", mb: 1 }}>
					Message
				</Typography>
				<TextField
					sx={{ "& textarea": { resize: "vertical" } }}
					placeholder={CATEGORIES[category].placeholder}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					multiline
					fullWidth
					variant='standard'
					minRows={4}
					slotProps={{ htmlInput: { "aria-labelledby": "contact-message" } }}
					
				/>
			</Box>

			{status === "error" && <Typography color='error'>{error}</Typography>}

			<Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
				<Button type='submit' variant='contained' disabled={!canSubmit || status === "sending"}>
					<Typography>{status === "sending" ? "Sending…" : "Send message"}</Typography>
				</Button>
				<Typography variant='body2' color='text.secondary'>
					Email and a short message, and you&apos;re done.
				</Typography>
			</Box>
		</Box>
	);
}
