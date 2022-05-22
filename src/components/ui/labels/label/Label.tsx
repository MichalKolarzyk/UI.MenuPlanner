import classes from './Label.module.css'

const Label = (props: LabelProps) =>{
    let className = classes.base;
    className += " " + classes[props.size ?? LabelSize.small]
    className += " " + classes[props.style ?? LabelStyle.black]

    return <label className={className}>{props.children}</label>
}

export type LabelProps = {
    children?: any;
    size?: LabelSize;
    style?: LabelStyle;
    onClick?: () => {};
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
}



export default Label;