import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
	return (
		<section className="border-b border-border">
			<div className="container px-4 md:px-6 py-20 md:py-32">
				<div className="max-w-3xl mx-auto text-center space-y-8">
					<div className="space-y-4">
						<h2 className="text-3xl md:text-5xl font-bold">
							Ready to dominate your industry?
						</h2>
						<p className="text-xl text-muted-foreground">
							Book a free consultation and discover how we can help you rank in
							the top 1% of search results for your most profitable keywords.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild size="lg" className="text-base">
							<Link to="/consultation">
								Get Started Today
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg" className="text-base">
							<Link to="/about">Learn About Our Process</Link>
						</Button>
					</div>

					<div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
						<div className="flex flex-col items-center space-y-1">
							<div className="font-semibold text-foreground">
								No Long-term Contracts
							</div>
							<div>Month-to-month flexibility</div>
						</div>
						<div className="flex flex-col items-center space-y-1">
							<div className="font-semibold text-foreground">
								Transparent Reporting
							</div>
							<div>See exactly what we're doing</div>
						</div>
						<div className="flex flex-col items-center space-y-1">
							<div className="font-semibold text-foreground">
								Proven Results
							</div>
							<div>Track record of success</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
