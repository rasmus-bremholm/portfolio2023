"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
	name: string;
	email: string;
	category: string;
	message: string;
};

export async function sendContactMessage(data: ContactPayload) {
	if (!data.name || !data.email || !data.message) {
		return { sucess: false, error: "No fields can be empty" };
	}

	try {
		await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: "rasmus.brem@gmail.com",
			replyTo: data.email,
			subject: `Message from ${data.name} (${data.category})`,
			text: data.message,
		});
		return { success: true };
	} catch (err) {
		console.error("Resend send failed", err);
		return { sucess: false, error: "Something went wrong, try again later." };
	}
}
