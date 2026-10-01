import { Flex } from "@av-digital/components";
import { Text } from "../../Text/Text";

const Lines = ({ widths, title = true }: { widths: string[]; title?: boolean }) => (
  <div className="flex flex-col gap-1 w-full">
    {title && <div className="h-1 w-1/2 bg-gray-500" />}
    {widths.map((w, i) => (
      <div key={i} className={`h-0.5 ${w} bg-neutral-800`} />
    ))}
  </div>
);

const Sidebar = () => (
  <div className="flex flex-col gap-1 w-1/3 h-full p-1.5 bg-neutral-800">
    <div className="h-1 w-full bg-gray-400" />
    <div className="h-0.5 w-8/10 bg-neutral-600" />
    <div className="h-0.5 w-6/10 bg-neutral-600" />
    <div className="h-0.5 w-9/10 bg-neutral-600" />
    <div className="h-0.5 w-7/10 bg-neutral-600" />
  </div>
);

const Content = () => (
  <div className="flex flex-col gap-2 flex-1 p-1.5">
    <Lines widths={["w-full", "w-8/10", "w-6/10"]} />
    <Lines widths={["w-9/10", "w-full", "w-7/10"]} />
    <Lines widths={["w-8/10", "w-5/10"]} />
  </div>
);

const templates = [
  {
    name: "Clássico",
    preview: (
      <div className="flex h-full">
        <div className="w-0.5 my-1 bg-gray-500" />
        <Content />
      </div>
    ),
  },
  {
    name: "2 colunas",
    preview: (
      <div className="flex h-full">
        <Sidebar />
        <Content />
      </div>
    ),
  },
  {
    name: "Sidebar direita",
    preview: (
      <div className="flex h-full">
        <Content />
        <Sidebar />
      </div>
    ),
  },
  {
    name: "Faixa superior",
    preview: (
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-1 p-1.5 bg-neutral-800">
          <div className="h-1 w-1/2 bg-gray-400" />
          <div className="h-0.5 w-8/10 bg-neutral-600" />
        </div>
        <Content />
      </div>
    ),
  },
  {
    name: "Minimalista",
    preview: (
      <div className="flex flex-col gap-2 h-full p-1.5">
        <div className="flex flex-col items-center gap-1">
          <div className="h-1 w-1/2 bg-gray-500" />
          <div className="h-0.5 w-3/4 bg-neutral-800" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="h-px w-full bg-gray-600" />
            <Lines widths={["w-full", "w-7/10"]} title={false} />
          </div>
        ))}
      </div>
    ),
  },
];

export const ResumeSection = () => {
  return (
    <Flex className="w-full rounded-md p-4 border border-[rgba(255,255,255,0.06)] bg-[#090909]">
      <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-3">
        {templates.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-2 rounded-md p-2 border border-[rgba(255,255,255,0.06)] bg-[#090909]"
          >
            <div className="w-full aspect-210/297 overflow-hidden rounded-sm border border-[rgba(255,255,255,0.04)]">
              {t.preview}
            </div>
            <Text variant="description">{t.name}</Text>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-neutral-900" />
      <Flex gap="md">
        <Text variant="description">5 modelos</Text>
        <Text variant="description">Exportação em PDF</Text>
        <Text variant="description">Cores e fontes editáveis</Text>
      </Flex>
    </Flex>
  );
};
