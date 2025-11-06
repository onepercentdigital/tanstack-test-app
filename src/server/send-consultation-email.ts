import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const ConsultationSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phone: z.string().min(10),
	company: z.string().optional(),
	website: z.string().url().optional().or(z.literal("")),
	message: z.string().min(10),
});

export const sendConsultationEmail = createServerFn({ method: "POST" })
	.inputValidator(ConsultationSchema)
	.handler(async ({ data }) => {
		// Check if Resend API key is configured
		const resendApiKey = process.env.RESEND_API_KEY;

		if (!resendApiKey) {
			console.warn("RESEND_API_KEY not configured. Email not sent.");
			// For testing, return success even without API key
			return {
				success: true,
				message: "Form submitted successfully (email not configured yet)",
			};
		}

		try {
			const resend = new Resend(resendApiKey);

			// Send email to austin@onepercentseo.com
			const { data: emailData, error } = await resend.emails.send({
				from: "consultations@onepercentseo.com", // You'll need to configure this domain in Resend
				to: "austin@onepercentseo.com",
				replyTo: data.email,
				subject: `New Consultation Request from ${data.name}`,
				html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
			});

			if (error) {
				console.error("Resend error:", error);
				return {
					success: false,
					message: "Failed to send email. Please try again.",
				};
			}

			return {
				success: true,
				message: "Thank you! We'll be in touch soon.",
				emailId: emailData?.id,
			};
		} catch (error) {
			console.error("Error sending consultation email:", error);
			return {
				success: false,
				message: "An error occurred. Please try again.",
			};
		}
	});
