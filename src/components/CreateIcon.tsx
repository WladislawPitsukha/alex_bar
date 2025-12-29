import { IconType } from "react-icons"

export function CreateIcon({
    icon, className = ""
}: {
    icon: IconType,
    className?: string
}) {
    const Icon = icon

    return(
        <Icon className={`${className}`} />
    )
}