import { Flex } from "@av-digital/components";
import { Text } from "../../Text/Text";
import { Badge } from "../../Badge/Badge";

const Items = [
  {
    id: 1,
    name: "<Button />",
    variants: ["Primary", "Secondary"],
    status: "stable",
  },
  {
    id: 2,
    name: "<Dropdown />",
    variants: ["Primary", "Secondary", "Sizes"],
    status: "stable",
  },
  {
    id: 3,
    name: "<Text />",
    variants: ["h1", "size", "weight", "label", "Others..."],
    status: "stable",
  },
  {
    id: 4,
    name: "<Dropdown />",
    variants: ["Primary", "Secondary", "Sizes"],
    status: "stable",
  },
  {
    id: 5,
    name: "<Flex />",
    variants: ["gap", "justify", "align", "direction", "wrap"],
    status: "stable",
  },
];
export const LibSection = () => {
  return (
    <Flex
      direction="column" 
      className="w-full rounded-md border border-[rgba(255,255,255,0.06)]"
    >
      <Flex
        className="w-full rounded-t-md p-2 border-b border-[rgba(255,255,255,0.06)]"
        justify="between"
      >
        <Flex gap="md">
          {["#ff5f57", "#ffbd2e", "#28c941"].map((c) => (
            <span
              key={c}
              style={{
                marginRight: "-8px",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: c,
                opacity: 0.5,
              }}
            />
          ))}
          <Text variant="description">components/index.ts</Text>
        </Flex>
        <Text variant="labelJet">v3.8.0</Text>
      </Flex>
      <Flex className="w-full pb-2">
        {Items.map((item) => (
          <div key={item.id} className="w-full hover:bg-neutral-800">
            <Flex
              align="center"
              justify="between"
              className="w-full pb-2 px-3 border-b border-[rgba(255,255,255,0.06)]"
            >
              <Text variant="labelJet">{item.name}</Text>
              <Flex wrap={true}>
                {item.variants.map((i, index) => (
                  <div key={index}>
                    <Flex>
                      <Badge variant="default" sizes="sm">
                        <Text  variant="labelJet">{i}</Text>
                      </Badge>
                    </Flex>
                  </div>
                ))}
              </Flex>
            </Flex>
          </div>
        ))}
        <Flex className="w-full p-1">
          <Text variant="description">12 componentes</Text>
          <Text variant="description">Nx monorepo</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
