import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: [
			{
				title: "About Us - One Percent SEO",
			},
			{
				name: "description",
				content:
					"Learn about One Percent SEO and our mission to help businesses dominate their industries through strategic SEO.",
			},
		],
	}),
});

function AboutPage() {
	const values = [
		{
			icon: Target,
			title: "Results-Driven",
			description:
				"We focus on metrics that matter - traffic, rankings, and revenue growth.",
		},
		{
			icon: Users,
			title: "Client-Focused",
			description:
				"Your success is our success. We build long-term partnerships based on trust and results.",
		},
		{
			icon: TrendingUp,
			title: "Always Evolving",
			description:
				"SEO changes constantly. We stay ahead of trends to keep you competitive.",
		},
		{
			icon: Award,
			title: "Proven Expertise",
			description:
				"Years of experience helping businesses rank in the top 1% of search results.",
		},
	];

	return (
		<div>
			{/* Hero Section */}
			<section className="border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
				<div className="container px-4 md:px-6 py-20 md:py-32">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold">
							We Help Businesses Dominate Their Industries
						</h1>
						<p className="text-xl text-muted-foreground">
							One Percent SEO was founded on a simple mission: help businesses
							rank in the top 1% of search results for their industry's most
							profitable keywords.
						</p>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="border-b border-border">
				<div className="container px-4 md:px-6 py-16 md:py-24">
					<div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
						<p>
							In today's digital landscape, being found online isn't
							optional—it's essential. But with millions of websites competing
							for attention, simply having a website isn't enough. You need to
							be visible where your customers are searching.
						</p>
						<p>
							That's where we come in. We specialize in helping businesses
							achieve top rankings in Google, AI search platforms like ChatGPT
							and Perplexity, and everywhere else your customers look for
							solutions.
						</p>
						<p>
							Our approach combines technical expertise, strategic thinking, and
							a deep understanding of search algorithms to deliver results that
							matter: more traffic, more leads, and more revenue.
						</p>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="border-b border-border bg-secondary/50">
				<div className="container px-4 md:px-6 py-16 md:py-24">
					<div className="max-w-5xl mx-auto">
						<div className="text-center space-y-4 mb-12">
							<h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
							<p className="text-xl text-muted-foreground">
								The principles that guide everything we do
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{values.map((value, index) => {
								const Icon = value.icon;
								return (
									<div
										key={index}
										className="rounded-xl border border-border bg-card p-6 md:p-8"
									>
										<div className="space-y-4">
											<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
												<Icon className="h-6 w-6" />
											</div>
											<h3 className="text-xl font-semibold">{value.title}</h3>
											<p className="text-muted-foreground">
												{value.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="border-b border-border">
				<div className="container px-4 md:px-6 py-16 md:py-24">
					<div className="max-w-4xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
							<div className="space-y-2">
								<div className="text-5xl font-bold text-primary">100+</div>
								<div className="text-lg font-semibold">Clients Served</div>
								<p className="text-sm text-muted-foreground">
									Businesses across diverse industries
								</p>
							</div>
							<div className="space-y-2">
								<div className="text-5xl font-bold text-primary">85%</div>
								<div className="text-lg font-semibold">Client Retention</div>
								<p className="text-sm text-muted-foreground">
									Long-term partnerships built on results
								</p>
							</div>
							<div className="space-y-2">
								<div className="text-5xl font-bold text-primary">5X</div>
								<div className="text-lg font-semibold">Average ROI</div>
								<p className="text-sm text-muted-foreground">
									Measurable returns on investment
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="border-b border-border">
				<div className="container px-4 md:px-6 py-20 md:py-32">
					<div className="max-w-3xl mx-auto text-center space-y-8">
						<h2 className="text-3xl md:text-5xl font-bold">
							Ready to join the top 1%?
						</h2>
						<p className="text-xl text-muted-foreground">
							Let's discuss how we can help you dominate your industry in search
							results.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg">
								<Link to="/consultation">
									Book Free Consultation
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link to="/blog">Read Our Blog</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
