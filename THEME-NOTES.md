# Warm Paper Tufte-Jekyll resume

A single-page academic resume built on Tufte-Jekyll, set entirely in ET Book on a warm paper palette.

## Design

- The Tufte-Jekyll layout and Liquid tags remain intact; resume styles live in `_sass/_resume.scss`.
- ET Book assets are byte-identical to the files distributed by `jez/tufte-pandoc-css`; the license is at `fonts/et-book/LICENSE`.
- Every piece of text uses the ET Book stack. Only the Chinese name falls back to the CJK serif fonts in the stack.
- Palette (`_sass/_settings.scss`): paper `#f7f1e7`, highlight `#f3c969`, ink `#2d2722`, accent `#a34f2b`.
- Screen sizing (`_sass/_resume.scss`): a fluid 11–14 px root size at the browser's default font setting keeps phones readable and makes desktop type, logos, cards and spacing more compact.
- Above 760 px, navigation, About, publication timelines and the footer share a centered column capped at 58.8 rem; the mobile layout keeps its existing spacing.
- The framed photo sits beside About on desktop; on phones it follows the name and contact links, before the introduction.
- One page with four anchored sections (About, Education, Internships, Publications), a sticky nav that highlights the current section, timelines, and letter-paper publication cards.

## Editing content

| What | Where |
|---|---|
| Name, Chinese name, tagline, email, site URL | `_config.yml` (`author`, `author_zh`, `tagline`, `email`, `url`) |
| About paragraph and research-interest chips | `index.html`, the `#about` section |
| Framed About photo | `assets/photos/about.webp`; layout and frame in `_sass/_resume.scss` |
| Education | `_data/education.yml` |
| Internships | `_data/experience.yml` |
| Publications (authors, equal-contribution marks, links) | `_data/publications.yml`; figures go in `assets/papers/` |
| Organisation logos | `assets/logos/` |
| Contact links and footer icons | `_data/social.yml` |
| Nav items | `_includes/header.html`; each `href` must match a section `id` in `index.html` |

Upstream demo pages, posts and images stay in the repository for reference but are excluded from the build in `_config.yml`.

## Asset sources

- Paper figures: Figure 1 of each paper (PreCoMem camera-ready source; arXiv HTML for 2609.22231 and 2508.09507), resized to 720 px WebP.
- Nankai University emblem: `File:Nankai University logo.svg` on English Wikipedia.
- vivo logo: `File:Vivo (China) logo.svg` on Wikimedia Commons.
- Zhipu AI mark: the Z mark from `https://www.zhipuai.cn/logo.svg`, with padding added to its viewBox.
- About photo: provided by the site owner; full composition retained, resized to 720 × 960 WebP without embedded metadata.
- ORCID and Google Scholar icons: [Simple Icons](https://github.com/simple-icons/simple-icons), CC0 SVG paths, rendered in `_includes/social-icon.html`.

## Local preview

```sh
GEM_HOME="$PWD/.gems" \
GEM_PATH="$PWD/.gems:/Library/Ruby/Gems/2.6.0:/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/gems/2.6.0" \
BUNDLE_GEMFILE="$PWD/Gemfile" \
"$PWD/.gems/bin/bundle" _2.1.4_ exec jekyll serve --baseurl ''
```

## Deploying to GitHub Pages

The upstream project uses custom Jekyll plugins, so the site is built in GitHub Actions (`.github/workflows/pages.yml`) and `_site` is deployed, rather than relying on Pages' built-in Jekyll builder.

The stylesheet URL includes the build timestamp so returning visitors receive the new styles after each deployment.

The site repository is `ZhongWishing/ZhongWishing.github.io` (remote `origin`; the original theme is remote `upstream`), a user site served at `https://zhongwishing.github.io/`. Pushing to `main` triggers the workflow.

1. One-time setup: in the repository settings, open Pages and set Source to "GitHub Actions".
2. The workflow passes the Pages base path to `--baseurl` (empty for this user site), so the same code also works if the site is ever moved to a project repository served under `/<repo>/`.
