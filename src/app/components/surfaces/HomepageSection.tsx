interface ContentSectionProps {
	title: string;
	content: string;
	alignment: "left" | "right";
}

export default function HomepageSection({ title, content, alignment }: ContentSectionProps) {
	return (
		<section data-alignment={alignment}>
			<div>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
			<div></div>
		</section>
	);
}
