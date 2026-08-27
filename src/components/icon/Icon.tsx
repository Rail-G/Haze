import React from "react"
import Mail from "./icons/Mail"
import House from "./icons/House"
import Phone from "./icons/Phone"
import TaskDone from "./icons/TaskDone"
import Lock from "./icons/Lock"
import Minus from "./icons/Minus"
import Plus from "./icons/Plus"
import Error from "./icons/Error"

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
        taskDone: TaskDone,
        lock: Lock,
        minus: Minus,
        plus: Plus,
        error: Error
    }

    const CurrentIcon = icons[iconName]

    return CurrentIcon ? <CurrentIcon {...props} /> : null;
}