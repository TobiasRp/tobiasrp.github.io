import publicationsRaw from '../data/publications.bib?raw';
import resourcesRaw from '../data/publication-resources.yml?raw';
import { parseBibtex, type BibEntry } from './bibtex';
import { z } from 'astro/zod';
import { parse } from 'yaml';

const resourceLink = z.object({
	label: z.string().trim().min(1),
	href: z.string().trim().refine(
		(value) => (value.startsWith('/') && !value.startsWith('//')) || /^https?:\/\//.test(value),
		'Use a local path or an HTTP(S) URL',
	),
}).strict();
const resourcesByPaper = z.record(z.string(), z.array(resourceLink)).parse(parse(resourcesRaw) ?? {});
const parsedPapers = parseBibtex(publicationsRaw);
const paperIds = new Set(parsedPapers.map((paper) => paper.id));
for (const id of Object.keys(resourcesByPaper)) {
	if (!paperIds.has(id)) throw new Error(`Publication resources refer to an unknown paper: ${id}`);
}
const papersCache: BibEntry[] = parsedPapers.map((paper) => ({
	...paper,
	resources: resourcesByPaper[paper.id] ?? [],
}));

export function getAllPapers(): BibEntry[] {
	return papersCache;
}

export function getFeaturedPapers(
	limit = 3,
	papers: BibEntry[] = papersCache,
): BibEntry[] {
	return papers.filter((paper) => paper.category === 'Publication').slice(0, limit);
}
