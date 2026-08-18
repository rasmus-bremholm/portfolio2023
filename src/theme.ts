"use client";

import { createTheme } from "@mui/material/styles";
import { lighten, darken } from "@mui/material/styles";

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

const theme = createTheme({});

export default theme;
