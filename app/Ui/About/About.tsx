import { Flex, Grid, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { Badge } from "@/app/Components/Badge/Badge";

const List = [
  {
    id: 1,
    title: "TYPESCRIPT",
    label:
      "Todos os projetos aqui são escritos em TypeScript. Props, respostas de API e estado global têm tipos definidos.",
    value: "01",
    type: "CORE",
  },
  {
    id: 2,
    title: "DESIGN SYSTEM",
    label:
      "Cores e tipografia ficam em tokens centralizados. Para mudar a identidade visual de um projeto, altero um arquivo.",
    value: "02",
    type: "UI",
    margin: "md:mr-10 md:ml-5",
  },
  {
    id: 3,
    title: "COMPONENTES",
    label:
      "Button, Text, Flex, Stack e outros componentes da minha biblioteca são reaproveitados entre projetos, incluindo este portfólio.",
    value: "03",
    type: "TEMPLATE",
    margin: "md:mr-15 md:ml-10",
  },
  {
    id: 4,
    title: "PERFORMANCE",
    label:
      "Uso lazy loading, divisão de código e os recursos de renderização do Next.js para carregar só o necessário em cada página.",
    value: "04",
    type: "UX",
    margin: "md:mr-20 md:ml-15",
  },
  {
    id: 5,
    title: "PROCESSO",
    label:
      "Commits semânticos, versionamento com SemVer e layouts pensados primeiro para telas pequenas.",
    value: "05",
    type: "DX",
    margin: "md:mr-25 md:ml-20",
  },
];

export const About = () => {
  return (
    <>
      <Section spacing="lg">
        <div id="About" className="flex flex-col md:flex-row w-full gap-15">
          <Stack classname="mb-55 h-5 w-full space-y-4">
            <Text variant="labelJet">{"// Sobre Mim"}</Text>
            <Text variant="h1">COMO TRABALHO</Text>
            <Text variant="label">
              Começo pela base: tokens de design e componentes reutilizáveis.
              As telas vêm depois, montadas sobre essa base. Assim, uma mudança
              visual é feita em um lugar só e o mesmo código atende vários
              projetos.
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
