import homepageSection from "./documents/homepageSection";
import blogPost from "./documents/blogPost";
import codeBlock from "./objects/codeBlock";
import imageBlock from "./objects/imageBlock";
import { seoType } from "./objects/seoType";

export const schemaTypes = [
	//Documents
	homepageSection,
	blogPost,

	// Objects
	imageBlock,
	codeBlock,
	seoType,
];
