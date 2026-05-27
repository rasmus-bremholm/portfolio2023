"use client";

import { createTheme } from "@mui/material/styles";

// Neutral placeholder theme — design this however you like.
// Palette, typography, shape, and spacing are all here to override.
const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#1a1a1a",
		},
		secondary: {
			main: "#666666",
		},
		background: {
			default: "#ffffff",
			paper: "#f5f5f5",
		},
		text: {
			primary: "#1a1a1a",
			secondary: "#555555",
		},
	},
	typography: {
		fontFamily: [
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"sans-serif",
		].join(","),
		h1: { fontWeight: 700 },
		h2: { fontWeight: 700 },
		h3: { fontWeight: 600 },
		h4: { fontWeight: 600 },
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 8,
});

export default theme;
