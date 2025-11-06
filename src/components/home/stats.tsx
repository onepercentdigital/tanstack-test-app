import { stats } from "@/data/stats";

export function Stats() {
	return (
		<section className="border-b border-border bg-secondary/50">
			<div className="container px-4 md:px-6 py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center space-y-2"
						>
							<div className="text-5xl md:text-6xl font-bold text-primary">
								{stat.value}
							</div>
							<div className="text-lg font-semibold">{stat.label}</div>
							<p className="text-sm text-muted-foreground max-w-xs">
								{stat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
