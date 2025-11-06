import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	author: string;
	category: string;
	content: string;
	readingTime?: string;
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
	if (!fs.existsSync(blogDirectory)) {
		return [];
	}

	const fileNames = fs.readdirSync(blogDirectory);
	const allPostsData = fileNames
		.filter((fileName) => fileName.endsWith(".mdx"))
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(blogDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);

			return {
				slug,
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				author: data.author,
				category: data.category || "General",
				content,
				readingTime: data.readingTime,
			} as BlogPost;
		});

	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getPostBySlug(slug: string): BlogPost | null {
	const fullPath = path.join(blogDirectory, `${slug}.mdx`);

	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		slug,
		title: data.title,
		date: data.date,
		excerpt: data.excerpt,
		author: data.author,
		category: data.category || "General",
		content,
		readingTime: data.readingTime,
	} as BlogPost;
}
