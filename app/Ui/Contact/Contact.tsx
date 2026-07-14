import { Flex, Grid, Section, Stack } from "@av-digital/components";
import { Text } from "@/app/Components/Text/Text";
import { Button } from "@/app/Components/Button/Button";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import MailtoLink from "@/app/Components/MailtoLink/MailtoLink";
import ContactForm from "@/app/Components/ContactForm/ContactForm";
const ContactLinks = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/Viniciuzjp",
  },
  {
    id: 2,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vinicius-juarez-092b59276/",
  },
  {
    id: 3,
    name: "Email",
    href: "mailto:viniciusjuarez720@gmail.com",
  },
];
export const Contact = () => {
  return (
    <Section>
      <Grid gap="lg">
        <Stack>
          <Text variant="labelJet">// CONTATO</Text>
          <Text variant="title">Vamos trabalhar juntos</Text>
          <Flex>
            <ContactForm/>
            <MailtoLink
              email={"viniciusjuarez2022@hotmail.com"}
              subject={"Titulo"}
              body={"Uma descrição para meu email"}
            >
            </MailtoLink>
          </Flex>
        </Stack>
        <Stack>
          <Text variant="labelJet">// ONDE ENCONTRAR</Text>
          <Flex className="w-full">
            {ContactLinks.map((link) => (
              <div className="w-full" key={link.id}>
                <Link href={link.href} className="w-full">
                  <Flex
                    align="start"
                    direction="column"
                    className="w-full p-4 border-b border-neutral-900 hover:bg-neutral-900"
                  >
                    <Text variant="label">{link.name}</Text>
                  </Flex>
                </Link>
              </div>
            ))}
          </Flex>
        </Stack>
      </Grid>
    </Section>
  );
};
