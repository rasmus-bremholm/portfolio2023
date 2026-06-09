"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import baseTheme from "@/theme";

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<NextLinkProps, "ref">>(
	function LinkBehavior(props, ref) {
		return <NextLink ref={ref} {...props} />;
	}
);
LinkBehavior.displayName = "LinkBehavior";

const theme = createTheme(baseTheme, {
	components: {
		MuiButtonBase: {
			defaultProps: { LinkComponent: LinkBehavior },
		},
		MuiLink: {
			defaultProps: { component: LinkBehavior },
		},
	},
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
