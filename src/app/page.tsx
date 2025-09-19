import styles from "./page.module.css";
import HomepageSection from "./components/surfaces/HomepageSection";
import { getAllContentSections } from "../../sanity/lib/client";
import type { ContentSection } from "@/types/sanity/homepage";

export default async function Home() {
	const sections: ContentSection[] = await getAllContentSections();

	return (
		<main>
			{sections &&
				sections.map((section) => <HomepageSection key={section._id} title={section.title} content={section.content} alignment={section.alignment} />)}
		</main>
	);
}
