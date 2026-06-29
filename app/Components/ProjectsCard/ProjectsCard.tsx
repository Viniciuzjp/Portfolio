import { Flex } from "@av-digital/components";



export const ProjectsCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Flex className="w-full rounded-md p-10 border border-[rgba(255,255,255,0.06)] bg-[#090909]">
      {children}
    </Flex>
  );
};
