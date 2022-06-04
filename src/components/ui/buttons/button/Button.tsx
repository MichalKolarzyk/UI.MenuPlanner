import React from "react";
import { FontsizeEnum, PaddingEnum, ShapeEnum, useClasses } from "../../constants/Constants";
import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    let className = classes.base;
    className += " " + classes[props.style ?? ButtonStyle.default];
    className += " " + useClasses(props.size ?? FontsizeEnum.small);
    className += " " + useClasses(props.shape ?? ShapeEnum.slightlyRounded);
    className += " " + useClasses(props.padding ?? PaddingEnum.paddingTreeQuarters);

    return (
        <button type={props.submit ? "submit" : "button"} className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export interface ButtonProps {
    onClick?: () => void;
    children?: JSX.Element | string;
    style?: ButtonStyle;
    size?: FontsizeEnum;
    shape?: ShapeEnum;
    padding?: PaddingEnum;
    submit?: boolean
};

export enum ButtonStyle {
    default = "default",
    transparent = "transparent",
    accept = "accept",
    cancel = "cancel",
    grey = "grey",
}

export default Button;
