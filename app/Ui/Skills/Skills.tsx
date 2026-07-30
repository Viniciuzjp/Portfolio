import { Flex, Grid, Section } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { Badge } from "@/app/Components/Badge/Badge";
import { techStack } from "./variables";

const filteredVersIcons = techStack.filter(
  (item) => item.category === "Versionamento",
);
const filteredFrontIcons = techStack.filter(
  (item) => item.category === "Frontend",
);
const filteredBacktIcons = techStack.filter(
  (item) => item.category === "Backend",
);
const filteredUitIcons = techStack.filter((item) => item.category === "UI");
const filteredToolsIcons = techStack.filter(
  (item) => item.category === "Tools",
);
export default function Skills() {
  return (
    <Section>
      <section
        id="approach"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <Grid gap="lg">
          <Flex className="w-full" align="start" direction="column">
            <Text variant="labelJet">// Front End</Text>
            <div className="w-full h-px bg-neutral-900" />
            <Flex>
              {filteredFrontIcons.map((icon, index) => (
                <div key={index}>
                  <Badge variant="secondary" className="text-5xl">
                    <div style={{ color: icon.color }}>{icon.icon}</div>
                  </Badge>
                </div>
              ))}
            </Flex>
          </Flex>

          <Flex className="w-full" align="start" direction="column">
            <Text variant="labelJet">// Versionamento</Text>
            <div className="w-full h-px bg-neutral-900" />
            <Flex>
              {filteredVersIcons.map((icon, index) => (
                <div key={index}>
                  <Badge variant="secondary" className={`text-5xl`}>
                    <div style={{ color: icon.color }}>{icon.icon}</div>
                  </Badge>
                </div>
              ))}
            </Flex>
          </Flex>

          <Flex className="w-full" align="start" direction="column">
            <Text variant="labelJet">// Backend</Text>
            <div className="w-full h-px bg-neutral-900" />
            <Flex>
              {filteredBacktIcons.map((icon, index) => (
                <div key={index}>
                  <Badge variant="secondary" className="text-5xl">
                    <div style={{ color: icon.color }}>{icon.icon}</div>
                  </Badge>
                </div>
              ))}
            </Flex>
          </Flex>

          <Flex className="w-full" align="start" direction="column">
            <Text variant="labelJet">// UI</Text>
            <div className="w-full h-px bg-neutral-900" />
            <Flex>
              {filteredUitIcons.map((icon, index) => (
                <div key={index}>
                  <Badge variant="secondary" className="text-5xl">
                    <div style={{ color: icon.color }}>{icon.icon}</div>
                  </Badge>
                </div>
              ))}
            </Flex>
          </Flex>

          <Flex className="w-full" align="start" direction="column">
            <Text variant="labelJet">// Ferramentas</Text>
            <div className="w-full h-px bg-neutral-900" />
            <Flex>
              {filteredToolsIcons.map((icon, index) => (
                <div key={index}>
                  <Badge variant="secondary" className={`text-5xl`}>
                    <div style={{ color: icon.color }}>{icon.icon}</div>
                  </Badge>
                </div>
              ))}
            </Flex>
          </Flex>
        </Grid>
      </section>
    </Section>
  );
}
