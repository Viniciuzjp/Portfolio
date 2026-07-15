"use client";
import { Flex, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { Dot } from "@/app/Components/Dot/Dot";
import { EcosystemCard } from "@/app/Components/EcosystemCard/Ecosystem";
import { Badge } from "@/app/Components/Badge/Badge";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/app/Components/Button/Button";

const Stacks = [
  {
    id: 1,
    tool: "React",
  },
  {
    id: 2,
    tool: "TypeScript",
  },
  {
    id: 3,
    tool: "Next.js",
  },
  {
    id: 4,
    tool: "Nx",
  },
  { id: 5, tool: "NPM" },
];

export const Hero = () => {
  return (
    <Section spacing="lg">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <main className="flex flex-col lg:flex-row w-full gap-10">
        <section className="w-full">
          <Flex>
            <Dot></Dot>
            <Text variant="labelJet">FRONT-END ENGINEER</Text>
          </Flex>
          <Stack gap="lg">
            <Text variant="title">VINICIUS JUAREZ</Text>
            <Text variant="label">
              Desenvolvedor Front-End especializado em React, Next.js e
              TypeScript, focado na construção de aplicações escaláveis e na
              resolução de problemas por meio de soluções técnicas bem
              estruturadas. Busco desenvolver código limpo, tipado e
              reutilizável, aplicando boas práticas de arquitetura, integração
              com APIs, otimizações de performance, SEO e experiências
              consistentes para usuários e equipes de desenvolvimento.
            </Text>
            <Flex className="w-6/10">
              {Stacks.map((item) => (
                <div key={item.id}>
                  <Badge className="w-full">
                    <Text variant="labelJet">{item.tool}</Text>
                  </Badge>
                </div>
              ))}
            </Flex>

            <Flex gap="md">
              <Link href={"https://github.com/Viniciuzjp"}>
                <Button>
                  <Flex>
                    <FaGithub size={40} />
                    <Text
                      variant="labelJet"
                      className="duration-150 ease-in-out"
                    >
                      ViniciuzJp
                    </Text>
                  </Flex>
                </Button>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/vinicius-juarez-092b59276/"}
              >
                <Button>
                  <Flex>
                    <FaLinkedinIn size={40} />
                    <Text
                      variant="labelJet"
                      className="duration-150 ease-in-out"
                    >
                      Vinicius Juarez
                    </Text>
                  </Flex>
                </Button>
              </Link>
            </Flex>
          </Stack>
        </section>
        <section className="w-full">
          <EcosystemCard />
        </section>
      </main>
    </Section>
  );
};
