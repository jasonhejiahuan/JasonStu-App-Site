# JasonStu Apps website

The production website for the JasonStu Apps collection, built with vinext and
deployed as a server-rendered Cloudflare Worker with Static Assets.

Current public routes:

- `/` — collection home
- `/trackpad-wizard` — Trackpad Wizard product exploration and verified download
- `/trackpad-wizard/privacy` — current implementation privacy notes
- `/trackpad-wizard/support` — Trackpad Wizard support path
- `/linkscope` — LinkScope Lite 2.0.1 product exploration and free Mac App Store download
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

`DESIGN_MANUAL.md` records the current architecture and validation. The whole-site
visual direction is recorded in `docs/art-direction/site-visual-rebuild.md`:
shared typography and alignment, real product captures, and detailed guidance on
the support routes. Earlier product briefs describe superseded compositions.
