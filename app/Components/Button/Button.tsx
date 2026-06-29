import { ButtonType } from "./interface"
import { Colors } from "@/app/design-system/Tokens/Colors"
export const Button = ({children, className}: ButtonType) => {
    return (
        <div className={`${className} bg-white p-2 rounded-xs hover:bg-[#b9ff6b]`}>
            {children}
        </div>
    )
}