import { Link } from "@tanstack/react-router";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Youtube,
} from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t border-border bg-background">
			<div className="container px-4 md:px-6 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-lg">
									1%
								</span>
							</div>
							<span className="font-bold">One Percent SEO</span>
						</div>
						<p className="text-sm text-muted-foreground">
							Helping businesses rank in the top 1% of Google and AI search
							results.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="Facebook"
							>
								<Facebook size={20} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="Instagram"
							>
								<Instagram size={20} />
							</a>
							<a
								href="https://youtube.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="YouTube"
							>
								<Youtube size={20} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold mb-4">Services</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/search-seo"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									Search SEO
								</Link>
							</li>
							<li>
								<Link
									to="/local-maps-seo"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									Local Maps SEO
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/about"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/consultation"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									Free Consultation
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-semibold mb-4">Contact</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start space-x-2 text-muted-foreground">
								<MapPin size={16} className="mt-0.5 flex-shrink-0" />
								<span>Gilbert, Arizona</span>
							</li>
							<li className="flex items-center space-x-2">
								<Phone size={16} className="flex-shrink-0" />
								<a
									href="tel:+1234567890"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									(123) 456-7890
								</a>
							</li>
							<li className="flex items-center space-x-2">
								<Mail size={16} className="flex-shrink-0" />
								<a
									href="mailto:austin@onepercentseo.com"
									className="text-muted-foreground hover:text-primary transition-colors link-underline"
								>
									austin@onepercentseo.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} One Percent SEO. All rights reserved.
					</p>
					<div className="flex space-x-6 text-sm">
						<Link
							to="/privacy-policy"
							className="text-muted-foreground hover:text-primary transition-colors link-underline"
						>
							Privacy Policy
						</Link>
						<Link
							to="/terms"
							className="text-muted-foreground hover:text-primary transition-colors link-underline"
						>
							Terms & Conditions
						</Link>
						<Link
							to="/accessibility"
							className="text-muted-foreground hover:text-primary transition-colors link-underline"
						>
							Accessibility
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
