import { BaseProps } from '../../base';
import { BoxShadowEnum, ColorEnum, PaddingEnum, PositionEnum, useClasses, ZIndexEnum } from '../../constants/Constants';
import classes from './Card.module.css'

const Card = (props: CardProps) => {
    let className = classes.base;
    className += " " + classes[props.color ?? CardColors.white]
    className += " " + classes[props.shape ?? CardShape.roundedCorners]
    className += " " + useClasses(props.position ?? "")
    className += " " + useClasses(props.padding ?? PaddingEnum.paddingHalf)
    className += " " + useClasses(props.boxShadow ?? BoxShadowEnum.light)
    className += " " + useClasses(props.zIndex ?? "")
    className += " " + props.className;

    return <div onClick={props.onClick} onBlur={props.onBlur} className={className}>{props.children}</div>
}

class CardProps extends BaseProps {
    shape?: CardShape;
    color?: CardColors;
    children?: any;
    padding?: PaddingEnum;
    boxShadow?: BoxShadowEnum;
    position?: PositionEnum;
    zIndex?: ZIndexEnum;
}

export enum CardShape{
    sharp = "sharp",
    roundedCorners = "roundedCorners",
    roundedCorners2 = "roundedCorners2"
}

export enum CardColors{
    white= "white",
    grey= "grey",
    darkGrey="darkGrey",
    green= "green",
    blue= "blue",
    transparent="transparent"
}


export default Card;