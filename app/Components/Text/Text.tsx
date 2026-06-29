import { Typography } from "@/app/design-system/Tokens/Typography"
import { TextType } from "./interface"

export const Text = ({className, children, variant = "h1"}: TextType) => {
    return (
        <div className={`${className} ${Typography[variant]}`}>{children}</div>
    )
}