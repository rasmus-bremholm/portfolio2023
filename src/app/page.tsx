import type { Metadata } from "next";
import HomepageSection from "./components/surfaces/HomepageSection";
import { getAllContentSections } from "../../sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";
import { Container } from "@mui/material";
import HomePageHeader from "./components/surfaces/header/HomePageHeader";

export const metadata: Metadata = {
	title: "Home",
	description: "Fullstack developer specializing in Next.js, React, and modern web technologies. Based in Göteborg, Sweden.",
	openGraph: {
		title: "Rasmus Bremholm | Fullstack Developer",
		description: "Fullstack developer specializing in Next.js, React, and modern web technologies.",
		url: "/",
		siteName: "Rasmus Bremholm",
		type: "website",
	},
};

export default async function Home() {
	const sections: ContentSection[] = await getAllContentSections();

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Rasmus Bremholm",
		url: "https://www.rasmusbremholm.com",
		jobTitle: "Fullstack Developer",
		worksFor: {
			"@type": "Organization",
			name: "Volvo Connected Solutions",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Göteborg",
			addressCountry: "SE",
		},
		sameAs: ["https://github.com/rasmusbremholm", "https://linkedin.com/in/rasmusbremholm"],
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Container component='main'>
				<HomePageHeader />
				{sections &&
					sections.map((section) => (
						<HomepageSection
							key={section._id}
							title={section.title}
							content={section.content}
							alignment={section.alignment}
							order={section.order}
							ctaLink={section.ctaLink}
							ctaText={section.ctaText}
						/>
					))}
			</Container>
		</>
	);
}
