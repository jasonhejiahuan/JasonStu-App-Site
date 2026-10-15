// A schematic of path continuity. It illustrates behaviour the app implements
// (a prepared standby path taking over when an interface disappears); it is not
// a live reading. Without motion it rests on the first state.
export function ContinuityDiagram() {
  return (
    <svg className="cx-paths" viewBox="0 0 800 440" role="img" aria-labelledby="cx-paths-title cx-paths-desc">
      <title id="cx-paths-title">Path continuity between a Mac and an iPhone</title>
      <desc id="cx-paths-desc">
        A Mac and an iPhone are joined by a primary Wi-Fi path and a prepared USB standby path. When Wi-Fi is
        lost, the active check moves to the USB path. An iPad sits nearby on the same network.
      </desc>

      <path className="cx-path cx-wifi" d="M170 230Q400 46 630 230" pathLength={100} />
      <path className="cx-pulse cx-wifi-pulse" d="M170 230Q400 46 630 230" pathLength={100} />
      <path className="cx-path cx-usb" d="M170 230H630" pathLength={100} />
      <path className="cx-pulse cx-usb-pulse" d="M170 230H630" pathLength={100} />
      <path className="cx-path cx-nearby" d="M170 230L400 372" pathLength={100} />

      <g className="cx-break" transform="translate(400 138)">
        <path d="M-7 -7L7 7M7 -7L-7 7" />
      </g>

      <g className="cx-labels">
        <text className="cx-label cx-wifi-on" x="400" y="112">Wi-Fi · primary</text>
        <text className="cx-label cx-wifi-off" x="400" y="112">Wi-Fi · lost</text>
        <text className="cx-label cx-usb-standby" x="400" y="258">USB · standby</text>
        <text className="cx-label cx-usb-on" x="400" y="258">USB · active</text>
      </g>

      <g className="cx-node" transform="translate(170 230)">
        <circle r="44" />
        <rect x="-17" y="-13" width="34" height="22" rx="3" />
        <path d="M-23 14H23" />
        <text y="74">Mac</text>
      </g>
      <g className="cx-node" transform="translate(630 230)">
        <circle r="44" />
        <rect x="-10" y="-18" width="20" height="36" rx="5" />
        <text y="74">iPhone</text>
      </g>
      <g className="cx-node cx-node-quiet" transform="translate(400 372)">
        <circle r="34" />
        <rect x="-13" y="-16" width="26" height="32" rx="4" />
        <text y="60">iPad</text>
      </g>
    </svg>
  );
}
