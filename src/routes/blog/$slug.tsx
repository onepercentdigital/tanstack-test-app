import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPostPage,
	loader: async ({ params }) => {
		const post = getPostBySlug(params.slug);
		if (!post) {
			throw notFound();
		}
		return { post };
	},
	head: ({ loaderData }) => ({
		meta: [
			{
				title: `${loaderData?.post.title} - One Percent SEO`,
			},
			{
				name: "description",
				content: loaderData?.post.excerpt || "",
			},
		],
	}),
});

function BlogPostPage() {
	const { post } = Route.useLoaderData();

	return (
		<div className="container px-4 md:px-6 py-16 md:py-24">
			<article className="max-w-3xl mx-auto">
				{/* Back Button */}
				<Button asChild variant="ghost" className="mb-8">
					<Link to="/blog">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Link>
				</Button>

				{/* Article Header */}
				<header className="space-y-6 mb-12 pb-8 border-b border-border">
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
					</div>

					<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
						{post.title}
					</h1>

					<div className="flex items-center gap-4">
						<div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
							<span className="font-bold text-primary">
								{post.author
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</span>
						</div>
						<div>
							<div className="font-semibold">{post.author}</div>
							<div className="text-sm text-muted-foreground">
								{post.category}
							</div>
						</div>
					</div>
				</header>

				{/* Article Content */}
				<div className="prose prose-lg dark:prose-invert max-w-none">
					<MDXRemote source={post.content} />
				</div>

				{/* Article Footer */}
				<footer className="mt-12 pt-8 border-t border-border">
					<div className="rounded-xl border border-border bg-card p-6 md:p-8 text-center space-y-4">
						<h3 className="text-2xl font-bold">Ready to improve your SEO?</h3>
						<p className="text-muted-foreground">
							Book a free consultation and discover how we can help you rank in
							the top 1%.
						</p>
						<Button asChild size="lg">
							<Link to="/consultation">Schedule Free Consultation</Link>
						</Button>
					</div>
				</footer>
			</article>
		</div>
	);
}
