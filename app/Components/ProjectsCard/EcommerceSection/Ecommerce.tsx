import { Flex } from "@av-digital/components";

const boxes = [
  {
    label: "Produtos",
    sub: "Shopify API · Dropshipping",
    x: 120,
    y: 10,
    w: 160,
    h: 44,
  },
  {
    label: "Autenticação",
    sub: "Pedidos · Perfil",
    x: 20,
    y: 114,
    w: 130,
    h: 44,
  },
  { label: "Dados Persistentes", sub: "ContextAPI · Storage", x: 250, y: 114, w: 130, h: 44 },
  {
    label: "Checkout",
    sub: "Cart · Shopify Payments",
    x: 120,
    y: 214,
    w: 160,
    h: 44,
  },
  {
    label: "Dashboard",
    sub: "Analise pós compras",
    x: 20,
    y: 314,
    w: 130,
    h: 44,
  },
  { label: "Analytics", sub: "Perf · Eventos", x: 250, y: 314, w: 130, h: 44 },
];

const lines = [
  { x1: 200, y1: 54, x2: 85, y2: 114 },
  { x1: 200, y1: 54, x2: 315, y2: 114 },
  { x1: 85, y1: 158, x2: 200, y2: 214 },
  { x1: 315, y1: 158, x2: 200, y2: 214 },
  { x1: 160, y1: 258, x2: 85, y2: 314 },
  { x1: 240, y1: 258, x2: 315, y2: 314 },
];

export const EcommerceSection = () => {
  return (
    <Flex
      align="start"
      className="w-full p-5 rounded-md border border-[rgba(255,255,255,0.06)]"
    >
      <svg viewBox="0 0 400 370" width="100%" style={{ overflow: "visible" }}>
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}
        {boxes.map((b) => (
          <g key={b.label}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
            <text
              x={b.x + b.w / 2}
              y={b.y + 16}
              textAnchor="middle"
              fill="#a0a0a0"
              fontSize="11"
              fontFamily="'Onest', sans-serif"
              fontWeight="500"
            >
              {b.label}
            </text>
            <text
              x={b.x + b.w / 2}
              y={b.y + 31}
              textAnchor="middle"
              fill="#383838"
              fontSize="9.5"
              fontFamily="'JetBrains Mono', monospace"
            >
              {b.sub}
            </text>
          </g>
        ))}
      </svg>
    </Flex>
  );
};
