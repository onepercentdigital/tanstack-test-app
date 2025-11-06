import { Quote } from "lucide-react";
import { testimonial } from "@/data/testimonial";

export function Testimonial() {
	return (
		<section className="border-b border-border">
			<div className="container px-4 md:px-6 py-16 md:py-24">
				<div className="max-w-3xl mx-auto">
					<div className="relative">
						<Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />
						<blockquote className="relative z-10 space-y-6">
							<p className="text-2xl md:text-3xl font-medium leading-relaxed">
								"{testimonial.quote}"
							</p>
							<footer className="flex items-center space-x-4">
								<div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
									<span className="font-bold text-primary">
										{testimonial.author
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</span>
								</div>
								<div>
									<div className="font-semibold">{testimonial.author}</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}, {testimonial.company}
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
