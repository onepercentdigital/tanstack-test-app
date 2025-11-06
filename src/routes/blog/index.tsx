import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
	component: BlogPage,
	loader: async () => {
		const posts = getAllPosts();
		return { posts };
	},
	head: () => ({
		meta: [
			{
				title: "SEO Blog - One Percent SEO",
			},
			{
				name: "description",
				content:
					"Expert insights, tips, and strategies to help you dominate search rankings.",
			},
		],
	}),
});

function BlogPage() {
	const { posts } = Route.useLoaderData();

	return (
		<div className="container px-4 md:px-6 py-16 md:py-24">
			<div className="max-w-4xl mx-auto">
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl md:text-5xl font-bold">
						SEO Insights & Strategies
					</h1>
					<p className="text-xl text-muted-foreground">
						Expert tips and industry insights to help you dominate search
						rankings
					</p>
				</div>

				{posts.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-muted-foreground mb-6">
							No blog posts yet. Check back soon!
						</p>
						<Button asChild>
							<Link to="/">Back to Home</Link>
						</Button>
					</div>
				) : (
					<div className="space-y-8">
						{posts.map((post) => (
							<article
								key={post.slug}
								className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
							>
								<div className="space-y-4">
									<div className="flex items-center gap-4 text-sm text-muted-foreground">
										<span className="inline-flex items-center gap-1.5">
											<Calendar className="h-4 w-4" />
											{new Date(post.date).toLocaleDateString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
										{post.readingTime && (
											<span className="inline-flex items-center gap-1.5">
												<Clock className="h-4 w-4" />
												{post.readingTime}
											</span>
										)}
										<span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
											{post.category}
										</span>
									</div>

									<h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
										<Link to={`/blog/${post.slug}`}>{post.title}</Link>
									</h2>

									<p className="text-muted-foreground leading-relaxed">
										{post.excerpt}
									</p>

									<div className="flex items-center justify-between pt-4">
										<span className="text-sm text-muted-foreground">
											By {post.author}
										</span>
										<Button
											asChild
											variant="ghost"
											className="group-hover:text-primary"
										>
											<Link to={`/blog/${post.slug}`}>
												Read More
												<ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
									</div>
								</div>
							</article>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
