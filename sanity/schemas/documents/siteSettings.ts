import { defineField, defineType } from "sanity";

export default defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	preview: {
		prepare() {
			return { title: "Site Settings" };
		},
	},
	fieldsets: [
		{
			name: "contact",
			title: "Contact Information",
		},
		{
			name: "status",
			title: "Status information",
		},
		{
			name: "faq",
			title: "FAQ",
		},
	],
	fields: [
		//Fieldsets
		defineField({
			name: "email",
			title: "Email Address",
			type: "string",
			description: "My Emailadress for contacting me",
			validation: (Rule) => Rule.required().email(),
			initialValue: "rasmusbremholm@gmail.com",
			fieldset: "contact",
		}),
		defineField({
			name: "githubUrl",
			title: "Github Profile Url",
			type: "url",
			description: "Url to my github profile",
			validation: (Rule) => Rule.required(),
			fieldset: "contact",
		}),
		defineField({
			name: "linkedinUrl",
			title: "Linkedin Profile Url",
			type: "url",
			description: "Url to my Linkedin profile",
			validation: (Rule) => Rule.required(),
			fieldset: "contact",
		}),
		// The rest
		defineField({
			name: "employer",
			title: "Current Employer",
			type: "string",
			description: "Shows the current employer in the status bar",
			validation: (Rule) => Rule.required(),
			fieldset: "status",
		}),
		defineField({
			name: "jobTitle",
			title: "Current Role",
			type: "string",
			description: "Shows the current role in the status bar",
			validation: (Rule) => Rule.required(),
			fieldset: "status",
		}),
		defineField({
			name: "previous",
			title: "Previous Employer",
			type: "string",
			description: "Shows the previous position in the status bar",
			validation: (Rule) => Rule.required(),
			fieldset: "status",
		}),
		defineField({
			name: "experience",
			title: "Experience",
			type: "string",
			description: "Shows how much experience I have accumulated",
			validation: (Rule) => Rule.required(),
			fieldset: "status",
		}),
		defineField({
			name: "focus",
			title: "Current Focus",
			type: "string",
			description: "Shows what my core expertise lies",
			validation: (Rule) => Rule.required(),
			fieldset: "status",
		}),
		defineField({
			name: "status",
			title: "Availability Status",
			type: "object",
			fieldset: "status",
			fields: [
				defineField({
					name: "label",
					title: "Status Text",
					type: "string",
					description: "e.g. 'Availability 2026'",
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: "isActive",
					title: "Show Status Indicator",
					type: "boolean",
					description: "Shows the colored dot next to the text",
					initialValue: true,
				}),
			],
		}),

		// Contact Info
		defineField({
			name: "address",
			title: "Address",
			type: "object",
			fieldset: "contact",
			fields: [
				defineField({
					name: "addressLocality",
					title: "City",
					type: "string",
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: "addressCountry",
					title: "Country",
					description: "Two-letter country code, e.g. 'SE'",
					type: "string",
					validation: (Rule) => Rule.required().length(2),
				}),
			],
		}),

		// FAQ
		defineField({
			name: "faqs",
			title: "Frequently Asked Questions",
			type: "array",
			fieldset: "faq",
			of: [
				defineField({
					name: "faq",
					type: "object",
					fields: [
						defineField({
							name: "question",
							title: "Question",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "answer",
							title: "Answer",
							type: "text",
							validation: (Rule) => Rule.required(),
						}),
					],
					preview: {
						select: { title: "question", subtitle: "answer" },
					},
				}),
			],
		}),
	],
});
