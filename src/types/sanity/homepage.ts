export interface ContentSection {
	_id: string;
	title: string;
	alignment: "left" | "right";
	content: string;
	order: number;
}
