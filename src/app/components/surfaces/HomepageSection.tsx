import styles from "@/app/styles/components/surfaces/ContentSection.module.scss";

interface ContentSectionProps {
	title: string;
	content: string;
	alignment: "left" | "right";
}

export default function HomepageSection({ title, content, alignment }: ContentSectionProps) {
	return (
		<section className={styles.contentSection} data-alignment={alignment}>
			<div className={styles.textContent}>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
			<div className={styles.mediaContent}></div>
		</section>
	);
}
