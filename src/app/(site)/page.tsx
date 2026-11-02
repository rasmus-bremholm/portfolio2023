import type { Metadata } from "next";
import { Container } from "@mui/material";
import Hero from "@/app/components/hero/Hero";
import StatusBar from "@/app/components/status/StatusBar";
import SelectedWork from "@/app/components/selectedWork/SelectedWork";
import ProjectList from "@/app/components/projectList/ProjectList";
import Skills from "@/app/components/skills/Skills";
import JsonLd from "@/components/JsonLd";
import { personJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";
import { fetchSiteSettings } from "@/sanity/lib/client";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default async function HomePage() {
	const settings = await fetchSiteSettings();

	return (
		<>
			<JsonLd data={personJsonLd(settings?.youtubeUrl)} />
			<Container maxWidth='lg' sx={{ py: 8 }}>
				<Hero />
			</Container>
			<StatusBar />
			<SelectedWork />
			<ProjectList />
			<Skills />
		</>
	);
}
