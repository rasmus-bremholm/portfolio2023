export interface SiteSettings {
	email: string;
	githubUrl: string;
	linkedinUrl: string;
	employer: string;
	jobTitle: string;
	previous: string;
	experience: string;
	focus: string;
	status: {
		label: string;
		isActive: boolean;
	};
	address: {
		addressLocality: string;
		addressCountry: string;
	};
	faqs: { question: string; answer: string }[];
}
