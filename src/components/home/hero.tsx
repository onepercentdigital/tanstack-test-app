import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative overflow-hidden border-b border-border">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

			<div className="container relative px-4 md:px-6 py-20 md:py-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Content */}
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
								Takeover your industry in{" "}
								<span className="text-primary">Google search</span>,{" "}
								<span className="text-primary">AI Summaries</span>,{" "}
								<span className="text-primary">ChatGPT</span>, and everything
								else.
							</h1>
							<p className="text-xl text-muted-foreground">
								We help businesses rank in the top 1% of Google and AI search
								results for their industry's most profitable keywords
								year-over-year.
							</p>
						</div>

						<div className="space-y-4">
							<p className="text-base text-muted-foreground">
								Getting business starts with getting found. Our services are
								designed to rank our clients at the top of page one, allowing
								them to reach new customers, increase their profits, and
								takeover their industry.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button asChild size="lg" className="text-base">
								<Link to="/consultation">
									Book a Free Consultation
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg" className="text-base">
								<Link to="/about">Learn More</Link>
							</Button>
						</div>
					</div>

					{/* Right Column - Image Placeholder */}
					<div className="relative lg:block">
						<div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
							<div className="text-center space-y-2 p-8">
								<div className="text-6xl font-bold text-primary">1%</div>
								<p className="text-muted-foreground">Hero Image Placeholder</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
