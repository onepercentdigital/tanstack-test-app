import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/search-seo")({
	component: SearchSEOPage,
	head: () => ({
		meta: [
			{
				title: "Search SEO Services - One Percent SEO",
			},
			{
				name: "description",
				content:
					"Dominate Google search results with our comprehensive SEO services. Rank in the top 1% for your industry's most profitable keywords.",
			},
		],
	}),
});

function SearchSEOPage() {
	const benefits = [
		"Comprehensive keyword research and targeting",
		"On-page and technical SEO optimization",
		"High-quality content creation",
		"Strategic link building campaigns",
		"Regular performance tracking and reporting",
		"Dedicated SEO specialist",
	];

	const process = [
		{
			step: "1",
			title: "Discovery & Audit",
			description:
				"We analyze your current SEO performance, identify opportunities, and understand your business goals.",
		},
		{
			step: "2",
			title: "Strategy Development",
			description:
				"Create a custom SEO roadmap targeting your most profitable keywords and market opportunities.",
		},
		{
			step: "3",
			title: "Implementation",
			description:
				"Execute technical improvements, content creation, and link building campaigns.",
		},
		{
			step: "4",
			title: "Monitor & Optimize",
			description:
				"Track results, refine strategy, and continuously improve your search rankings.",
		},
	];

	return (
		<div>
			{/* Hero Section */}
			<section className="border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
				<div className="container px-4 md:px-6 py-20 md:py-32">
					<div className="max-w-3xl mx-auto text-center space-y-8">
						<h1 className="text-4xl md:text-6xl font-bold">
							Dominate Google Search Results
						</h1>
						<p className="text-xl text-muted-foreground">
							Our comprehensive search SEO services help you rank in the top 1%
							for your industry's most profitable keywords, driving qualified
							traffic and revenue growth.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg">
								<Link to="/consultation">
									Get Started
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<a href="#process">Learn Our Process</a>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* What's Included */}
			<section className="border-b border-border">
				<div className="container px-4 md:px-6 py-16 md:py-24">
					<div className="max-w-3xl mx-auto">
						<div className="text-center space-y-4 mb-12">
							<h2 className="text-3xl md:text-4xl font-bold">
								What's Included
							</h2>
							<p className="text-xl text-muted-foreground">
								Comprehensive SEO services designed to maximize your organic
								search presence
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className="flex items-start space-x-3 p-4 rounded-lg border border-border bg-card"
								>
									<CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
									<span className="text-base">{benefit}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section id="process" className="border-b border-border bg-secondary/50">
				<div className="container px-4 md:px-6 py-16 md:py-24">
					<div className="max-w-4xl mx-auto">
						<div className="text-center space-y-4 mb-12">
							<h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
							<p className="text-xl text-muted-foreground">
								A proven methodology that delivers results
							</p>
						</div>

						<div className="space-y-8">
							{process.map((item, index) => (
								<div
									key={index}
									className="flex gap-6 p-6 rounded-xl border border-border bg-card"
								>
									<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
										<span className="text-2xl font-bold text-primary">
											{item.step}
										</span>
									</div>
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">{item.title}</h3>
										<p className="text-muted-foreground">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="border-b border-border">
				<div className="container px-4 md:px-6 py-20 md:py-32">
					<div className="max-w-3xl mx-auto text-center space-y-8">
						<h2 className="text-3xl md:text-5xl font-bold">
							Ready to rank in the top 1%?
						</h2>
						<p className="text-xl text-muted-foreground">
							Book a free consultation and discover how our search SEO services
							can transform your online presence.
						</p>
						<Button asChild size="lg">
							<Link to="/consultation">
								Schedule Free Consultation
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
