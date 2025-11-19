import homepageSection from "./documents/homepageSection";
import blogPost from "./documents/blogPost";
import codeBlock from "./objects/codeBlock";
import imageBlock from "./objects/imageBlock";
import { seoType } from "./objects/seoType";
import projectPost from "./documents/projectsPosts";

export const schemaTypes = [
	//Documents
	homepageSection,
	blogPost,
	projectPost,

	// Objects
	imageBlock,
	codeBlock,
	seoType,
];
