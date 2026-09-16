export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "") // strip punctuation
		.replace(/\s+/g, "-"); // spaces to dashes
}
