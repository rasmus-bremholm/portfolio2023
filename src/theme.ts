"use client";

import { createTheme } from "@mui/material/styles";
//import { lighten, darken } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypeBackground {
		subtle: string;
		elevated: string;
		dark: string;
	}
	interface TypeText {
		tertiary: string;
		darkText: string;
		darkMuted: string;
	}
}

const baseTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#F1F2F0", //light cream
			paper: "#eaece9", //hover surface
			dark: "#23282A", // footer
		},
		text: {
			primary: "#23282A", //titles
			secondary: "#4C5455", //body
			tertiary: "#8A9291", //muted labels
			darkText: "#eef0ee", // text on dark background
			darkMuted: "#8fa3ad", // muted text on dark background
		},
		divider: "#FAF9F5EB",
		primary: {
			main: "#4a6b7c",
		},
	},
});

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-hanken-grotesk), sans-serif",
		allVariants: {
			fontSize: "16px", //root size
			color: baseTheme.palette.text.secondary, //sets the gray color implicit, but overridden in each variant.
		},
		h1: {
			fontFamily: "var(--font-newsreader), serif",
			color: baseTheme.palette.text.primary,
			fontSize: "clamp(40px, 5.5vw, 80px)",
			fontWeight: 400,
			lineHeight: 1.02,
			letterSpacing: "-0.032em",
		},
		h2: {
			fontFamily: "var(--font-newsreader), serif",
			color: baseTheme.palette.text.primary,
			fontSize: "clamp(22px, 2.6vw, 38px)",
			fontWeight: 400,
			letterSpacing: "-0.025em",
		},
		h3: {
			fontFamily: "var(--font-newsreader), serif",
			color: baseTheme.palette.text.primary,
			fontSize: "clamp(16px, 1.9vw, 27px)",
			fontWeight: 400,
			letterSpacing: "-0.02em",
		},
		body1: {
			fontFamily: "var(--font-spectral), serif",
		},
		body2: {
			fontFamily: "var(--font-hanken-grotesk), sans-serif",
			fontSize: "14px",
			color: baseTheme.palette.text.secondary,
		},
		overline: {
			fontFamily: "var(--font-ibm), monospace",
			letterSpacing: "0.08em",
			textTransform: "uppercase",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: 0,
					textTransform: "uppercase",
					fontFamily: "var(--font-hanken-grotesk), sans-serif",
					padding: "12px 20px",
					backgroundColor: baseTheme.palette.background.default,
					transition: "all 0.2s ease",
					"&:hover": {
						backgroundColor: baseTheme.palette.background.paper,
					},
				},
				outlined: {
					borderColor: baseTheme.palette.divider,
					"&:hover": {
						backgroundColor: baseTheme.palette.background.paper,
					},
				},
			},
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: "lg",
			},
			styleOverrides: {
				root: {
					paddingLeft: "clamp(24px, 5vw, 72px)",
					paddingRight: "clamp(24px, 5vw, 72px)",
				},
			},
		},
	},
});

export default theme;
