# JasonStu Apps Design Constitution

Status: Governing design and implementation guidance  
Research completed: 2026-08-20  
Applies to: the JasonStu Apps website, its shared shell, all product pages, and future public-facing product experiences

---

## 1. Purpose

This document protects the JasonStu Apps website from becoming a generic software-marketing template as it grows.

It is a constitution, not a component catalog. It defines how decisions are made, what quality means, which patterns are prohibited, and where individual products are free to develop their own visual character. It deliberately does **not** prescribe one reusable page layout. Future pages must be art-directed from product truth, then implemented with shared engineering and accessibility standards.

The website should feel like a carefully edited collection of working software: quiet enough to let each app speak, distinctive enough to be remembered, and technically progressive without turning browser technology into spectacle.

The central rule is:

> **Demonstrate, do not decorate. Compose, do not assemble.**

Every important visual or interactive decision must improve at least one of these outcomes:

1. Make the product easier to understand.
2. Make the relationship between products easier to navigate.
3. Make an interaction clearer, faster, or more satisfying.
4. Strengthen the product's specific identity.
5. Improve accessibility, responsiveness, performance, or maintainability.

If a decision does none of these, it is ornament and should usually be removed.

---

## 2. Product and audience premise

JasonStu Apps is a unified home for multiple macOS and iOS applications, not a single-product conversion funnel. Visitors may arrive to:

- understand what an app actually does;
- judge whether it fits a specific workflow;
- inspect interface quality and technical depth;
- download, buy, or find platform requirements;
- get support, release information, or privacy details;
- move between related JasonStu products.

The site must therefore behave as both a **collection index** and a set of **product explorations**. It should earn confidence through evidence—real interface states, truthful copy, responsive demonstrations, precise technical details—not through generic claims, social-proof theater, or repeated calls to action.

### The desired visitor impression

The visitor should feel:

- “I can see how this product works.”
- “This was designed by people with a point of view.”
- “The details have been considered.”
- “I know where to download it or learn more.”
- “The other apps belong to the same maker, but they are not clones.”

The visitor should not feel:

- “This is another SaaS landing-page template.”
- “The effects are hiding a lack of substance.”
- “Every section is the same card with different content.”
- “I have to scroll through an advertisement to find the product.”

---

## 3. Research basis

The following references were studied for principles, not as templates. No page should imitate a reference's layout, typography, palette, or signature effect.

### 3.1 Independent and Apple-platform software

#### [Playdate by Panic](https://play.date/) and [Panic](https://panic.com/)

**What works**

- The product's physical character drives the identity. Color, scale, photography, type, and playful language feel native to the object rather than added by a generic brand layer.
- Product imagery is allowed to dominate. The interface does not compete with the thing being presented.
- The company site can hold very different products together through voice and confidence rather than forcing identical page templates.

**Lesson for JasonStu Apps**

Shared identity can be behavioral and editorial—quality of typography, directness, navigation, and craft—while product pages remain visually independent.

**Do not copy**

The saturated yellow/purple palette, toy-like tone, or product-specific playfulness. Those work because they are intrinsic to Playdate.

#### [Things by Cultured Code](https://culturedcode.com/things/)

**What works**

- Large, exact product imagery and generous quiet space communicate confidence.
- The UI is shown as the primary evidence. Composition follows the app's calm, ordered character.
- Multi-device presentation supports the product story instead of becoming a device-mockup collage.

**Lesson for JasonStu Apps**

When the app interface is strong, the site should enlarge and clarify it rather than surround it with explanatory furniture.

**Limit observed**

Its traditional sections, reviews, and purchase area are useful but should not become a default JasonStu page formula.

#### [iA Writer](https://ia.net/writer)

**What works**

- The site pairs each claim with a relevant interface state: focus mode, authorship, syntax highlighting, and editor comparisons.
- Typography is both brand and product evidence because the product itself is about writing.
- Copy explains deliberate subtraction rather than inflating feature count.

**Lesson for JasonStu Apps**

Product claims should be adjacent to proof, and an app's core material—text, data, media, network state, or interaction—can become the page's compositional material.

**Limit observed**

Long feature sequences and review material can become repetitive. JasonStu pages should edit more aggressively and provide progressive disclosure for detail.

#### [Halide](https://halide.cam/)

**What works**

- Photography, device interface, and camera culture form one coherent visual world.
- Dark presentation is content-motivated, not a generic “premium” treatment.
- Technical capability and tactile product personality coexist.

**Lesson for JasonStu Apps**

An app may own a stronger accent identity or imagery treatment when it emerges from the app's domain. A shared brand must not suppress that specificity.

**Limit observed**

A predominantly dark photographic world cannot be generalized to utility apps, and JasonStu must still design a full light appearance.

#### [Flighty](https://flighty.com/)

**What works**

- Notifications, maps, status changes, route data, and delay scenarios demonstrate the product through recognizable moments.
- Product value is expressed as time-sensitive state, not as abstract feature labels.
- Technical data is made approachable without removing its specificity.

**Lesson for JasonStu Apps**

Pages should organize around user situations and changing product states when those tell the story better than a feature inventory.

**Limit observed**

Repeated marketing copy and duplicated responsive markup in the indexed page illustrate why a clean content model and disciplined responsive implementation matter.

### 3.2 Editorial and explanatory web design

#### [Stripe Press](https://press.stripe.com/)

**What works**

- Typography, covers, sequencing, and whitespace provide hierarchy without enclosing every item.
- A consistent editorial system supports many distinct works.
- Content density can change dramatically while the publication still feels coherent.

**Lesson for JasonStu Apps**

The multi-app system should behave more like a well-designed imprint than a dashboard. Repetition should come from editorial rules, not identical boxes.

#### [The Pudding](https://pudding.cool/)

**What works**

- Interaction and visualization are used to explain an idea that prose alone would communicate poorly.
- Individual stories have their own visual language while publishing standards remain recognizable.
- The best interactions create a model the reader can manipulate or follow.

**Lesson for JasonStu Apps**

Interactive product demonstrations are justified when they let a visitor form a correct mental model. Interaction is not a reward for scrolling; it is explanatory media.

### 3.3 Platform, accessibility, and performance guidance

