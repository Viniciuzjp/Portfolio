import { Container, Flex } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import Link from "next/link";
import { Button } from "@/app/Components/Button/Button";



const NavLinks = [
  {
    id: 1,
    label: "Sobre",
    href: "#About",
    variant: "label",
  },
  {
    id: 2,
    label: "Projetos",
    href: "#Projects",
    variant: "label",
  },
  {
    id: 3,
    label: "Habilidades",
    href: "#Skills",
    variant: "label",
  },
  {
    id: 4,
    label: "Contato",
    href: "#Contacts",
    variant: "label",
  },
] as const;

export default function Header() {
  return (
    <nav className="sticky top-0 p-3 z-100 border-b border-[rgba(255,255,255,0.06)]">
      <Container size="xl">
        <Flex justify="between" align="center">
          <div>
            <Text className="font-extrabold" variant="h4">
              <Flex>
                <Text className="font-extrabold">AV </Text>{" "}
                <div className="h-4 w-[0.1] bg-gray-700"></div>
                <Text variant="labelJet"> Vinicius Juarez</Text>
              </Flex>
            </Text>
          </div>
          <div>
            <Flex gap="md">
            {NavLinks.map((item) => (
              <Link key={item.id} href={item.href}>
                <Text variant={item.variant}>{item.label}</Text>
              </Link>
            ))}
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
}
