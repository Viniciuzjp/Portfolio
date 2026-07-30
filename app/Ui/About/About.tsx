import { Flex, Grid, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { Badge } from "@/app/Components/Badge/Badge";

const List = [
  {
    id: 1,
    title: "TIPAGEM - TypeScript",
    label:
      "Prioridade na tipagem estática para reduzir erros, melhorar a documentação do código e oferecer uma experiência de desenvolvimento mais segura e eficiente.",
    value: "01",
    type: "CORE",
  },
  {
    id: 2,
    title: "DESIGN SYSTEM - Consistência",
    label:
      "Defino tokens, componentes e padrões visuais para garantir interfaces consistentes e uma experiência uniforme.",
    value: "02",
    type: "UI",
    margin: "md:mr-10 md:ml-5",
  },
  {
    id: 3,
    title: "REUTILIZAÇÃO - Componentes",
    label:
      "Separação em componentes desacoplados, configuráveis e reutilizáveis, priorizando consistência e redução de código duplicado.",
    value: "03",
    type: "TEMPLATE",
    margin: "md:mr-15 md:ml-10",
  },
  {
    id: 4,
    title: "PERFORMANCE - Otimização",
    label:
      "Aplico técnicas de otimização como lazy loading, renderização eficiente, divisão de código e estratégias voltadas para SEO.",
    value: "01",
    type: "UX",
    margin: "md:mr-20 md:ml-15",
  },
  {
    id: 5,
    title: "QUALIDADE - Boas Práticas",
    label:
      "Estruturo aplicações para serem escaláveis, previsíveis e fáceis de evoluir, equilibrando legibilidade, reutilização, performance e simplicidade por meio de decisões técnicas fundamentadas, tendo como base Clean Code, princípios SOLID, Mobile First e decisões técnicas baseadas em trade-offs.",
    value: "05",
    type: "UX",
    margin: "md:mr-25 md:ml-20",
  },
];

export const About = () => {
  return (
    <>
      <Section spacing="lg">
        <div className="flex flex-col md:flex-row w-full gap-15">
          <Stack classname="mb-55 h-5 w-full space-y-4">
            <Text variant="labelJet">// Sobre Mim</Text>
            <Text variant="h1">COMO TRABALHO</Text>
            <Text variant="label">
              Acredito que boas aplicações são construídas a partir de decisões
              técnicas consistentes. Meu foco é desenvolver soluções escaláveis
              utilizando arquitetura modular, tipagem forte, integração com
              APIs, separação de responsabilidades e componentes reutilizáveis.
              Tenho interesse em performance, SEO, experiência do desenvolvedor
              (DX) e ferramentas que tornam aplicações mais fáceis de evoluir e
              manter.
            </Text>
          </Stack>
          <Stack>
            <Flex direction="column">
              {List.map((items) => (
                <div key={items.id} className="w-full">
                  <Flex
                    wrap={false}
                    className="space-x-8 p-6 border-t border-t-neutral-900"
                  >
                    <Text className={`${items.margin}`} variant="labelJet">
                      {items.value}
                    </Text>
                    <Stack gap="sm">
                      <Flex>
                        <Text variant="h3">{items.title}</Text>
                        <Badge>
                          <Text variant="labelJet">{items.type}</Text>
                        </Badge>
                      </Flex>
                      <Text variant="labelJet">{items.label}</Text>
                    </Stack>
                  </Flex>
                </div>
              ))}
            </Flex>
          </Stack>
        </div>
      </Section>
    </>
  );
};
