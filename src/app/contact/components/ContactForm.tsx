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
	return (
		<Box component='form' onSubmit={handleSubmit} sx={{ py: 2, borderTop: "1px solid", borderColor: "text.primary" }}>
			<Box sx={{ display: "flex", gap: 2 }}>
				<TextField variant='standard' placeholder='Your name' label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
				<TextField variant='standard' placeholder='you@company.com' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
			</Box>

			<Box>
				<Typography variant='overline' component='label' sx={{ display: "block", mb: 1 }}>
					What is this about?
				</Typography>
				<ToggleButtonGroup exclusive value={category} onChange={(_, v) => v && setCategory(v)}>
					{Object.entries(CATEGORIES).map(([value, { label }]) => (
						<ToggleButton key={value} value={value}>
							{label}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>

			<Box>
				<Typography variant='overline' component='label' sx={{ display: "block", mb: 1 }}>
					Message
				</Typography>
				<TextField placeholder={CATEGORIES[category].placeholder} value={message} onChange={(e) => setMessage(e.target.value)} multiline minRows={4} />
			</Box>

			{status === "error" && <Typography color='error'>{error}</Typography>}

			<Button type='submit' variant='contained' disabled={status === "sending"}>
				<Typography>{status === "sending" ? "Sending…" : "Send message"}</Typography>
			</Button>
		</Box>
	);
}
