import type { SiteConfig } from "../types/config";

type HeroInput = Pick<SiteConfig["hero"], "headline" | "subheadline"> &
	Partial<Omit<SiteConfig["hero"], "headline" | "subheadline">>;

type SectionCopy = {
	title?: string;
	description?: string;
};

type HomeSectionInput = SectionCopy & {
	enabled?: boolean;
};

type PageTitlesInput = Partial<
	Record<keyof SiteConfig["pageTitles"], SectionCopy>
>;

export interface SiteConfigInput
	extends Partial<
		Omit<
			SiteConfig,
			"author" | "siteUrl" | "hero" | "footer" | "pageTitles" | "homeBlocks"
		>
	> {
	author: string;
	siteUrl: string;
	hero: HeroInput;
	footer?: Partial<SiteConfig["footer"]>;
	pageTitles?: PageTitlesInput;
	homeBlocks?: {
		hero?: { enabled?: boolean };
		showcase?: HomeSectionInput;
		publications?: HomeSectionInput;
		posts?: HomeSectionInput;
	};
}

const defaultNavLinks: SiteConfig["navLinks"] = [
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/publications", label: "Publications" },
	{ href: "/posts", label: "Blog" },
];

const defaultPageTitles: SiteConfig["pageTitles"] = {
	about: {
		title: "About",
		description: "Experience and education in visual and accelerated computing.",
	},
	researches: {
		title: "Publications",
		description: "Research in visualization, graphics, and GPU computing.",
	},
	projects: {
		title: "Projects",
		description: "Selected research and software projects.",
	},
	teaching: {
		title: "Teaching",
		description: "Recent and past courses, materials, and teaching highlights.",
	},
	posts: {
		title: "Blog",
		description: "Technical notes and articles.",
	},
};

const defaultHomeBlocks: SiteConfig["homeBlocks"] = {
	hero: {
		enabled: true,
	},
	showcase: {
		enabled: true,
		title: "Selected projects",
		description: "Research and software I've worked on",
	},
	publications: {
		enabled: true,
		title: "Selected Publications",
		description: "Recent peer-reviewed work",
	},
	posts: {
		enabled: true,
		title: "Latest Posts",
		description: "Thoughts and updates",
	},
};

/**
 * Completes the concise public configuration with stable template defaults.
 * Keep user-facing choices in the root site.config.ts file and framework
 * defaults here so routine personalization stays short and type-safe.
 */
export function defineSiteConfig(input: SiteConfigInput): SiteConfig {
	const ogImage = input.ogImage ?? "/favicon.svg";

	return {
		title: input.title ?? `${input.author} | Academic Portfolio`,
		author: input.author,
		description: input.description ?? input.hero.subheadline,
		siteUrl: input.siteUrl,
		language: input.language ?? "en",
		locale: input.locale ?? "en_US",
		ogImage,
		ogImageAlt: input.ogImageAlt ?? `${input.author} academic portfolio`,
		ogImageWidth: input.ogImageWidth,
		ogImageHeight: input.ogImageHeight,
		favicon: input.favicon ?? "/favicon.svg",
		keywords: input.keywords ?? [],
		affiliations: input.affiliations ?? [],
		researchInterests: input.researchInterests ?? [],
		socialLinks: input.socialLinks ?? [],
		navLinks: input.navLinks ?? defaultNavLinks.map((link) => ({ ...link })),
		footer: {
			copyright: input.footer?.copyright ?? "All rights reserved.",
			showProfileLinks: input.footer?.showProfileLinks ?? false,
			showAuthor: input.footer?.showAuthor ?? true,
		},
		hero: {
			headline: input.hero.headline,
			subheadline: input.hero.subheadline,
			...(input.hero.statusBadge !== undefined
				? { statusBadge: input.hero.statusBadge }
				: {}),
		},
		pageTitles: {
			about: { ...defaultPageTitles.about, ...input.pageTitles?.about },
			researches: {
				...defaultPageTitles.researches,
				...input.pageTitles?.researches,
			},
			projects: {
				...defaultPageTitles.projects,
				...input.pageTitles?.projects,
			},
			teaching: {
				...defaultPageTitles.teaching,
				...input.pageTitles?.teaching,
			},
			posts: { ...defaultPageTitles.posts, ...input.pageTitles?.posts },
		},
		homeBlocks: {
			hero: {
				...defaultHomeBlocks.hero,
				...input.homeBlocks?.hero,
			},
			showcase: {
				...defaultHomeBlocks.showcase,
				...input.homeBlocks?.showcase,
				enabled:
					input.homeBlocks?.showcase?.enabled ??
					defaultHomeBlocks.showcase.enabled,
			},
			publications: {
				...defaultHomeBlocks.publications,
				...input.homeBlocks?.publications,
			},
			posts: {
				...defaultHomeBlocks.posts,
				...input.homeBlocks?.posts,
			},
		},
	};
}
