import { defineSiteConfig } from "./src/config/site";

export const siteConfig = defineSiteConfig({
	author: "Tobias Rapp",
	title: "Tobias Rapp | Visual and accelerated computing",
	siteUrl: "https://tobiasrp.github.io",
	description:
		"Projects, publications, and technical writing on computer graphics, visualization, computer vision, and GPU computing.",
	hero: {
		headline: "Visual and accelerated computing",
		subheadline:
			"I build high-performance visual computing systems, from scientific visualization and rendering to computer vision.",
		profileImage: "/profile.jpg",
		profileAlt: "Tobias Rapp outdoors",
		profileImageWidth: 460,
		profileImageHeight: 460,
	},
	keywords: [
		"GPU computing",
		"computer graphics",
		"scientific visualization",
		"computer vision",
	],
	affiliations: [
		{
			role: "Senior software engineer",
			institution: "Bosch",
			url: "https://www.bosch-mobility-solutions.com/en/",
		},
	],
	researchInterests: [
		"GPU computing",
		"Computer vision",
		"Rendering",
		"Scientific visualization",
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
		{ href: "/about", label: "About / CV" },
		{ href: "/projects", label: "Projects" },
		{ href: "/publications", label: "Publications" },
		{ href: "/posts", label: "Writing" },
	],
	footer: { showProfileLinks: true },
	pageTitles: {
		about: {
			title: "About / CV",
			description: "My background in visual computing and software engineering.",
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
			title: "Writing",
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
		posts: { title: "Latest writing", description: "Technical articles and notes" },
	},
});

export default siteConfig;
