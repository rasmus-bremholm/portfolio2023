import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
	title: {
		default: "Rasmus Bremholm",
		template: "%s | Rasmus Bremholm",
	},
	description: "Fullstack developer & teacher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					{/* TODO: Add Navbar here */}
					<main>{children}</main>
					{/* TODO: Add Footer here */}
				</ThemeRegistry>
			</body>
		</html>
	);
}
