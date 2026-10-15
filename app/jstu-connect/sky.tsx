import type { CSSProperties } from "react";

// The night sky is generated once on the server from a fixed seed, so every
// render ships identical markup and the page needs no client script.
function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seeded(20260325);
const round = (value: number) => Math.round(value * 10) / 10;

const stars = Array.from({ length: 190 }, (_, index) => {
  const size = random();
  return {
    key: index,
    x: round(random() * 1600),
    y: round(random() * 1000),
    r: round(0.35 + size * size * 1.25),
    o: round(0.18 + random() * 0.62),
    twinkle: random() < 0.28,
    duration: round(4 + random() * 7),
    delay: round(random() * -11),
  };
});

// Brighter stars stand in for devices; the faint lines that join them are the
// page's quiet thesis: separate points becoming one constellation.
const nodes = [
  [212, 238], [356, 164], [318, 402], [1268, 196], [1404, 338], [1196, 448], [1462, 612], [142, 690],
] as const;
const links = [
  [0, 1], [1, 2], [0, 2], [3, 4], [4, 5], [3, 5], [4, 6], [2, 7],
] as const;

export function NightSky() {
  return (
    <svg className="cx-sky" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g className="cx-stars">
        {stars.map((star) => (
          <circle
            key={star.key}
            cx={star.x}
            cy={star.y}
            r={star.r}
            opacity={star.o}
            className={star.twinkle ? "cx-twinkle" : undefined}
            style={star.twinkle ? ({ "--t": `${star.duration}s`, "--d": `${star.delay}s` } as CSSProperties) : undefined}
          />
        ))}
      </g>
      <g className="cx-constellation">
        {links.map(([from, to], index) => (
          <line
            key={`${from}-${to}`}
            x1={nodes[from][0]}
            y1={nodes[from][1]}
            x2={nodes[to][0]}
            y2={nodes[to][1]}
            pathLength={1}
            style={{ "--d": `${index * 2.3}s` } as CSSProperties}
          />
        ))}
        {nodes.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.7} />
        ))}
      </g>
    </svg>
  );
}

// The app mark, redrawn as two strokes that travel toward each other and
// interlock: two devices, one gesture.
export function ConnectMark() {
  return (
    <svg className="cx-mark" viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="cx-mark-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--cx-metal-top)" />
          <stop offset="1" stopColor="var(--cx-metal-bottom)" />
        </linearGradient>
        <mask id="cx-mark-upper" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="1024">
          <path d="M708 304H520A148 148 0 0 0 372 452V576" fill="none" stroke="#fff" strokeWidth="92" strokeLinecap="round" />
        </mask>
      </defs>
      <path className="cx-mark-stroke" pathLength={1} d="M708 304H520A148 148 0 0 0 372 452V576" />
      <path className="cx-mark-stroke cx-mark-late" pathLength={1} d="M316 718H504A148 148 0 0 0 652 570V446" />
      {/* HDR displays only: the upper stroke's own gradient as a PQ image, identical
          to the SDR stroke except that its very top rises above SDR white. */}
      <image
        className="cx-mark-hdr"
        href="/jstu-connect-hdr-mark.png"
        x="300"
        y="258"
        width="460"
        height="364"
        preserveAspectRatio="none"
        mask="url(#cx-mark-upper)"
      />
    </svg>
  );
}
