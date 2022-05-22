import classes from './Button.module.css'

const Button = (props: ButtonProps) => {
    let className = classes.base
    className += " " + classes[props.style ?? ButtonStyle.default]
    className += " " + classes[props.size ?? ButtonSize.small]
    className += " " + classes[props.shape ?? ButtonShape.sharpCorners]

    return <button className={className} onClick={props.onClick}>{props.children}</button>
}

export type ButtonProps = {
    onClick?: () => void
    children?: JSX.Element | string
    style? : ButtonStyle
    size? : ButtonSize
    shape? : ButtonShape
}

export enum ButtonStyle {
    default = "default",
    accept = "accept",
    cancel = "cancel",
}

export enum ButtonSize {
    small = "small",
    medium = "medium",
    big = "large",
}

export enum ButtonShape {
    sharpCorners = "sharpCorners",
    roundedCorners = "roundedCorners",
    elipse = "elipse"
}

export default Button;