import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	author: "Tobias Rapp",
	title: "Tobias Rapp | Performance engineering for GPU and AI systems",
	siteUrl: "https://tobiasrp.github.io",
	description:
		"I build and optimize compute-intensive software, from CUDA algorithms to real-time AI inference. The same focus on efficient execution shaped my PhD research in scientific visualization and earlier work in graphics.",
	ogImage: "/images/turbine.png",
	ogImageAlt: "Scientific visualization of a turbine flow field",
	ogImageWidth: 1024,
	ogImageHeight: 768,
	hero: {
		headline: "Performance engineering for GPU and AI systems",
		subheadline:
			"I build and optimize compute-intensive software, from CUDA algorithms to real-time AI inference. The same focus on efficient execution shaped my PhD research in scientific visualization and earlier work in graphics.",
	},
	keywords: [
		"GPU computing",
		"machine learning",
		"computer graphics",
		"scientific visualization",
		"computer vision",
	],
	affiliations: [
		{
			role: "Senior Software Engineer",
			institution: "Robert Bosch",
			url: "https://www.bosch-mobility-solutions.com/en/",
		},
	],
	researchInterests: [
		"GPU computing",
		"AI Inference",
		"Machine Learning",
		"Visualization",
	],
	socialLinks: [
		{ label: "GitHub", href: "https://github.com/TobiasRp", icon: "i-mdi:github" },
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/tobias-r-71833393/",
			icon: "i-mdi:linkedin",
		},
	],
	navLinks: [
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/publications", label: "Publications" },
		{ href: "/posts", label: "Blog" },
	],
	footer: { showProfileLinks: true },
	pageTitles: {
		about: {
			title: "About",
			description: "Senior software engineer working on real-time AI inference and performance-critical systems, with a PhD in computer science and a background in scientific visualization and graphics.",
		},
		researches: {
			title: "Publications",
			description: "Research in visualization, graphics, and GPU computing.",
		},
		projects: {
			title: "Projects",
			description: "Selected research and software projects.",
		},
		posts: {
			title: "Blog",
			description: "Technical notes and articles.",
		},
	},
	homeBlocks: {
		showcase: {
			title: "Selected projects",
			description: "Research and software I've worked on",
		},
		publications: {
			title: "Selected publications",
			description: "Peer-reviewed research",
		},
		posts: { title: "Latest posts", description: "Technical articles and notes" },
	},
});

export default siteConfig;
