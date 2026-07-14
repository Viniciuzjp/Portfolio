import { Flex, Grid, Stack } from "@av-digital/components";
import { Text } from "../../Text/Text";

export const ResumeSection = () => {
  return (
    <Flex className="w-full rounded-md p-4 border border-[rgba(255,255,255,0.06)] bg-[#090909]">
      <Grid classname="w-full">
        <Stack classname="w-full">
          <Flex
            gap="md"
            className="w-full rounded-md p-3 border border-[rgba(255,255,255,0.06)] bg-[#090909]"
          >
            <Flex className="w-full" gap="xs">
              <div className="h-1 w-full bg-gray-500" />
              <div className="h-0.75 w-9/10 bg-neutral-800" />
              <div className="h-0.75 w-7/10 bg-neutral-800" />
              <div className="h-0.75 w-6/10 bg-neutral-800" />
              <div className="h-0.75 w-8/10 bg-neutral-800" />
              <div className="h-0.75 w-5/10 bg-neutral-800" />
            </Flex>

            <Flex className="w-full" gap="xs">
              <div className="h-0.75 w-9/10 bg-neutral-800" />
              <div className="h-0.75 w-7/10 bg-neutral-800" />
              <div className="h-0.75 w-6/10 bg-neutral-800" />
              <div className="h-0.75 w-8/10 bg-neutral-800" />
              <div className="h-0.75 w-5/10 bg-neutral-800" />
            </Flex>
            <div className="w-full h-px bg-neutral-900" />
            <Text variant="description">1 column</Text>
          </Flex>
        </Stack>
        <Stack classname="w-full">
          <Flex className="w-full rounded-md p-3 border border-[rgba(255,255,255,0.06)] bg-[#090909]">
            <Grid classname="w-full">
              <Flex className="w-full" gap="md">
                <Flex className="w-full" gap="xs">
                  <div className="h-1 w-full bg-gray-500" />
                  <div className="h-0.75 w-9/10 bg-neutral-800" />
                  <div className="h-0.75 w-7/10 bg-neutral-800" />
                  <div className="h-0.75 w-6/10 bg-neutral-800" />
                  <div className="h-0.75 w-8/10 bg-neutral-800" />
                  <div className="h-0.75 w-5/10 bg-neutral-800" />
                </Flex>
                <Flex className="w-full" gap="xs">
                  <div className="h-0.75 w-9/10 bg-neutral-800" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                  <div className="h-0.75 w-6/10 bg-neutral-800" />
                  <div className="h-0.75 w-8/10 bg-neutral-800" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                </Flex>
              </Flex>

              <Flex className="w-full" gap="md">
                <Flex className="w-full" gap="xs">
                  <div className="h-1 w-full bg-gray-500" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                  <div className="h-0.75 w-7/10 bg-neutral-800" />
                  <div className="h-0.75 w-6/10 bg-neutral-800" />
                  <div className="h-0.75 w-8/10 bg-neutral-800" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                </Flex>
                <Flex className="w-full" gap="xs">
                  <div className="h-0.75 w-9/10 bg-neutral-800" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                  <div className="h-0.75 w-6/10 bg-neutral-800" />
                  <div className="h-0.75 w-8/10 bg-neutral-800" />
                  <div className="h-0.75 w-full bg-neutral-800" />
                </Flex>
              </Flex>
            </Grid>
            <div className="w-full h-px bg-neutral-900" />
            <Text variant="description">2 columns</Text>
          </Flex>
        </Stack>
      </Grid>
      <div className="w-full h-px bg-neutral-900" />
      <Flex gap="md">
        <Text variant="description">2 modelos</Text>
        <Text variant="description">PDF exportação</Text>
        <Text variant="description">costomização gratuita</Text>
      </Flex>
    </Flex>
  );
};
