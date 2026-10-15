# JSTU Connect art direction

Status: Current owner-directed brief for `/jstu-connect`

Date: 2026-10-15

## Direction

The owner asked for this chapter to differ clearly from the other apps: an
"Introducing JSTU Connect" opening on a clean, quiet starfield (loosely after
SpaceX's restraint, without a hero photograph), the promise "Unlock full
capability by Multidevice Collaboration", and the term Multidevice
Collaboration from the owner's EPQ research. Light and Dark appearances are
both required.

The governing image is a constellation: separate points that become one figure
when joined, standing for devices that become one workspace. In Dark the page
is a night sky. In Light the same sky is printed as a star chart on warm paper,
with graphite stars and ink-blue lines. The app mark is redrawn as two strokes
that travel toward each other and interlock.

The wordmark matches how macOS Spotlight sets its query text: the system
face (`system-ui`, which is SF Pro with Display optical sizing on Apple
devices) at weight 500. SF Pro cannot be self-hosted under Apple's licence, so
other platforms get their own system UI font. It has a quiet glass finish
(near-solid fill with a faint vertical falloff), and a single specular
highlight crosses it on arrival. The owner rejected a self-hosted rounded face
(Nunito) and a banded glass gradient as “old PowerPoint art text”, and earlier
rejected Sora; SF Pro Rounded was replaced by the Spotlight-style face. Do not add decorative banding, outlines or text strokes:
variable-font overlaps show through `-webkit-text-stroke`.

The highlight on the title and on “Multidevice Collaboration” plays once, never
in a loop. On HDR displays in Dark appearance it uses a PQ-encoded texture that
rises above SDR white.

All text uses system fonts, rendered antialiased. Text never animates through a
blur or backdrop filter: either one leaves glyphs on a composited layer and
softens them on Retina displays.

## Composition

1. Hero: drawn mark, "Introducing", a light-weight title, the promise, a short
   lede. No status line or OS version: the page presents a concept in current
   practice. Faint constellation lines draw
   and fade at long, staggered intervals.
2. Origin: the research question and a citation of the report.
3. Four findings, four answers: each barrier the research named (privacy,
   connection stability, misplaced load, learning cost) beside the app's
   implemented answer.
4. Continuity: a schematic of a prepared USB path taking over from lost Wi-Fi.
   It is labelled as a schematic, not a live reading.
5. Real captures: the Mac workspace, the iPhone workspace and a device detail.
6. Capabilities, the privacy statement, the preview notice with facts, and the
   closing line.

## Rules

- Claims must match JSTU Connect's `docs/FEATURE_STATUS.md` `WIRED` rows. No
  "seamless" or "zero latency", and touch input is described as working inside
  the JSTU Connect window only.
- No download or store link until a release exists. The page states that the
  app is not yet production-ready, and states no minimum OS version.
- The topology diagram keeps its original stroked blue pulse; the owner
  rejected an HDR dot sprite there.
- The hero mark keeps its silver gradient. On HDR displays only the very top of
  its upper stroke rises above SDR white; SDR rendering is unchanged.
- Motion is decorative, CSS-only and fully disabled under reduced motion. No
  client script.
- Keep the shared header and footer markup; the chapter changes only their
  colours.
