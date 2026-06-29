export function EcosystemDiagram() {
  const nodes = [
    {
      id: "lib",
      x: 100,
      y: 18,
      w: 198,
      h: 56,
      label: "Lib Componentes",
      sublabel: "+ 12 components · NPM",
      highlight: true,
    },
    {
      id: "ds",
      x: 100,
      y: 128,
      w: 198,
      h: 56,
      label: "Design System",
      sublabel: "Tokens · Variantes · Estados",
      highlight: false,
    },
    {
      id: "bp",
      x: 8,
      y: 248,
      w: 162,
      h: 52,
      label: "Blueprints",
      sublabel: "Templates",
      highlight: false,
    },
    {
      id: "apps",
      x: 228,
      y: 248,
      w: 162,
      h: 52,
      label: "Ferramentas",
      sublabel: "Next.js · React SPA",
      highlight: false,
    },
    {
      id: "prod",
      x: 100,
      y: 368,
      w: 198,
      h: 56,
      label: "Projetos",
      sublabel: "Escala & Performance",
      highlight: false,
    },
  ];

  const paths = [
    { id: "p1", d: "M199,74 L199,128", dur: "1.8s", delay: "0s" },
    { id: "p2", d: "M170,184 Q140,216 89,248", dur: "2.2s", delay: "0.3s" },
    { id: "p3", d: "M228,184 Q260,216 309,248", dur: "2.2s", delay: "0.3s" },
    { id: "p4", d: "M89,300 Q114,334 160,368", dur: "2s", delay: "0.6s" },
    { id: "p5", d: "M309,300 Q284,334 238,368", dur: "2s", delay: "0.6s" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 400,
      }}
    >
      <svg
        viewBox="0 0 398 436"
        width="100%"
        style={{ overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b9ff6b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#b9ff6b" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {paths.map((p) => (
          <g key={p.id}>
            <path
              d={p.d}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <path
              d={p.d}
              fill="none"
              stroke="rgba(185,255,107,0.35)"
              strokeWidth="1"
              strokeDasharray="4 60"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="64"
                to="0"
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
              />
            </path>
            {/* Traveling dot */}
            <circle r="2.5" fill="#b9ff6b" opacity="0.7">
              <animateMotion
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
                path={p.d}
              />
            </circle>
          </g>
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {node.highlight && (
              <rect
                x={node.x - 1}
                y={node.y - 1}
                width={node.w + 2}
                height={node.h + 2}
                rx="4"
                fill="none"
                stroke="#b9ff6b"
                strokeWidth="0.5"
                opacity="0.5"
              />
            )}
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="3"
              fill={node.highlight ? "rgba(185,255,107,0.04)" : "rgba(255,255,255,0.02)"}
              stroke={
                node.highlight
                  ? "rgba(185,255,107,0.25)"
                  : "rgba(255,255,255,0.08)"
              }
              strokeWidth="1"
            />
            {/* Indicator dot */}
            <circle
              cx={node.x + 14}
              cy={node.y + node.h / 2}
              r="3"
              fill={node.highlight ? "#b9ff6b" : "rgba(255,255,255,0.2)"}
            >
              {node.highlight && (
                <animate
                  attributeName="opacity"
                  values="1;0.3;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            <text
              x={node.x + 28}
              y={node.y + node.h / 2 - 7}
              fill={node.highlight ? "#e8e8e8" : "#c0c0c0"}
              fontSize="12"
              fontFamily="'Onest', sans-serif"
              fontWeight="500"
            >
              {node.label}
            </text>
            <text
              x={node.x + 28}
              y={node.y + node.h / 2 + 10}
              fill="#424242"
              fontSize="10"
              fontFamily="'JetBrains Mono', monospace"
            >
              {node.sublabel}
            </text>
          </g>
        ))}

        {/* Decorative side indicators */}
        <g opacity="0.3">
          <line x1="380" y1="18" x2="380" y2="424" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          {[18, 128, 248, 368].map((y, i) => (
            <g key={i}>
              <line x1="376" y1={y + 28} x2="384" y2={y + 28} stroke="rgba(185,255,107,0.4)" strokeWidth="1" />
              <text x="390" y={y + 32} fill="#303030" fontSize="9" fontFamily="'JetBrains Mono', monospace">
                0{i + 1}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
