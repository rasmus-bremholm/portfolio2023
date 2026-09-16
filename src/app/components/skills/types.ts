export type Section = "frontend" | "backend" | "content" | "graphics";

export interface SectionDefinition {
	id: Section;
	title: string;
	tech: string[];
	material: { color: string; roughness: number; metalness: number; wireframe: boolean };
}

export const SECTIONS: SectionDefinition[] = [
	{
		id: "frontend",
		title: "Frontend",
		tech: ["TypeScript", "Next.js", "React", "Vue.js"],
		material: { color: "#8a8a86", roughness: 0.9, metalness: 0.05, wireframe: false },
	},
	{
		id: "backend",
		title: "Backend",
		tech: ["Express.js", ".Net Core", "Supabase"],
		material: { color: "#8a8a86", roughness: 0.9, metalness: 0.05, wireframe: true },
	},
	{
		id: "content",
		title: "Content",
		tech: ["Sanity", "Strapi", "Technical SEO", "Content Writing", "Adobe Analytics"],
		material: { color: "#c9c9c4", roughness: 0.4, metalness: 0.1, wireframe: false },
	},
	{
		id: "graphics",
		title: "Graphics",
		tech: ["Three.js · R3F", "Fusion 360", "Blender"],
		material: { color: "#8a8a86", roughness: 0.9, metalness: 0.05, wireframe: false },
	},
];
