import React from "react"
import Mail from "./icons/Mail"
import House from "./icons/House"
import Phone from "./icons/Phone"
import TaskDone from "./icons/TaskDone"

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    iconName: string,
}

interface IIconsObject {
    [key: string]: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
}

export default function Icon({iconName, ...props}: IIconProps): React.ReactNode {

    const icons: IIconsObject = {
        mail: Mail,
        house: House,
        phone: Phone,
        taskDone: TaskDone
    }

    const CurrentIcon = icons[iconName]

    return CurrentIcon ? <CurrentIcon {...props} /> : null;
}