import type { Metadata } from "next";
import { Container } from "@mui/material";
import Hero from "./components/hero/Hero";
import StatusBar from "./components/status/StatusBar";
import SelectedWork from "./components/selectedWork/SelectedWork";
import ProjectList from "./components/projectList/ProjectList";
import Skills from "./components/skills/Skills";
import JsonLd from "@/components/JsonLd";
import { personJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default async function HomePage() {
	return (
		<>
			<JsonLd data={personJsonLd()} />
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
