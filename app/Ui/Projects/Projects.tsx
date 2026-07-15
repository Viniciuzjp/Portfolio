import { Flex, Grid, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { ProjectsCard } from "@/app/Components/ProjectsCard/ProjectsCard";
import { Badge } from "@/app/Components/Badge/Badge";
import { LibSection } from "@/app/Components/ProjectsCard/LibSection/LibSection";
import { EcommerceSection } from "@/app/Components/ProjectsCard/EcommerceSection/Ecommerce";
import { ResumeSection } from "@/app/Components/ProjectsCard/ResumeSection/ResumeSection";
import { Button } from "@/app/Components/Button/Button";

const CardInfo = [
  {
    id: 1,
    info: {
      title: "01 Biblioteca de Componentes · NPM Pacote",
      date: "2024",
      status: "Publicada",
    },
    title: "Lib @av-digital/components",
    desciption:
      "Biblioteca de componentes React desenvolvida com foco em reutilização, consistência e escalabilidade. O projeto reúne componentes totalmente tipados, variantes configuráveis e uma arquitetura modular, servindo como base para acelerar o desenvolvimento e padronizar interfaces entre diferentes aplicações.",
    labels: {
      id1: "Nx monorepo arquitetura",
      id2: "Integração com Design token",
      id4: "Versionamento Semantico",
    },
    component: <LibSection />,
  },

  {
    id: 2,
    info: {
      title: "02 E-commerce via Dropshipping · Next.js",
      date: "2025",
      status: "Produção",
    },
    title: "E-commerce Hygg",
    desciption:
      "E-commerce desenvolvido com foco em arquitetura Front-End, integrando Shopify e APIs externas para gerenciamento de produtos. O projeto demonstra separação de responsabilidades, componentização, persistência de dados, padrões reutilizáveis de UI e otimizações voltadas para escalabilidade, performance e manutenção.",
    labels: {
      id1: "Persistência de dados via LocalStorage",
      id2: "Testes de pagamentos",
      id3: "Ecossistema de compras",
      id4: "Monitoramento do processo de compras",
    },
    component: <EcommerceSection />,
  },

  {
    id: 3,
    info: {
      title: "03 Desenvolvedor de Curriculos Personalizados · SheetSty",
      date: "2024",
      status: "Produção",
    },
    title: "SheetSty",
    desciption:
      "Plataforma para criação de currículos personalizados, permitindo que usuários montem documentos profissionais por meio de uma interface dinâmica e altamente configurável. O projeto foi desenvolvido com foco em experiência do usuário, reutilização de componentes, renderização otimizada e uma arquitetura preparada para suportar múltiplos templates e futuras expansões.",
    labels: {
      id1: "Variantes de 1 - 2 colunas",
      id2: "exportação em PDF",
      id4: "Personalização de cores, tamanhos, fontes entre outros",
    },
    component: <ResumeSection />,
  },
];

export default function Projects() {
  return (
    <>
<Section>
  <Flex align="start">
    <Text variant="labelJet">// PROJETOS</Text>

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
                  <Button>
                    <Text variant="label">Ver Demo</Text>
                  </Button>

                  <Button>
                    <Text variant="label">Ver Repositório</Text>
                  </Button>
                </Flex>
              </Stack>
            </div>

            <div className="flex-1 w-full">
              {item.component}
            </div>
          </div>
        </ProjectsCard>
      </div>
    ))}
  </Flex>
</Section>
    </>
  );
}
