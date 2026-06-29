const Sizes = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-4',
}

const Variant = {
    primary: 'border transition duration-200 border-[rgba(255,255,255,0.06)] bg-[radial-gradient(circle,rgba(185,255,107,0.04)_0%,transparent_70%)] hover:border-[#b9ff6b] hover:text-[#b9ff6b]',
    secondary: 'border border-[rgba(255,255,255,0.06)] bg-[radial-gradient(circle,rgba(185,255,107,0.04)_0%,transparent_70%)]',
    default: 'border border-gray-600 bg-[#2a2a2a]'
}

type BadgeType = {
    children?: React.ReactNode,
    className?: string,
    variant?: keyof typeof Variant,
    sizes?: keyof typeof Sizes
}

export const Badge = ({ children, className, sizes = 'md', variant = "primary" }: BadgeType) => {
  return (
    <>
      <div className={`${className} flex rounded-sm ${Variant[variant]} ${Sizes[sizes]}`}>
        {children}
      </div>
    </>
  );
};
