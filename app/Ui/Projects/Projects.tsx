import { Flex, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { ProjectsCard } from "@/app/Components/ProjectsCard/ProjectsCard";
import { Badge } from "@/app/Components/Badge/Badge";
import { LibSection } from "@/app/Components/ProjectsCard/LibSection/LibSection";
import { EcommerceSection } from "@/app/Components/ProjectsCard/EcommerceSection/Ecommerce";
import { ResumeSection } from "@/app/Components/ProjectsCard/ResumeSection/ResumeSection";
import { Button } from "@/app/Components/Button/Button";
import Link from "next/link";

const CardInfo = [
  {
    id: 1,
    info: {
      title: "01 Biblioteca de Componentes · Pacote NPM",
      date: "2024",
      status: "Publicada",
    },
    title: "Lib @av-digital/components",
    desciption:
      "Biblioteca de componentes React publicada no NPM. Estruturei o monorepo, os tokens de design e o fluxo de versionamento. Está na versão 0.3.9 e é a base de UI deste portfólio.",
    labels: {
      id1: "12 componentes tipados com variantes configuráveis",
      id2: "Monorepo Nx",
      id3: "Tokens de design compartilhados entre componentes",
      id4: "Versionamento semântico (v0.3.9)",
    },
    links: {
      demo: "https://av-webdigital.website/",
      repo: "https://github.com/Viniciuzjp/AVDigital_components.git",
    },
    component: <LibSection />,
  },

  {
    id: 2,
    info: {
      title: "02 E-commerce · Next.js + Shopify",
      date: "2025",
      status: "Produção",
    },
    title: "E-commerce Touge",
    desciption:
      "Loja de dropshipping no ar em tougeclub.store. Desenvolvi o front-end inteiro: catálogo de produtos via Shopify Storefront API, carrinho e fluxo de compra até o pagamento.",
    labels: {
      id1: "Integração com Shopify Storefront API",
      id2: "Carrinho persistido com Context API + LocalStorage",
      id3: "Fluxo de pagamento testado de ponta a ponta",
      id4: "Monitoramento das etapas de compra",
    },
    links: {
      demo: "https://tougeclub.store",
      repo: "https://github.com/Viniciuzjp/WebShopcase.git",
    },
    component: <EcommerceSection />,
  },

  {
    id: 3,
    info: {
      title: "03 Gerador de Currículos · Next.js",
      date: "2024",
      status: "Produção",
    },
    title: "SheetSty",
    desciption:
      "Editor de currículos com pré-visualização em tempo real e 5 templates. Todos os templates leem os mesmos dados de um contexto compartilhado, então um modelo novo entra sem alterar o editor.",
    labels: {
      id1: "5 templates com layouts diferentes",
      id2: "Exportação em PDF no formato A4",
      id3: "Rascunho salvo entre sessões (Context API + LocalStorage)",
      id4: "Cores, fontes e tamanhos ajustáveis",
    },
    links: {
      demo: "https://cv-maker-ashy-phi.vercel.app/",
      repo: "https://github.com/Viniciuzjp/CV_Maker.git",
    },
    component: <ResumeSection />,
  },
];

export default function Projects() {
  return (
    <>
      <Section>
        <div id="Projects">
        <Flex align="start">
          <Text variant="labelJet">{"// PROJETOS PRINCIPAIS"}</Text>

          {CardInfo.map((item) => (
            <div key={item.id} className="w-full">
              <ProjectsCard>
                <Flex className="w-full" justify="between">
                  <Text variant="labelJet">{item.info.title}</Text>

                  <Flex>
                    <Text variant="labelJet">{item.info.date}</Text>

                    <Badge>
                      <Text variant="labelJet">{item.info.status}</Text>
                    </Badge>
                  </Flex>
                </Flex>

                <Text variant="h1" className="mb-10">
                  {item.title}
                </Text>

                <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
                  <div className="flex-1 w-full">
                    <Stack gap="lg">
                      <Text variant="label">{item.desciption}</Text>

                      <Stack gap="sm">
                        <Text variant="labelJet">{item.labels.id1}</Text>
                        <Text variant="labelJet">{item.labels.id2}</Text>
                        <Text variant="labelJet">{item.labels.id3}</Text>
                        <Text variant="labelJet">{item.labels.id4}</Text>
                      </Stack>

                      <Flex>
                        <Link href={item.links.demo}>
                          <Button>
                            <Text variant="label">Ver projeto</Text>
                          </Button>
                        </Link>
                        <Link href={item.links.repo}>
                          <Button>
                            <Text variant="label">Ver código</Text>
                          </Button>
                        </Link>
                      </Flex>
                    </Stack>
                  </div>

                  <div className="flex-1 w-full">{item.component}</div>
                </div>
              </ProjectsCard>
            </div>
          ))}
        </Flex>
        </div>
      </Section>
    </>
  );
}
