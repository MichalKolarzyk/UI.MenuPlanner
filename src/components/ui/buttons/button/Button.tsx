import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    let className = classes.base;
    className += " " + classes[props.style ?? ButtonStyle.default];
    className += " " + classes[props.size ?? ButtonSize.small];
    className += " " + classes[props.shape ?? ButtonShape.sharpCorners];
    className += " " + classes[props.padding ?? ButtonPadding.paddingTreeQuarters];

    return (
        <button className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export type ButtonProps = {
    onClick?: () => void;
    children?: JSX.Element | string;
    style?: ButtonStyle;
    size?: ButtonSize;
    shape?: ButtonShape;
    padding?: ButtonPadding;
};

export enum ButtonStyle {
    default = "default",
    transparent = "transparent",
    accept = "accept",
    cancel = "cancel",
    grey = "grey",
}

export enum ButtonSize {
    small = "small",
    medium = "medium",
    big = "large",
}

export enum ButtonShape {
    sharpCorners = "sharpCorners",
    roundedCorners = "roundedCorners",
    elipse = "elipse",
}

export enum ButtonPadding {
    paddingZero = "paddingZero",
    paddingQuarter = "paddingQuarter",
    paddingHalf = "paddingHalf",
    paddingTreeQuarters = "paddingTreeQuarters",
    paddingOne= "paddingOne",
}

export default Button;
