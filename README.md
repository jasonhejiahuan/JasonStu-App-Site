# JasonStu Apps website

The production website for the JasonStu Apps collection, built with vinext and
deployed as a server-rendered Cloudflare Worker with Static Assets.

Current public routes:

- `/` — collection home
- `/trackpad-wizard` — Trackpad Wizard product exploration and verified download
- `/trackpad-wizard/privacy` — current implementation privacy notes
- `/trackpad-wizard/support` — Trackpad Wizard support path
- `/linkscope` — LinkScope product exploration
- `/linkscope/privacy` — LinkScope Lite privacy policy
- `/linkscope/support` — LinkScope support path

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run build
npm test
```

Cloudflare deployment configuration lives in `wrangler.jsonc`. The production
Worker serves `https://apps.jasonstu.cc`; the named `beta` environment serves the
no-index staging origin at `https://apps.beta.jasonstu.cc`.

Read `AGENTS.md`, then `DESIGN_MANUAL.md`, before substantial work. The governing
design, accessibility, browser, progressive-enhancement, and performance policy
is in `DESIGN_GUIDELINES.md`.
