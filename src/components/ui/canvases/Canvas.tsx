import { AnimationEnum, useClasses, ZIndexEnum } from "../constants/Constants";
import classes from "./Canvas.module.css";

const Canvas = (props: CanvasProps) => {
    let className = classes.base;
    className += " " + classes[props.position ?? CanvasPosition.fixed];
    className += " " + classes[props.size ?? CanvasSize.fullscreen];
    className += " " + classes[props.opacity ?? CanvasOpacity.light];
    className += " " + classes[props.hight ?? CanvasHight.hightNone];
    className += " " + useClasses(props.zIndex ?? ZIndexEnum.zIndex20);
    className += " " + useClasses(props.animation ?? AnimationEnum.static);

    return (
        <div onClick={props.onClick} className={className}>
            {props.children}
        </div>
    );
};

export class CanvasProps {
    onClick?: () => void;
    children?: any;
    zIndex?: ZIndexEnum;
    size?: CanvasSize;
    opacity?: CanvasOpacity;
    animation?: AnimationEnum;
    position?: CanvasPosition;
    hight?: CanvasHight;
}

export enum CanvasSize {
    extraSmall = "extraSmall",
    small = "small",
    medium = "medium",
    large = "large",
    fullscreen = "fullscreen",
}

export enum CanvasOpacity{
    light = "lightOpacity",
    transparent = "transparent",
}

export enum CanvasPosition{
    unset = "unset",
    fixed = "fixed",
}
export enum CanvasHight {
    hightNone = "",
    hight20 = "hight20",
    hight40 = "hight40",
    hight60 = "hight60",
    hight80 = "hight80",
    hight100 = "hight100",
}

export default Canvas;
