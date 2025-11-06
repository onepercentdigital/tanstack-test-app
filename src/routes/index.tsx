import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyFeature } from "@/components/home/case-study-feature";
import { ClientLogos } from "@/components/home/client-logos";
import { FinalCTA } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { Stats } from "@/components/home/stats";
import { Testimonial } from "@/components/home/testimonial";

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		meta: [
			{
				title: "One Percent SEO - Rank in the Top 1% of Google & AI Search",
			},
			{
				name: "description",
				content:
					"We help businesses rank in the top 1% of Google and AI search results for their industry's most profitable keywords year-over-year.",
			},
		],
	}),
});

function HomePage() {
	return (
		<>
			<Hero />
			<Stats />
			<Testimonial />
			<CaseStudyFeature />
			<ServicesGrid />
			<ClientLogos />
			<FinalCTA />
		</>
	);
}
