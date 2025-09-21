export interface ContentSection {
	_id: string;
	title: string;
	alignment: "left" | "right";
	content: string;
	cta: string;
	order: number;
}
