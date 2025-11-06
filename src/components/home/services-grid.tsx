import { services } from "@/data/services";

export function ServicesGrid() {
	return (
		<section className="border-b border-border">
			<div className="container px-4 md:px-6 py-16 md:py-24">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Comprehensive SEO solutions designed to dominate your industry
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
							>
								<div className="space-y-3">
									<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<Icon className="h-6 w-6" />
									</div>
									<h3 className="text-lg font-semibold">{service.title}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{service.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