- Apple's [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Color](https://developer.apple.com/design/human-interface-guidelines/color), [Typography](https://developer.apple.com/design/human-interface-guidelines/typography), and [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) guidance reinforce intentional light/dark variants, adaptive layouts, legibility, and testing across contexts rather than treating appearance as a fixed canvas.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the accessibility baseline. Its contrast, reflow, focus, target-size, input, and motion requirements are product requirements, not a final audit layer. W3C's [`prefers-reduced-motion` technique](https://www.w3.org/WAI/WCAG22/Techniques/css/C39) supports removing nonessential motion for people who request it.
- MDN documents [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries), [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), [`content-visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/content-visibility), [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports), the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), and the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API). These support a standards-first progressive-enhancement strategy.
- WebKit's documentation for [cross-document View Transitions](https://webkit.org/blog/16301/webkit-features-in-safari-18-2/), [CSS scroll-driven animation](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/), and [anchor positioning](https://webkit.org/blog/17240/a-gentle-introduction-to-anchor-positioning/) shows that modern capabilities can remove JavaScript and improve continuity, but their evolving implementations still require detection, fallbacks, and cross-engine testing.
- [Core Web Vitals](https://web.dev/articles/vitals) provide useful field targets for loading, responsiveness, and stability: LCP at or under 2.5 seconds, INP at or under 200 milliseconds, and CLS at or under 0.1 at the 75th percentile, evaluated separately for mobile and desktop.

### 3.4 Recurring strengths in the best references

Across the strongest work, the recurring strengths are:

1. **A governing idea.** The page can be summarized as a visual and narrative thesis, not a list of effects.
2. **Product evidence.** Screens, states, outputs, objects, and real scenarios carry the argument.
3. **Typographic hierarchy.** Scale, measure, weight, placement, and rhythm do work that generic containers often replace.
4. **Edited pacing.** Dense and quiet moments alternate; whitespace is relational, not merely large.
5. **Specificity.** Voice, imagery, and interaction arise from the product's domain.
6. **Understandable novelty.** Unconventional composition remains navigable and readable.
7. **Restraint.** One strong moment is allowed to be strong because everything else is not shouting.
8. **Technical fit.** Motion and browser features support the concept instead of advertising implementation skill.

### 3.5 Why AI-generated websites become generic

Generic AI-built pages tend to optimize for locally plausible components rather than an overall composition. Common failure mechanisms are:

- beginning with a component library before understanding content;
- translating every content group into a rounded card;
- treating a gradient, glass panel, glow, or floating mockup as art direction;
- repeating icon + heading + paragraph because it is easy to generate;
- using one centered hero and alternating two-column sections regardless of product;
- inventing feature copy to fill a symmetrical grid;
- making every section self-contained, which destroys narrative relationships;
- using motion as proof of polish rather than as information;
- generating several competing accent colors with no semantic roles;
- using the same radius, shadow, and spacing everywhere;
- treating mobile as stacked desktop components;
- hiding weak information architecture under “immersive” scrolling;
- relying on generic adjectives such as powerful, seamless, smart, next-generation, or effortless;
- copying the visual grammar of current SaaS templates even when the product is a native personal utility.

JasonStu Apps avoids these failures by requiring a page thesis, product evidence, a composition brief, and an explicit reason for every visible boundary and motion behavior.

---

## 4. Directions considered

Three plausible directions were evaluated before selecting the governing direction.

### Direction A — Quiet Instrument

A nearly monochrome, highly typographic catalog. Product windows and screenshots sit in generous fields of space. The identity comes from extreme precision, a restrained grotesk typeface, fine rules, and measured asymmetry.

**Strengths**

- Excellent clarity and accessibility potential.
- Fast, robust, and maintainable.
- Naturally compatible with macOS software and technical audiences.
- Light and dark appearances can be equally disciplined.

**Risks**

- Can become anonymous or too close to familiar Apple/minimalist conventions.
- Gives colorful or experiential apps too little room to express themselves.
- Without exceptional typography and imagery, “quiet” becomes under-designed.
- Interactive demonstrations may feel grafted onto a static catalog.

### Direction B — Living Software Manual

A shared editorial spine presents each app as its own chapter. Typography, navigation, spacing logic, truthfulness, and engineering standards remain consistent. Each app derives its accent, imagery, rhythm, and interaction concept from its primary user action. Pages behave like guided product explorations: visitors inspect real states, manipulate a focused demonstration, and access technical or purchase details without passing through a fixed funnel.

**Strengths**

- Distinctive without sacrificing usability.
- Scales to multiple apps without cloning the first product page.
- Makes product evidence the center of the visual system.
- Supports experimental enhancement selectively rather than site-wide.
- Allows calm pages and expressive pages to belong to one collection.
- Editorial content models and shared engineering primitives remain maintainable.

**Risks**

- Requires real art direction for each app; it cannot be generated by filling a template.
- Needs disciplined governance so “per-app freedom” does not become incoherence.
- Interactive demonstrations require a clear scope and fallback.

### Direction C — Interactive Systems Lab

The site behaves as a set of live experiments. Product pages use scroll-linked state, direct manipulation, spatial transitions, realtime visualizations, and browser-native graphics to make capabilities explorable.

**Strengths**

- Memorable and technically progressive.
- Particularly effective for apps involving telemetry, media, networks, or spatial state.
- Can make abstract capabilities concrete.

**Risks**

- Highest accessibility, compatibility, energy, and maintenance cost.
- Encourages spectacle, scroll dependency, and excessive client JavaScript.
- Ages quickly as APIs, devices, and visual trends change.
- Creates pressure for every product to have a “demo trick,” even when a screenshot or concise explanation is better.

### Comparison

| Criterion | Quiet Instrument | Living Software Manual | Interactive Systems Lab |
| --- | --- | --- | --- |
| Originality | Medium | High | High initially; trend-sensitive |
| Immediate usability | High | High | Medium |
| Accessibility | High | High with discipline | Medium/high cost |
| Maintainability | High | High if the shared spine stays small | Low to medium |
| Performance | Excellent | Excellent baseline; controlled enhancement | Variable/high risk |
| Responsive flexibility | High | High | Medium/high implementation cost |
| Cross-browser robustness | Excellent | Excellent baseline | Variable |
| Experimental enhancement | Limited but possible | Strong and selective | Central/dependent |
| Multi-product suitability | Medium | Excellent | Medium |
| Risk of generic output | Medium | Low | Medium once effects repeat |

### Selected direction: Living Software Manual

This direction best balances identity, usability, longevity, and technical ambition. It does not average the other directions together. It adopts one clear philosophy:

> **JasonStu Apps is an editorial collection of software you can inspect. Shared standards create the collection; each product's behavior creates its chapter.**

Quietness is the default environment. Interaction is introduced only where it creates product understanding. A product may be colorful, technical, photographic, or nearly monochrome, but it must remain part of the same editorial and engineering culture.

---

## 5. Governing design principles

### 5.1 Product truth before marketing structure

Start with what the app lets a person do, what state changes, and what evidence makes that clear. Do not begin with “hero,” “features,” or “CTA.”

Each product page must identify:

- the primary user job;
- the most revealing product state;
- two to four supporting situations or capabilities;
- the concrete proof available for each claim;
- the practical action a visitor may need next.

### 5.2 Composition before components

Before choosing components, define:

1. the page's narrative sequence;
2. the dominant visual material;
3. the typographic hierarchy;
4. the relationship between copy and proof;
5. the dense and quiet moments;
6. the responsive transformation;
7. the one interaction, if any, that materially improves understanding;
8. the baseline experience without that interaction.

Only after this is clear may reusable components be derived.

### 5.3 Evidence before assertion

Every nontrivial product claim should be supported nearby by at least one of:

- a real screenshot or capture;
- an interactive reconstruction using representative data;
- a before/after state;
- a concrete scenario;
- a technical fact, compatibility statement, or measurement;
- a concise demonstration video with controls and a poster frame.

Do not place a paragraph far from the visual or interaction it explains. Do not invent copy to balance a composition.

### 5.4 Whitespace is a relationship

Whitespace may separate chapters, establish emphasis, preserve image scale, or slow the reading rhythm. It must not be treated as an empty area that needs a floating sentence. A sparse composition is complete when its relationships are clear.

### 5.5 One dominant idea per viewport

At any ordinary viewport position, visitors should be able to identify the dominant subject. Secondary annotations may support it, but multiple equal-weight headings, panels, glows, animations, and calls to action are prohibited.

### 5.6 Restraint creates distinction

The system earns expressive moments by keeping the surrounding interface calm. Most surfaces should be flat. Most type should be neutral. Most transitions should be brief or absent. Accent color and motion become meaningful because they are not ubiquitous.

### 5.7 The baseline is complete

The essential experience—content, navigation, product understanding, compatibility details, and download/purchase access—must work with semantic HTML and core CSS. JavaScript and experimental APIs may improve continuity or explanation but must not rescue an incomplete baseline.

---

## 6. Information architecture

### 6.1 The collection level

The JasonStu Apps home page is an **index with a stage**, not a grid of product cards.

It should make the collection legible through product names, concise specific descriptors, platform/availability facts when relevant, and one changing or selected visual field. Possible compositions include a typographic index paired with a large product image, a sequence of app chapters, or a spatial list whose imagery changes on focus. These are possibilities, not prescribed layouts.

The home page must not fabricate equal-sized boxes merely because apps are enumerable. Products may receive different visual weight based on their role, maturity, and current relevance, provided every app remains discoverable.

### 6.2 Product pages

A product page is a guided exploration, not a funnel. It must contain the following **content responsibilities**, but their order and presentation are flexible:

- identity: name, icon, and a precise statement of purpose;
- evidence: the app in a revealing real state;
- exploration: the few capabilities or situations needed to understand fit;
- practical facts: platforms, requirements, privacy, availability, price model, or release status as applicable;
- action: download, purchase, open the App Store, or join a waitlist as applicable;
- support path: support, documentation, release notes, or contact;
- collection context: a quiet route back to JasonStu Apps and, where relevant, related products.

The responsibilities must not automatically become seven sections. Several may coexist in one composition; some may use progressive disclosure.

### 6.3 Supporting content

Support, privacy, release notes, press material, and legal pages should use the same typography and appearance system but favor direct document structures. They do not need product-page spectacle. Clear reading, searchability, stable anchors, print behavior, and durable URLs take priority.

### 6.4 Navigation

- Maintain one quiet global navigation system across the collection.
- The JasonStu Apps identity and route back to the collection must always be clear.
- Product switching may use a typographic index, menu, or contextual link; it must not require hovering.
- Long product pages may include local navigation only when it helps orientation. A sticky local nav must not obscure focused content or consume excessive mobile height.
- Download or purchase access should be discoverable near the product identity and again when decision-relevant facts conclude. Do not repeat a CTA after every chapter.
- Navigation labels must be specific and stable. Avoid mysterious symbols as the only route to important content.
- Every menu must be keyboard-operable, touch-friendly, dismissible, and functional without motion.

---

## 7. Art direction

### 7.1 Shared identity: the editorial spine

The following qualities are shared across all JasonStu Apps pages:

- precise, unexaggerated language;
- typography-led hierarchy;
- generous but purposeful spacing;
- product imagery treated as evidence;
- restrained surfaces and effects;
- clear interaction feedback;
- excellent light and dark appearances;
- visible keyboard focus and high accessibility;
- fast loading and low idle energy use;
- a consistent global navigation voice;
- consistent quality, not consistent section layouts.

### 7.2 Per-app chapter identity

Each app may define:

- one primary accent family with light, dark, and high-contrast variants;
- a domain-appropriate imagery treatment;
- a page-specific composition and rhythm;
- one optional interaction thesis;
- a limited set of supporting type treatments, diagrams, or data marks;
- a product-specific background field or tonal progression.

Per-app identity must be derived from something true about the app: its material, workflow, data, pace, platform role, or output. “It looks cool” is not sufficient.

### 7.3 Required per-page art-direction brief

Before implementation, every major product page must document:

1. **Product truth:** the primary job and the most revealing state.
2. **Page thesis:** one sentence describing how the page lets visitors understand the app.
3. **Dominant material:** screenshots, text, photography, data, media, or interaction.
4. **Rhythm:** where the page is dense, quiet, fast, and slow.
5. **Accent rationale:** why the product owns its color or tonal treatment.
6. **Interaction thesis:** what interaction teaches, or “none.”
7. **Responsive transformation:** how the composition changes on narrow and wide containers.
8. **Baseline and fallback:** what remains when enhancements are absent.

If this brief cannot be written specifically, the page is not ready for visual design.

---

## 8. Typography

Typography is the primary structural system. It must create hierarchy before borders, backgrounds, or containers are considered.

### 8.1 Typeface strategy

- Use one primary variable sans-serif family for brand and editorial text. **Instrument Sans** is the initial recommended open-web candidate because it is restrained, contemporary, and less platform-dependent than a system-only identity. Re-evaluate licensing, language coverage, rendering, and brand fit before production adoption.
- Use the system UI stack for controls where platform familiarity and compact metrics matter.
- Use `ui-monospace` or one carefully selected mono family only for genuine technical data, keyboard input, code, timestamps, identifiers, and annotations—not as a blanket “developer aesthetic.”
- Do not use more than two loaded webfont families on a page.
- Do not rasterize text inside hero artwork or screenshots when the text is site content.
- For languages the primary family does not cover, define intentional `:lang()` stacks and test line breaks. Do not accept accidental browser fallback as localization design.

### 8.2 Scale and hierarchy

- Use a fluid type scale based on `clamp()` and content needs, not a pile of breakpoint overrides.
- Large display type may be dramatic, but must remain a sentence or label with meaning; it is not background texture.
- Body text should generally begin at 16–18 CSS pixels with comfortable line height. Compact metadata may be smaller only if contrast and importance permit.
- Keep long-form reading measures around 55–72 characters. Product annotations may be narrower.
- Use weight, width, size, spacing, and placement before introducing color or boxes for hierarchy.
- Limit all-caps to short labels with adjusted tracking. Never use all-caps for paragraphs.
- Avoid fake typographic variety: no arbitrary italics, outlined display text, or mixed families merely to make adjacent sections look different.

### 8.3 Responsive type

- Headings may scale with viewport or container size, but set readable minimum and maximum values.
- At narrow widths, change measure and line breaks intentionally. Do not preserve desktop display sizes until they wrap into isolated words.
- Test at 200% browser zoom and with user font overrides. Content and controls must reflow without loss.
- Prevent layout dependence on an exact headline line break unless that break is authored responsively and translations have alternatives.

---

## 9. Color and appearance

### 9.1 Light and dark are two authored appearances

Dark Mode is not inverted Light Mode. For every semantic color role, choose values by judging hierarchy, glare, saturation, and adjacent imagery in that appearance.

Start with these semantic roles:

- `canvas`: the page field;
- `canvas-muted`: a quiet chapter shift, not a generic section background;
- `surface`: an actual elevated or bounded interactive region;
- `surface-raised`: popovers, dialogs, and truly layered UI;
- `text-primary`;
- `text-secondary`;
- `text-tertiary` for nonessential metadata only;
- `line-subtle`;
- `line-strong`;
- `focus`;
- `accent` and `accent-contrast`;
- `status-success`, `status-warning`, and `status-danger` only when the content has those meanings.

An initial neutral direction may use a warm off-white canvas and near-black text in Light Mode, and a deep neutral—not absolute black—canvas with softened near-white text in Dark Mode. These are starting relationships, not immutable hex values.

### 9.2 Appearance behavior

- Default to `prefers-color-scheme` on first visit.
- If a manual control is provided, it must offer **Auto, Light, and Dark**, remain globally consistent, and persist locally without requiring an account.
- Apply the chosen appearance before first paint to avoid a flash of the wrong theme.
- Declare `color-scheme: light dark` so native controls, scrollbars, form elements, and browser UI participate correctly.
- `light-dark()` may simplify paired values, but explicit semantic tokens remain the canonical source when appearances need different relationships rather than two direct substitutions.
- Set appropriate `theme-color` metadata for both appearances.
- Test forced colors, increased contrast, and reduced transparency behavior. Never hide essential boundaries because a subtle background disappears.

### 9.3 Accent color

- The global collection uses neutrals plus a restrained shared focus/navigation color.
- Each app may own one accent family. Supporting hues must be functional or intrinsic to product content.
- Accent is not a section-decoration tool. Use it for product identity, meaningful data, selection, focus support, or a deliberate field.
- Provide independently tuned light and dark variants. Do not calculate dark accent by simple inversion.
- Never rely on color alone to communicate status, selection, or interactivity.
- Wide-gamut Display P3 color may enhance compatible displays inside `@media (color-gamut: p3)` or `@supports`; always provide an sRGB value first and check that color relationships do not collapse on sRGB displays.

### 9.4 Contrast

- Meet WCAG 2.2 AA minimums in every appearance and interactive state: normally 4.5:1 for body text, 3:1 for qualifying large text, and 3:1 for meaningful non-text controls and indicators.
- Secondary text is not exempt from contrast because it is aesthetically quiet.
- Test text over images at the worst point in responsive crops, not only in the source composition.
- Do not use opacity as the only method of creating hierarchy; it changes unpredictably over different fields.

---

## 10. Spacing, layout, and composition

### 10.1 Spacing logic

Use a small fluid spacing system with a base rhythm and optical adjustments. Prefer `clamp()` for major page gutters and chapter spacing. Repeated numeric tokens should provide consistency, but optical relationships may override tokens when documented.

Spacing must express one of four relationships:

- **attached:** label, annotation, or control belongs to an object;
- **grouped:** elements form one thought or interaction;
- **sequenced:** elements are distinct steps in one narrative;
- **separated:** a new chapter or conceptual shift begins.

Do not choose spacing solely because it matches a token name.

### 10.2 Grids

- Use CSS Grid and Flexbox as layout mechanics, not visible design motifs.
- Prefer a flexible editorial grid with content-aligned columns, hanging annotations, and full-bleed media opportunities.
- A shared underlying grid may coordinate pages, but individual chapters may span or offset columns intentionally.
- Do not reveal a twelve-column dashboard grid through repeated equal cards.
- Keep prose measures capped on large displays while allowing product imagery and compositional fields to expand.

### 10.3 Visible containers: the boundary test

A visible container is allowed only if its boundary communicates at least one of:

1. a real object boundary, such as a Mac window, iPhone screen, device, photo, or video frame;
2. an interactive hit region or control group;
3. an actual layer, such as a dialog, menu, or transient inspector;
4. a stateful region whose boundary is necessary to understand selection, clipping, comparison, or manipulation;
5. a semantic exception requiring prominence, such as a warning or compatibility constraint.

“These items belong together” is not enough; proximity, alignment, headings, rules, or tonal change should usually do that work.

Before drawing a rectangle, ask:

- Would the relationship remain clear without the edge?
- Does the edge represent something real or interactive?
- Is the radius appropriate to that object, or merely the site's default decoration?

If the first answer is yes and the second is no, remove the container.

### 10.4 Radius, borders, and shadow

- No global “card radius.” Radius follows the represented object or control.
- Section backgrounds should usually meet the canvas without a rounded outer shell.
- Borders are hairlines, separators, focus indicators, or object edges—not decoration around ordinary copy.
- Shadows represent actual elevation or help distinguish a real app window from a similar-toned background. Do not add shadows to make flat content feel “premium.”
- Glassmorphism is prohibited as a general visual language. Translucency is allowed only for a real layered control or a product-authentic material, with reduced-transparency and contrast fallbacks.

---

## 11. Responsive behavior

Responsiveness is a change in composition, not only a change in width.

### 11.1 Breakpoint policy

- Use intrinsic layout, flexible grids, `minmax()`, `clamp()`, and container queries first.
- Add a breakpoint when a specific composition fails: measure becomes unreadable, controls collide, imagery loses meaning, or navigation becomes inefficient.
- Name breakpoints by behavior or context, not device model.
- Use viewport media queries for global page conditions and container queries for reusable compositions.
- Keep fallback Grid/Flex and media-query layouts for browsers that lack a chosen container feature.

### 11.2 Narrow layouts

- Recompose rather than mechanically stack. A side annotation may become a caption; a direct-manipulation comparison may become a controlled two-state switch; a wide timeline may become a vertical sequence.
- Preserve semantic source order. Do not use visual reordering that makes keyboard or screen-reader order incorrect.
- Keep primary actions reachable without sticky overlays consuming the viewport.
- Respect `env(safe-area-inset-*)` where content reaches screen edges.
- Use `svh` for stable viewport-bound stages and `dvh` only when intentional response to browser chrome is needed, with traditional viewport fallbacks.

### 11.3 Touch, pointer, and hover

- Design controls for touch first even when the audience is desktop-heavy. Aim for at least 44×44 CSS-pixel hit areas; never go below WCAG 2.2 requirements.
- Gate hover-only embellishments with `(hover: hover) and (pointer: fine)`.
- Every hover revelation must have a focus and touch equivalent.
- Do not require precise dragging. Provide buttons, keyboard commands, or selectable states that achieve the same result.
- Avoid horizontal page scrolling. Purposeful horizontal media rails must be clearly signaled, keyboard-operable, and usable without a precision trackpad.

### 11.4 Large and high-resolution displays

- Do not stretch paragraph measures or scale every element indefinitely.
- Use the additional field for relationships: wider product imagery, offset annotations, comparisons, or calm negative space.
- Provide resolution-appropriate assets through `srcset`, `sizes`, and `<picture>` rather than serving one oversized image to all screens.
- Test 1× and 2× rendering, browser zoom, and non-Retina displays. Fine rules and small type must not depend on Retina smoothing.

### 11.5 Required responsive test contexts

At minimum, review:

- a narrow phone in portrait;
- a phone in landscape where supported;
- a tablet in portrait and landscape;
- a compact laptop window, not only full screen;
- a common desktop viewport;
- a large/high-resolution display;
- 200% browser zoom;
- touch and keyboard-only use.

Exact device models are test samples, not design breakpoints.

---

## 12. Product imagery and demonstrations

### 12.1 Screenshots are evidence

- Use real, current product captures. Do not recreate production UI with decorative HTML merely to make it easier to animate.
- Capture meaningful states with representative, privacy-safe data.
- Compose screenshots around the capability being explained; do not show a full window when a focused crop communicates better.
- Keep enough chrome to preserve context. A crop must not make the product look like an invented web interface.
- Maintain capture metadata: app version/build, platform, appearance, locale, viewport/device, and capture date.
- Replace stale captures when UI changes materially.

### 12.2 Device and window framing

- A device frame or macOS window is allowed because it represents a real boundary.
- Do not place every screenshot inside an additional rounded marketing card.
- Use native proportions and credible scale. Do not distort screenshots or mix inconsistent perspective renders.
- Prefer clean captures to gratuitous 3D mockups. Use perspective only when spatial context materially helps.

### 12.3 Light and dark imagery

- Select captures intentionally for each site appearance. Do not invert screenshots.
- A product screenshot may retain its own appearance when that state is part of the story, but the surrounding page must be composed to support it.
- Use `<picture media="(prefers-color-scheme: dark)">` for system-default variants and an explicit theme-aware source strategy when a manual override is active.
- Check transparent assets on both canvases for halos, baked backgrounds, and illegible edges.

### 12.4 Interactive demonstrations

An interactive demo is justified when direct manipulation or state progression explains the app better than a static sequence.

Good candidates include:

- comparing before and after;
- changing a small set of app states;
- inspecting a data relationship;
- scrubbing through a timeline when time is central to the product;
- selecting a scenario and seeing the corresponding UI response;
- exploring a technical visualization that has a readable summary.

Every demo must:

- state what can be changed;
- start in an understandable state;
- work with pointer, touch, and keyboard;
- expose an accessible name, state, and instructions where needed;
- avoid requiring drag as the only input;
- have a static or controlled-step fallback;
- preserve a textual explanation outside canvas/WebGL;
- pause when offscreen and stop when the page is hidden;
- avoid collecting user data unless explicitly designed, disclosed, and reviewed;
- be deep-linkable when its state is important to the narrative.

Do not simulate a whole app. Demonstrate the smallest truthful interaction that communicates the capability.

### 12.5 Video

- Prefer user-controlled playback with a useful poster frame.
- Autoplay is acceptable only for a short, silent, nonessential product loop that remains understandable when paused, respects reduced motion and data-saving signals, and does not compete with reading.
- Supply captions for speech, transcripts for substantive audio, and audio descriptions or adjacent text when visual-only action carries meaning.
- Never use a looping video as a substitute for a performant static first paint.

---

## 13. Interaction principles

### 13.1 Direct, reversible, and legible

- Interactions should reveal cause and effect immediately.
- State changes must be reversible unless the action naturally navigates or downloads.
- Controls must look operable without relying on hover discovery.
- Do not hide essential information behind novelty gestures.
- Preserve browser conventions: links navigate, buttons act, Back works, URLs are shareable, text is selectable, and native scrolling remains native.

### 13.2 Progressive disclosure

Use `details`, dialogs, popovers, tabs, or controlled states when they reduce initial complexity without hiding essential product fit. The summary/control must describe what will be revealed. Do not collapse core claims solely to make the page look sparse.

### 13.3 Feedback

- Provide immediate pressed, selected, loading, success, and error states.
- Do not use color alone for selected or error state.
- Avoid toast-only confirmation for important outcomes.
- Loading indicators should appear only when there is a wait; do not stage fake loading for drama.
- Preserve focus logically after menus, dialogs, and state changes.

### 13.4 Purchasing and downloading

- Actions must be easy to find but visually proportional to the page.
- Use direct labels such as “Download for Mac,” “View on the App Store,” or “Buy for $…”. Avoid vague “Get started” language when the actual action is known.
- State platform, price model, trial, and requirements before an external purchase when relevant.
- Do not use countdowns, fake scarcity, repeated sticky banners, or manipulative defaults.

---

## 14. Motion

Motion is allowed only for feedback, continuity, causality, spatial explanation, or controlled product demonstration.

### 14.1 Permitted purposes

- confirm that a control changed state;
- maintain spatial context between an index item and its product view;
- show where an element came from or went;
- explain a product transition that is itself meaningful;
- focus attention after a user action;
- make a direct manipulation feel physically connected.

### 14.2 Prohibited motion

- ambient floating, pulsing, drifting, or orbiting elements;
- entrance animation on every section;
- parallax used only to signal sophistication;
- scroll hijacking or replacing native scroll distance;
- marquee copy that must be chased to read;
- decorative cursor followers;
- autoplay 3D or canvas scenes unrelated to product understanding;
- animation whose removal leaves content hidden or in the wrong state.

### 14.3 Timing and character

- Prefer short micro-interactions, typically around 120–220 ms.
- Spatial or view transitions may take roughly 200–450 ms when continuity benefits from it.
- Use easing that settles clearly. Avoid elastic overshoot unless it is authentic to the product and remains subtle.
- Animate `transform` and `opacity` when possible; avoid layout-thrashing property animation.
- Do not animate large blurred layers continuously; they are expensive and visually generic.

These durations are guardrails, not a token mandate. The test is whether motion becomes noticeable as an effect rather than understood as feedback.

### 14.4 Reduced motion

- Under `prefers-reduced-motion: reduce`, remove parallax, spatial travel, autoplay loops, scroll-linked transforms, and nonessential scaling.
- Replace spatial transitions with an instant change or a brief opacity change when useful.
- Preserve all states and controls. Reduced motion must never mean reduced functionality.
- Test the reduced-motion experience directly; do not assume a global `animation-duration: 0.01ms` rule produces a correct result.

---

## 15. Accessibility constitution

WCAG 2.2 AA is the minimum release bar, not the ambition ceiling.

### 15.1 Structure

- Use semantic landmarks, headings, lists, figures, captions, tables, buttons, and links.
- Include a visible-on-focus skip link.
- Keep one logical `h1` and an honest heading hierarchy.
- Preserve source order across responsive compositions.
- Set document language and language changes.
- Use ARIA only when native HTML cannot express the behavior.

### 15.2 Keyboard and focus

- Every action must be operable with a keyboard.
- Focus indicators must be clearly visible in light, dark, high-contrast, and image-backed contexts.
- Sticky navigation must not obscure the focused element; use appropriate scroll padding.
- No keyboard traps. Dialogs must manage initial focus, containment, Escape, and return focus.
- Hover content must also appear on focus and be dismissible, hoverable, and persistent as required by WCAG.

### 15.3 Text and reflow

- Support 200% text zoom without loss of content or function.
- Support reflow at a 320 CSS-pixel-wide viewport equivalent except for genuinely two-dimensional content.
- Do not truncate essential copy. Provide expansion or responsive alternatives.
- Respect user text spacing overrides.
- Avoid images of text except authentic product screenshots, logotypes, or media where equivalent text is provided.

### 15.4 Images, data, and canvas

- Write alt text for the purpose of the image in its context, not a visual inventory.
- Decorative images use empty alt text.
- Complex visualizations need a concise summary plus a table, list, or structured explanation of the meaningful data.
- Canvas, WebGL, WebGPU, and `<model>` content cannot be the sole carrier of instructions, labels, navigation, or claims.

### 15.5 Input and targets

- Aim for 44×44 CSS-pixel targets and adequate spacing.
- Provide non-drag alternatives.
- Make visible labels match accessible names.
- Preserve error text until corrected; connect errors to fields programmatically.
- Do not require cognitive puzzles or re-entry of information unnecessarily.

### 15.6 Required assistive-technology checks

Before a major page is complete, test at least:

- VoiceOver with Safari on macOS or iOS;
- keyboard-only navigation in Safari, Chrome/Chromium, and Firefox;
- reduced motion;
- forced colors or a comparable high-contrast mode where available;
- 200% zoom and text-spacing overrides;
- touch operation on a real mobile browser when practical.

Automated audits may supplement but never replace these checks.

---

## 16. Web-platform and progressive-enhancement policy

### 16.1 Principle

Use the newest capability that materially improves the design **when the complete essential experience exists without it**. Browser support is a design input, not an automatic veto. Conversely, novelty is not a benefit by itself.

Every significant enhancement must have:

1. a stated user or engineering benefit;
2. support/stability research dated near implementation;
3. CSS or JavaScript feature detection;
4. a documented fallback;
5. accessibility and reduced-motion behavior;
6. performance and energy review;
7. tests in at least one WebKit, Chromium, and Firefox release;
8. isolation so the feature can be removed without restructuring the page.

### 16.2 Enhancement tiers

#### Tier 0 — Complete baseline

Semantic HTML, normal navigation, readable content, real images, forms, download/purchase links, and core CSS layout. The page remains coherent if JavaScript fails or is blocked.

#### Tier 1 — Durable native enhancement

Well-supported capabilities such as Grid, Flexbox, responsive images, custom properties, logical properties, `details`, `dialog`, container queries, and the Popover API where support meets the project's browser matrix. Use them directly with simple fallbacks.

#### Tier 2 — Selective advanced enhancement

View Transitions, scroll-driven animations, CSS anchor positioning, wide-gamut/HDR imagery, `content-visibility`, speculation rules, WebGPU, or browser-specific media presentation. These require a decision record and must not carry essential meaning alone.

### 16.3 Capability decisions and fallbacks

| Capability | Appropriate JasonStu use | Detection | Required fallback |
| --- | --- | --- | --- |
| Container queries | Let a product composition adapt to its actual slot | `@supports (container-type: inline-size)` where needed | Intrinsic Grid/Flex layout plus a small number of viewport queries |
| Popover API | Product switcher, compact explanation, nonmodal transient UI | `'popover' in HTMLElement.prototype` or HTML/CSS support check | In-flow disclosure, `details`, or an accessible dialog/drawer |
| CSS anchor positioning | Align a popover or annotation without JS geometry | `@supports (anchor-name: --a)` and property-level checks | Normal absolute/in-flow positioning; never hide the trigger or content |
| View Transitions | Preserve context between collection and product or between demo states | `document.startViewTransition` and CSS support checks | Immediate navigation/state change; optional simple opacity transition |
| Scroll-driven animation | Map scrolling to an explanatory product state where progress itself has meaning | `@supports (animation-timeline: view())` | Static final state, a sequence of images, or explicit step controls |
| `light-dark()` | Concise paired semantic values | `@supports (color: light-dark(white, black))` | Explicit custom-property values inside color-scheme media/attribute rules |
| `content-visibility: auto` | Reduce rendering work on long, media-heavy chapters | `@supports (content-visibility: auto)` | Normal rendering; reserve intrinsic size to avoid layout shift |
| Display P3/HDR | Improve product imagery or an app-authentic accent on capable displays | color-gamut/dynamic-range media queries and format support | Carefully matched sRGB/SDR assets and colors |
| WebGPU/WebGL | A uniquely valuable technical or spatial demo activated by the visitor | API detection plus adapter/context creation | Static image/video, structured data, and equivalent controls/explanation |
| `<model>` or browser-specific spatial media | Optional inspection of a real product object when spatial understanding matters | element/API detection | Poster image, gallery, or user-controlled video |
| Speculation Rules | Faster likely navigation in a small stable product index | `HTMLScriptElement.supports?.('speculationrules')` | Ordinary navigation; avoid wasteful prerender on metered/data-saving contexts |

### 16.4 CSS first, JavaScript last

- Use HTML disclosure, native controls, CSS layout, media queries, container queries, and CSS animation before adding JavaScript.
- JavaScript should manage product state, direct manipulation, or capability enhancement—not basic content visibility or layout that CSS can handle.
- Do not ship a client framework merely to render static marketing content.
- Do not add a general animation library for one transition.
- Keep advanced features in isolated modules loaded only on pages that use them.

### 16.5 Browser-specific refinement

- Feature detection is primary. User-agent sniffing is a last resort for a verified engine defect and must be documented with a removal condition.
- Browser-specific CSS may fix rendering or enable a real enhancement, but the shared DOM and content model should remain coherent.
- Different engines may receive different visual implementations of the same concept. They must preserve meaning, hierarchy, navigation, and accessibility.
- Test Safari/WebKit first-class, including iOS viewport and safe-area behavior; also test current Chrome/Chromium and Firefox on desktop and mobile where available.

---

## 17. Implementation architecture constraints

These rules govern future implementation without selecting a framework prematurely.

### 17.1 Rendering and content

- Pages must deliver meaningful, indexable HTML from the server or static build. Core content must not wait for client-side rendering.
- Product facts should have a structured content source: name, descriptor, platforms, availability, requirements, actions, privacy/support links, appearance assets, and capture metadata.
- The content model must allow product-specific chapter types. Do not force every product into the same `features[]` array.
- URLs and heading anchors must be stable and human-readable.
- Support content should remain portable Markdown or similarly durable structured content where practical.

### 17.2 Composition and reuse

Build layers in this order:

1. semantic page content and narrative;
2. page-specific composition;
3. shared primitives proven useful in more than one place;
4. optional interactive modules;
5. optimization and browser-specific refinement.

Appropriate shared primitives include typography roles, spacing logic, global navigation, appearance control, focus treatment, media loading, app-action links, figure/caption behavior, disclosure, and test utilities.

Do not create a universal `Card`, `FeatureGrid`, `Hero`, or `Section` component as the site's foundation. A component earns reuse when it represents the same semantic or interactive responsibility, not merely similar markup.

### 17.3 CSS architecture

- Use cascade layers to separate reset/base, tokens, shared patterns, page composition, utilities, and enhancements.
- Use semantic custom properties. Per-app properties live under an app namespace or scope and must map to shared roles where possible.
- Avoid unbounded utility strings that obscure composition and encourage local inconsistency.
- Keep selector specificity low and scope page-specific art direction clearly.
- Prefer logical properties for writing-mode and direction resilience.
- Document any browser-specific workaround with the affected engine/version and removal test.

### 17.4 JavaScript architecture

- The global shell should require little or no JavaScript beyond an optional appearance control, menu behavior not covered by native HTML, and measured performance instrumentation.
- Load product demos on demand or when near the viewport; do not bundle every app's interaction into the home page.
- Use ES modules and platform APIs. Add dependencies only when they remove meaningful complexity and pass size/maintenance review.
- No continuous `requestAnimationFrame` loop while a demo is idle or offscreen.
- Abort event listeners, observers, fetches, and animations when their owning view is removed.
- Preserve URL, Back, focus, and reduced-motion behavior when enhancing navigation.

### 17.5 Third parties and privacy

- Default to no third-party scripts in the critical path.
- Analytics, if used, should be privacy-preserving, small, documented, and unable to delay content or interaction.
- No session replay, fingerprinting, or cross-site advertising trackers.
- Embedded media should use privacy-enhanced modes or activate after user intent where practical.
- External purchase and App Store navigation should be labeled clearly.

---

## 18. Performance and energy budgets

Performance is part of the visual design: it determines whether composition appears stable, whether interaction feels direct, and whether mobile devices spend energy animating decoration.

### 18.1 Outcome targets

At the 75th percentile, segmented for mobile and desktop, target:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1.

Aim substantially better on static product and document pages. Test on throttled mid-tier mobile conditions as well as current Apple hardware.

### 18.2 Initial budgets

Budgets may be tightened as real pages exist. Exceeding them requires a written reason tied to user value.

- Critical/site-shell CSS: aim for ≤ 30 KB compressed.
- Site-shell JavaScript: aim for ≤ 30 KB compressed; zero is preferred for content-only pages.
- Total initial JavaScript before a user activates a demo: aim for ≤ 80 KB compressed.
- Initial font transfer: aim for ≤ 120 KB compressed and no more than two required font files.
- Mobile LCP image: aim for ≤ 500 KB transferred; desktop art direction may use a larger source only when responsive selection prevents mobile overdelivery.
- Third-party JavaScript in the critical path: 0 KB.

### 18.3 Asset rules

- Use AVIF/WebP where they improve size and quality, with appropriate fallback.
- Always set intrinsic image dimensions or `aspect-ratio` to prevent layout shift.
- Use `srcset`, `sizes`, and art-directed `<picture>` sources.
- Preload only the actual LCP resource and essential font; indiscriminate preloading is prohibited.
- Subset fonts by required scripts only when the routing/localization strategy prevents missing glyphs.
- Lazy-load below-the-fold images and demos, but never lazy-load the LCP image.
- Use poster frames and user activation for heavy video/3D.

### 18.4 Runtime and energy

- Pause media, observers, timelines, and rendering when offscreen or when `document.visibilityState` is hidden.
- Avoid persistent blur, filter, and large composited translucent layers.
- Prefer compositor-friendly motion, but do not promote many layers with `will-change` speculatively.
- Break up long main-thread tasks and keep input handlers minimal.
- Respect reduced motion and data-saving signals where available.
- Test Safari energy usage for pages with media or continuous interaction.

---

## 19. Copy and content rules

### 19.1 Voice

Write with precision, calm confidence, and technical honesty. Prefer concrete nouns and verbs.

Good:

- “Inspect the active route and interface in one view.”
- “Exports include the values shown here.”
- “Available for macOS 15 and later.”

Weak:

- “A powerful, seamless experience for your workflow.”
- “Built for the future.”
- “Unlock next-level productivity.”

### 19.2 Copy placement

- Every paragraph must attach to a product visual, interaction, capability, decision, or practical fact.
- Do not scatter aphorisms through whitespace.
- Headings should communicate information, not mood alone.
- Prefer one exact paragraph to three marketing fragments.
- Technical details may be disclosed progressively, but must remain findable and copyable.

### 19.3 Claims

- Avoid superlatives unless independently verifiable and current.
- Distinguish implemented, available, beta, planned, unsupported, and derived behavior.
- Date time-sensitive compatibility or availability claims.
- Do not fabricate testimonials, usage numbers, awards, or comparisons.
- If a comparison is used, define the compared state and avoid misleading visual scale.

---

## 20. Explicit anti-patterns and narrow exceptions

### 20.1 Prohibited by default

- rounded cards used only to group content;
- feature-card grids;
- alternating generic image/text sections repeated down the page;
- centered hero + logo wall + feature grid + testimonials + pricing + CTA as a default sequence;
- gradient blobs, glow fields, noise textures, or mesh gradients with no product meaning;
- ubiquitous glassmorphism or frosted panels;
- floating mockup stacks that obscure the real interface;
- decorative browser frames around every screenshot;
- pill-shaped labels and buttons everywhere;
- shadows on ordinary text groups;
- identical section heights or layouts for visual consistency;
- icon-heading-description repetition as the main narrative;
- ambient animation, scroll hijacking, and gratuitous parallax;
- autoplay product tours that seize control;
- fake terminal/code decoration;
- oversized claims unsupported by nearby evidence;
- arbitrary copy inserted to fill space;
- using dark mode as shorthand for premium;
- treating `border-radius`, blur, and gradients as the brand system;
- hiding navigation or purchase information to appear minimal;
- relying on hover for content or control discovery;
- shipping a large framework or animation dependency for a static page;
- browser-specific behavior without detection and fallback.

### 20.2 When an exception may be justified

An exception is allowed only when the pattern represents product truth or a real interaction.

Examples:

- A rounded rectangle is correct for an actual iPhone screen, app window, button, popover, selected state, or clipped comparison viewport.
- A grid is correct for genuinely comparable data or a product's native grid model; it should not automatically become a grid of decorated cards.
- Glass/translucency is correct when demonstrating a real system material or an actual layered control, with accessibility fallbacks.
- Scroll-linked motion is correct when scroll position maps to a product timeline or spatial relationship and controlled alternatives exist.
- A strong gradient is correct when it comes from product output, photography, mapping, or an app-specific visual field—not because the page needs a background.
- A conventional purchase area is correct when users need to compare editions or prices; clarity outranks novelty.

Every exception must answer: **What would become harder to understand if this pattern were removed?** If the answer is “nothing,” do not use it.

---

## 21. Browser and device quality matrix

Before release, verify the baseline and intended enhancements in:

- current Safari on macOS;
- current Safari on iOS/iPadOS;
- current Chrome or Chromium on macOS/Windows;
- current Firefox on macOS/Windows;
- at least one mobile Chromium browser when practical.

Also verify:

- Light, Dark, and Auto appearance;
- reduced motion;
- keyboard and screen reader operation;
- hover, coarse pointer, and touch;
- narrow, medium, wide, and very wide layouts;
- orientation changes and mobile browser chrome;
- safe areas;
- 1× and 2× pixel density;
- 200% zoom and text spacing;
- slow network, disabled cache, and JavaScript failure;
- unsupported advanced APIs;
- Back/forward cache behavior after enhanced navigation;
- printing for document-oriented pages.

Enhancement failures must degrade to the documented fallback, not to an error, hidden content, blank media stage, or unusable control.

---

## 22. Visual-quality review checklist

A future agent or reviewer must complete this checklist before calling a page finished.

### Concept and narrative

- [ ] Can the page's product truth and visual thesis each be stated in one sentence?
- [ ] Does the structure come from the product rather than a standard marketing sequence?
- [ ] Is every claim supported by nearby evidence?
- [ ] Is every paragraph relationally attached to a visual, interaction, capability, or fact?
- [ ] Are download/purchase, requirements, and support easy to find without dominating the narrative?

### Composition

- [ ] Is there one dominant subject in each major viewport moment?
- [ ] Does typography and spacing create hierarchy before containers do?
- [ ] Does every visible boundary pass the boundary test?
- [ ] Are dense and quiet moments intentionally paced?
- [ ] Has any arbitrary copy been added merely to occupy space?
- [ ] Does the page avoid repeating one section pattern?

### Product imagery

- [ ] Are screenshots current, truthful, and captured with representative privacy-safe data?
- [ ] Is each image cropped and scaled to explain a specific point?
- [ ] Are device/window frames semantically real rather than decorative wrappers?
- [ ] Are intrinsic dimensions, responsive sources, alt text, and capture metadata present?
- [ ] Do light and dark imagery treatments both look intentional?

### Light and dark appearance

- [ ] Were both appearances designed and reviewed independently?
- [ ] Are semantic hierarchy and contrast preserved, not merely inverted?
- [ ] Do native controls, theme metadata, focus, and media variants match the chosen appearance?
- [ ] Does Auto follow the system, and does a manual tri-state override persist without flashing?
- [ ] Are increased contrast, forced colors, and reduced transparency usable?

### Responsive behavior

- [ ] Does the composition transform rather than just stack?
- [ ] Are breakpoints caused by content failure and kept to the minimum?
- [ ] Is DOM/source order logical at every size?
- [ ] Are touch targets, safe areas, orientation, hover alternatives, and dynamic viewport behavior correct?
- [ ] Do narrow phone, tablet, compact laptop, desktop, large display, and 200% zoom all work?

### Interaction and motion

- [ ] Does each interaction improve understanding or feedback?
- [ ] Does every interaction work with touch, mouse/trackpad, and keyboard?
- [ ] Is state visible and reversible, with focus preserved?
- [ ] Does reduced motion remove nonessential travel and autoplay without hiding content?
- [ ] Are there no ambient loops, scroll hijacking, or unexplained entrance effects?
- [ ] Does every interactive demo have a complete static or controlled-step fallback?

### Accessibility

- [ ] Does the page meet WCAG 2.2 AA for contrast, reflow, focus, input, and motion?
- [ ] Are landmarks, headings, links, buttons, figures, tables, labels, and language semantic?
- [ ] Is focus always visible and unobscured?
- [ ] Are visualizations and canvas/3D experiences represented in accessible DOM content?
- [ ] Were VoiceOver, keyboard-only use, reduced motion, high contrast/forced colors, and 200% zoom tested manually?

### Browser and enhancement behavior

- [ ] Is the Tier 0 baseline complete with JavaScript unavailable?
- [ ] Is every significant advanced API feature-detected?
- [ ] Is each fallback documented and tested in WebKit, Chromium, and Firefox?
- [ ] Are browser-specific workarounds scoped and documented with a removal condition?
- [ ] Does Back, forward, reload, deep linking, and focus restoration work?

### Performance and engineering

- [ ] Do LCP, INP, and CLS meet the targets on representative mobile and desktop tests?
- [ ] Are CSS, JavaScript, fonts, imagery, and third-party scripts within budget or explicitly justified?
- [ ] Is the LCP asset discoverable early and not lazy-loaded?
- [ ] Are below-the-fold media and demos loaded on demand?
- [ ] Are idle/offscreen animation, observers, video, and rendering paused?
- [ ] Did reuse follow proven semantic responsibility rather than force unrelated sections into one component?

### Generic-pattern audit

- [ ] Could any rounded card be removed without loss of meaning?
- [ ] Could any gradient, glow, blur, texture, or shadow be removed without loss of product identity?
- [ ] Is there a repeated icon-heading-paragraph pattern that should become a better narrative or comparison?
- [ ] Does the page resemble a generic hero/features/testimonials/CTA template?
- [ ] Is any motion present mainly to make the page appear sophisticated?
- [ ] Does the page still feel specific if the app name is removed? If not, return to product truth.

A page is not complete while any unchecked item represents an unexplained failure. “The framework made it difficult” and “the template already had it” are not acceptable explanations.

---

## 23. Decision records for experimental features and exceptions

Significant experimental APIs, browser-specific treatments, budget exceptions, and constitution exceptions must be recorded near the implementation or in a dedicated decision log using this structure:

```md
### Decision: [short name]

- Date:
- Page/product:
- User benefit:
- Why the baseline is insufficient:
- Capability/support reviewed:
- Feature detection:
- Baseline/fallback:
- Reduced-motion/accessibility behavior:
- Performance and energy impact:
- Browsers/devices tested:
- Removal or re-evaluation condition:
```

This prevents progressive enhancement from becoming an undocumented collection of fragile tricks.

---

## 24. How this constitution may evolve

This document should evolve when repeated real product work reveals a better rule, not when a visual trend changes.

Changes should:

- cite the product or browser evidence that motivated them;
- preserve the core principles of demonstration, composition, and complete baselines;
- distinguish a one-page exception from a new global rule;
- avoid turning successful page-specific art direction into a mandatory template;
- update support claims for experimental features as browsers change;
- keep anti-patterns explicit so future automation cannot silently reintroduce them.

The long-term measure of success is not that every JasonStu Apps page looks the same. It is that every page feels authored with the same intelligence, restraint, honesty, and technical care.

---

## 25. Compact mandate for future agents

When designing or implementing any JasonStu Apps page:

1. Read this document first.
2. Inspect the actual app, screenshots, copy, and existing site context.
3. Write the page art-direction brief.
4. Establish information architecture and composition before components.
5. Use real product evidence and concise specific copy.
6. Design Light and Dark Mode independently.
7. Make the semantic HTML/CSS baseline complete.
8. Add only the interaction and modern browser capabilities that improve understanding.
9. Feature-detect, document, and test every advanced enhancement and fallback.
10. Run the visual-quality checklist, including the generic-pattern audit.

If the result looks like a polished template, it has failed even if it is technically correct. If the result is novel but difficult to understand, operate, maintain, or access, it has also failed. The JasonStu standard is the harder middle: **specific, calm, exploratory, and engineered to last.**
