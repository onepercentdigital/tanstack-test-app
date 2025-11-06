import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between px-4 md:px-6">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2">
						<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-lg">
								1%
							</span>
						</div>
						<span className="hidden font-bold sm:inline-block">
							One Percent SEO
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
						<Link
							to="/search-seo"
							className="transition-colors hover:text-primary link-underline"
							activeProps={{
								className: "text-primary",
							}}
						>
							Search SEO
						</Link>
						<Link
							to="/local-maps-seo"
							className="transition-colors hover:text-primary link-underline"
							activeProps={{
								className: "text-primary",
							}}
						>
							Local Maps SEO
						</Link>
						<Link
							to="/about"
							className="transition-colors hover:text-primary link-underline"
							activeProps={{
								className: "text-primary",
							}}
						>
							About
						</Link>
						<Link
							to="/blog"
							className="transition-colors hover:text-primary link-underline"
							activeProps={{
								className: "text-primary",
							}}
						>
							Blog
						</Link>
					</nav>

					{/* Right Side - Theme Toggle & CTA */}
					<div className="flex items-center space-x-2">
						<ThemeToggle />
						<Button asChild className="hidden sm:inline-flex">
							<Link to="/consultation">Free Consultation</Link>
						</Button>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(true)}
							className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
							aria-label="Open menu"
						>
							<Menu size={24} />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Mobile Menu Sidebar */}
			<aside
				className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-background border-l border-border shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between p-4 border-b border-border">
					<span className="font-bold text-lg">Menu</span>
					<button
						onClick={() => setIsOpen(false)}
						className="p-2 hover:bg-accent rounded-lg transition-colors"
						aria-label="Close menu"
					>
						<X size={24} />
					</button>
				</div>

				<nav className="flex flex-col p-4 space-y-2">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
						activeProps={{
							className:
								"px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors font-medium",
						}}
					>
						Home
					</Link>
					<Link
						to="/search-seo"
						onClick={() => setIsOpen(false)}
						className="px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
						activeProps={{
							className:
								"px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors font-medium",
						}}
					>
						Search SEO
					</Link>
					<Link
						to="/local-maps-seo"
						onClick={() => setIsOpen(false)}
						className="px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
						activeProps={{
							className:
								"px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors font-medium",
						}}
					>
						Local Maps SEO
					</Link>
					<Link
						to="/about"
						onClick={() => setIsOpen(false)}
						className="px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
						activeProps={{
							className:
								"px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors font-medium",
						}}
					>
						About
					</Link>
					<Link
						to="/blog"
						onClick={() => setIsOpen(false)}
						className="px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
						activeProps={{
							className:
								"px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors font-medium",
						}}
					>
						Blog
					</Link>

					<div className="pt-4">
						<Button asChild className="w-full">
							<Link to="/consultation" onClick={() => setIsOpen(false)}>
								Free Consultation
							</Link>
						</Button>
					</div>
				</nav>
			</aside>
		</>
	);
}
