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
		mode: "light",
		background: {
			default: "#F1F2F0",
		},
		text: {
			primary: "#23282A",
			secondary: "#4C5455",
		},
	},
});

const theme = createTheme({});

export default theme;
