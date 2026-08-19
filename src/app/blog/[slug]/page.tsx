import { Container } from "@mui/material";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
	return <Container></Container>;
}
