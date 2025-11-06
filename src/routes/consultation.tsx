import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendConsultationEmail } from "@/server/send-consultation-email";

export const Route = createFileRoute("/consultation")({
	component: ConsultationPage,
	head: () => ({
		meta: [
			{
				title: "Free Consultation - One Percent SEO",
			},
			{
				name: "description",
				content:
					"Book a free consultation to discover how we can help you dominate your industry in search results.",
			},
		],
	}),
});

const consultationSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email"),
	phone: z.string().min(10, "Please enter a valid phone number"),
	company: z.string().optional(),
	website: z
		.string()
		.url("Please enter a valid URL")
		.optional()
		.or(z.literal("")),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

function ConsultationPage() {
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [statusMessage, setStatusMessage] = useState("");

	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			company: "",
			website: "",
			message: "",
		},
		validatorAdapter: zodValidator(),
		validators: {
			onChange: consultationSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				const result = await sendConsultationEmail({ data: value });

				if (result.success) {
					setSubmitStatus("success");
					setStatusMessage(result.message);
					form.reset();
				} else {
					setSubmitStatus("error");
					setStatusMessage(result.message);
				}
			} catch (error) {
				setSubmitStatus("error");
				setStatusMessage("An error occurred. Please try again.");
			}
		},
	});

	return (
		<div className="container px-4 md:px-6 py-16 md:py-24">
			<div className="max-w-2xl mx-auto">
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl md:text-5xl font-bold">Free Consultation</h1>
					<p className="text-xl text-muted-foreground">
						Let's discuss how we can help you dominate your industry in search
						results
					</p>
				</div>

				{submitStatus === "success" ? (
					<div className="rounded-xl border border-primary/50 bg-primary/5 p-8 text-center space-y-4">
						<CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
						<h2 className="text-2xl font-bold">Thank You!</h2>
						<p className="text-muted-foreground">{statusMessage}</p>
						<Button onClick={() => setSubmitStatus("idle")} variant="outline">
							Submit Another Request
						</Button>
					</div>
				) : (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
						className="space-y-6 rounded-xl border border-border bg-card p-8"
					>
						{/* Name Field */}
						<form.Field name="name">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="name">Name *</Label>
									<Input
										id="name"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="John Doe"
									/>
									{field.state.meta.errors.length > 0 && (
										<p className="text-sm text-destructive">
											{field.state.meta.errors[0]}
										</p>
									)}
								</div>
							)}
						</form.Field>

						{/* Email Field */}
						<form.Field name="email">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="email">Email *</Label>
									<Input
										id="email"
										type="email"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="john@example.com"
									/>
									{field.state.meta.errors.length > 0 && (
										<p className="text-sm text-destructive">
											{field.state.meta.errors[0]}
										</p>
									)}
								</div>
							)}
						</form.Field>

						{/* Phone Field */}
						<form.Field name="phone">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="phone">Phone *</Label>
									<Input
										id="phone"
										type="tel"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="(555) 123-4567"
									/>
									{field.state.meta.errors.length > 0 && (
										<p className="text-sm text-destructive">
											{field.state.meta.errors[0]}
										</p>
									)}
								</div>
							)}
						</form.Field>

						{/* Company Field (Optional) */}
						<form.Field name="company">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="company">Company</Label>
									<Input
										id="company"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="Acme Inc"
									/>
								</div>
							)}
						</form.Field>

						{/* Website Field (Optional) */}
						<form.Field name="website">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="website">Website</Label>
									<Input
										id="website"
										type="url"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="https://example.com"
									/>
									{field.state.meta.errors.length > 0 && (
										<p className="text-sm text-destructive">
											{field.state.meta.errors[0]}
										</p>
									)}
								</div>
							)}
						</form.Field>

						{/* Message Field */}
						<form.Field name="message">
							{(field) => (
								<div className="space-y-2">
									<Label htmlFor="message">Message *</Label>
									<Textarea
										id="message"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										onBlur={field.handleBlur}
										placeholder="Tell us about your SEO goals..."
										rows={5}
									/>
									{field.state.meta.errors.length > 0 && (
										<p className="text-sm text-destructive">
											{field.state.meta.errors[0]}
										</p>
									)}
								</div>
							)}
						</form.Field>

						{/* Error Message */}
						{submitStatus === "error" && (
							<div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4">
								<p className="text-sm text-destructive">{statusMessage}</p>
							</div>
						)}

						{/* Submit Button */}
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={form.state.isSubmitting}
						>
							{form.state.isSubmitting ? (
								<>
									<Loader2 className="mr-2 h-5 w-5 animate-spin" />
									Sending...
								</>
							) : (
								"Book Free Consultation"
							)}
						</Button>

						<p className="text-xs text-center text-muted-foreground">
							By submitting this form, you agree to our privacy policy and terms
							of service.
						</p>
					</form>
				)}
			</div>
		</div>
	);
}
