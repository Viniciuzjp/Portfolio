import { Typography } from "@/app/design-system/Tokens/Typography"

export type TextType = {
    className?: string,
    children?: React.ReactNode,
    variant?: keyof typeof Typography
}