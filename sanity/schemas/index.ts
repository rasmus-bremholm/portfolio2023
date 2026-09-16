import siteSettings from "./documents/siteSettings";
import blogPost from "./documents/blogPost";
import codeBlock from "./objects/codeBlock";
import youtubeVideo from "./objects/youtubeVideo";
import blockQuote from "./objects/blockQuote";
import imageBlock from "./objects/imageBlock";
import { seoType } from "./objects/seoType";
import projectPost from "./documents/projectsPosts";

export const schemaTypes = [
	//Documents
	siteSettings,
	blogPost,
	projectPost,

	// Objects
	imageBlock,
	codeBlock,
	seoType,
	youtubeVideo,
	blockQuote,
];
