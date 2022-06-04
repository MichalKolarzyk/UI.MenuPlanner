import { ColorEnum, useClasses } from '../../constants/Constants';
import classes from './Label.module.css'

const Label = (props: LabelProps) =>{
    let className = classes.base;
    className += " " + classes[props.size ?? LabelSize.small]
    className += " " + useClasses(props.color ?? ColorEnum.black)
    className += " " + classes[props.bold ? "bold" : ""]
    className += " " + classes[props.italic ? "italic" : ""]

    return <label className={className}>{props.children}</label>
}

export interface LabelProps {
    children?: any;
    size?: LabelSize;
    color?: ColorEnum;
    bold?: boolean;
    italic?: boolean;
}

export enum LabelSize {
    small = "small",
    medium = "medium",
    large = "large",
}


export default Label;