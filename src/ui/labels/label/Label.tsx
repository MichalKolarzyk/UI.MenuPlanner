import { ColorEnum, FontsizeEnum, useClasses } from '../../constants/Constants';
import classes from './Label.module.css'

const Label = (props: LabelProps) =>{
    let className = classes.base;
    className += " " + useClasses(props.size ?? FontsizeEnum.small)
    className += " " + useClasses(props.color ?? ColorEnum.black)
    className += " " + classes[props.bold ? "bold" : ""]
    className += " " + classes[props.italic ? "italic" : ""]

    return <label className={className}>{props.children}</label>
}

export class LabelProps {
    children?: any;
    size?: FontsizeEnum;
    color?: ColorEnum;
    bold?: boolean;
    italic?: boolean;
}


export default Label;