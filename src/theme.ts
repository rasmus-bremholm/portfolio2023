"use client";

import { createTheme } from "@mui/material/styles";
import { lighten, darken } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypeBackground {
		subtle: string;
		elevated: string;
	}
}

const baseTheme = createTheme({
	palette: {

	}
})

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#10a37f",
			light: lighten("#10a37f", 0.35),
			dark: darken("#10a37f", 0.35),
		},
		background: {
			default: "#0a0a0a",
			paper: "#141414",
			subtle: "rgba(255,255,255,0.05)",
		},
		text: {
			primary: "#c9c9c5",
			secondary: "#6b6b66",
		},
		divider: "rgba(255,255,255,0.12)",
	},
	typography: {
		fontFamily: "var(--font-inter-tight), sans-serif",
		h1: {
			fontFamily: "var(--font-archivo), sans-serif",
			fontWeight: 800,
			textTransform: "uppercase",
			color: "#fafafa",
			fontSize: "clamp(60px, 12vw, 200px)",
		},
		h2: {
			fontFamily: "var(--font-archivo), sans-serif",
			fontWeight: 800,
			textTransform: "uppercase",
			color: "#fafafa",
			fontSize: "clamp(30px, 4.5vw, 56px)",
		},
		h3: {
			fontFamily: "var(--font-archivo), sans-serif",
			fontWeight: 800,
			textTransform: "uppercase",
			color: "#c9c9c5",
			fontSize: "clamp(30px, 2.8vw, 34px)",
		},
		body1: { fontSize: 16, color: "#c9c9c5" },
		body2: { fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#c9c9c5" },
		overline: {
			fontFamily: "var(--font-jetbrains-mono), monospace",
			fontSize: "0.75rem",
			letterSpacing: "0.1em",
			textTransform: "uppercase",
		},
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 8,
});

export default theme;
