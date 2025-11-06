import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCaseStudy } from "@/data/case-study";

export function CaseStudyFeature() {
	return (
		<section className="border-b border-border bg-secondary/50">
			<div className="container px-4 md:px-6 py-16 md:py-24">
				<div className="max-w-5xl mx-auto">
					<div className="text-center space-y-4 mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">
							Featured Case Study
						</h2>
						<p className="text-xl text-muted-foreground">
							Real results from real clients
						</p>
					</div>

					<div className="rounded-2xl border border-border bg-card overflow-hidden">
						<div className="grid lg:grid-cols-2 gap-0">
							{/* Left - Image Placeholder */}
							<div className="bg-gradient-to-br from-primary/20 to-primary/5 p-12 flex items-center justify-center min-h-[300px]">
								<div className="text-center space-y-2">
									<div className="text-4xl font-bold text-primary">
										Case Study
									</div>
									<p className="text-muted-foreground">Image Placeholder</p>
								</div>
							</div>

							{/* Right - Content */}
							<div className="p-8 md:p-12 flex flex-col justify-center">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl md:text-3xl font-bold mb-2">
											{featuredCaseStudy.title}
										</h3>
										<p className="text-muted-foreground">
											{featuredCaseStudy.description}
										</p>
									</div>

									<div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
										{featuredCaseStudy.metrics.map((metric, index) => (
											<div key={index} className="text-center">
												<div className="text-3xl font-bold text-primary">
													{metric.value}
												</div>
												<div className="text-sm text-muted-foreground mt-1">
													{metric.label}
												</div>
											</div>
										))}
									</div>

									<p className="text-muted-foreground">
										{featuredCaseStudy.summary}
									</p>

									<Button asChild variant="outline">
										<a href={`#case-study-${featuredCaseStudy.slug}`}>
											View Full Case Study
											<ArrowRight className="ml-2 h-4 w-4" />
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
