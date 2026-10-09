# Tobias Rapp's website

This repository contains the source for [tobiasrp.github.io](https://tobiasrp.github.io). The new site uses [Scholar Pages](https://github.com/jxpeng98/astro-theme-scholars), a static Astro template. GitHub Pages hosts the built files; the existing `tobiasrp.github.io` repository and address stay the same.

## Editing the site

| What to change | Where |
| --- | --- |
| Name, introduction, navigation, social links | `site.config.ts` |
| CV | `src/data/about.yml` |
| Publications | `src/data/publications.bib` |
| Projects | `src/content/projects/*.md` |
| Writing | `src/content/posts/*.md` |
| Images and downloadable files referenced in articles | `public/images/`, `public/files/` |
| Colors and typography | `uno.config.ts` |

Each project and post is a Markdown file. Existing Jekyll source files remain in the repository as migration reference; the GitHub Pages workflow publishes only the Astro `dist/` output. Nine old post addresses are generated as redirects in `src/pages/[...legacy].astro`, so existing links continue to work.

## Preview locally

Install Node.js 24 and pnpm 11, then run:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Astro. To check a production build:

```sh
pnpm astro check
pnpm build
```

## Publish from this repository

The workflow in `.github/workflows/pages.yml` builds the site when a change reaches `master`. In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The workflow then publishes `dist/` to the same `https://tobiasrp.github.io` address. It does not need a new repository, a `gh-pages` branch, or a custom domain setting.

The former Jekyll source can be removed after the migration has been reviewed and published. The `.obsidian` directory under `_posts` is local, untracked material and is not part of the new site.

The Scholar Pages template is MIT licensed; see [LICENSE](LICENSE).
