import { Flex } from "@av-digital/components";
import { Text } from "../../Text/Text";

const Header = () => (
  <div className="flex items-center justify-between px-2 py-1.5 border-b border-[rgba(255,255,255,0.04)]">
    <div className="h-1.5 w-8 bg-gray-500" />
    <div className="h-0.5 w-8 bg-neutral-700" />
    <div className="flex gap-1">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
      ))}
    </div>
  </div>
);

const Hero = () => (
  <div className="relative flex items-end h-16 p-2 bg-neutral-800">
    <div className="flex flex-col gap-1 w-1/3">
      <div className="h-1 w-full bg-gray-400" />
      <div className="h-0.5 w-8/10 bg-neutral-600" />
      <div className="mt-0.5 h-1.5 w-1/2 bg-neutral-600" />
    </div>
    <div className="absolute bottom-1.5 right-2 flex gap-0.5">
      <span className="w-2 h-0.5 bg-gray-400" />
      <span className="w-1 h-0.5 bg-neutral-600" />
      <span className="w-1 h-0.5 bg-neutral-600" />
    </div>
  </div>
);

const Categories = () => (
  <div className="grid grid-cols-4 gap-1.5">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex items-end aspect-4/3 p-1 bg-neutral-800">
        <div className="h-0.5 w-1/2 bg-neutral-600" />
      </div>
    ))}
  </div>
);

const Products = () => (
  <div className="flex flex-col gap-1.5">
    <div className="h-1 w-1/4 bg-gray-500" />
    <div className="grid grid-cols-4 gap-1.5">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className="flex flex-col gap-1">
          <div className="aspect-square bg-neutral-800" />
          <div className="h-0.5 w-9/10 bg-neutral-700" />
          <div className="h-0.5 w-1/2 bg-neutral-600" />
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <div className="grid grid-cols-4 gap-1.5 px-2 py-2 border-t border-[rgba(255,255,255,0.04)]">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col gap-1">
        <div className="h-0.5 w-1/2 bg-neutral-600" />
        <div className="h-0.5 w-8/10 bg-neutral-800" />
        <div className="h-0.5 w-6/10 bg-neutral-800" />
      </div>
    ))}
  </div>
);

export const EcommerceSection = () => {
  return (
    <Flex
      direction="column"
      className="w-full rounded-md border border-[rgba(255,255,255,0.06)] bg-[#090909]"
    >
      <Flex
        className="w-full rounded-t-md p-2 border-b border-[rgba(255,255,255,0.06)]"
        justify="between"
      >
        <Flex gap="md">
          {["#ff5f57", "#ffbd2e", "#28c941"].map((c) => (
            <span
              key={c}
              style={{
                marginRight: "-8px",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: c,
                opacity: 0.5,
              }}
            />
          ))}
          <Text variant="description">tougeclub.store</Text>
        </Flex>
        <Text variant="labelJet">Next.js · Shopify</Text>
      </Flex>

      <div className="w-full px-3">
        <div className="w-full overflow-hidden rounded-sm border border-[rgba(255,255,255,0.04)]">
          <Header />
          <Hero />
          <div className="flex flex-col gap-3 p-2">
            <Categories />
            <Products />
          </div>
          <Footer />
        </div>
      </div>

      <div className="w-full h-px bg-neutral-900" />
      <Flex gap="md" className="px-3 pb-2">
        <Text variant="description">Shopify Storefront API</Text>
        <Text variant="description">Context API</Text>
        <Text variant="description">LocalStorage</Text>
      </Flex>
    </Flex>
  );
};
