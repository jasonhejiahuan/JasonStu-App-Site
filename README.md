# JasonStu Apps website

The production website for the JasonStu Apps collection, built for ChatGPT Sites
with vinext and a Cloudflare Worker-compatible server-rendered output.

Current public routes:

- `/` — collection home
- `/linkscope` — LinkScope product exploration
- `/linkscope/privacy` — current implementation privacy notes
- `/linkscope/support` — LinkScope support path

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run build
npm test
```

Read `AGENTS.md`, then `DESIGN_MANUAL.md`, before substantial work. The governing
design, accessibility, browser, progressive-enhancement, and performance policy
is in `DESIGN_GUIDELINES.md`.

