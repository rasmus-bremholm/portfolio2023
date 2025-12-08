"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box } from "@mui/material";
import theme from "@/theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{/* Noise texture overlay */}
				<Box
					sx={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundImage: 'url("/otis-redding.png")',
						backgroundRepeat: "repeat",
						backgroundSize: "96px",
						opacity: 0.15,
						mixBlendMode: "normal",
						pointerEvents: "none",
						zIndex: 9999,
					}}
				/>
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
