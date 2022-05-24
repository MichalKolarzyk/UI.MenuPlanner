import classes from './Label.module.css'

const Label = (props: LabelProps) =>{
    let className = classes.base;
    className += " " + classes[props.size ?? LabelSize.small]
    className += " " + classes[props.style ?? LabelStyle.black]
    className += " " + classes[props.bold ? "bold" : ""]
    className += " " + classes[props.italic ? "italic" : ""]

    return <label className={className}>{props.children}</label>
}

export class LabelProps {
    children?: any;
    size?: LabelSize;
    style?: LabelStyle;
    onClick?: () => {};
    bold?: boolean;
    italic?: boolean;
}

export enum LabelSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export enum LabelStyle {
    black = "black",
    grey = "grey",
    white = "white",
    red = "red",
}



export default Label;