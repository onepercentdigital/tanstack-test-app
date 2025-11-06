import { clients } from "@/data/clients";

export function ClientLogos() {
	return (
		<section className="border-b border-border bg-secondary/50">
			<div className="container px-4 md:px-6 py-16 md:py-24">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl md:text-4xl font-bold">
						Trusted by Industry Leaders
					</h2>
					<p className="text-xl text-muted-foreground">
						Join the companies dominating their markets
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{clients.map((client, index) => (
						<div
							key={index}
							className="flex items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
						>
							{/* Placeholder for client logo */}
							<div className="h-16 w-32 bg-gradient-to-br from-muted to-muted/50 rounded flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/5 transition-all">
								<span className="text-xs text-muted-foreground font-medium">
									{client.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
