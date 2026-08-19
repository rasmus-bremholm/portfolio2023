import { client } from "@/sanity/lib/client";
import { projectPostQuery } from "@/sanity/lib/queries";
import type { Project } from "@/types/sanity/projectpage";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

export default async function ProjectPage() {
	return <Container></Container>;
}
