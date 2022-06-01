import { BoxShadowEnum, PaddingEnum, useClasses } from '../../../constants/Constants';
import classes from './Card.module.css'

const Card = (props: CardProps) => {
    let className = classes.base;
    className += " " + classes[props.color ?? CardColors.white]
    className += " " + classes[props.shape ?? CardShape.roundedCorners]
    className += " " + useClasses(props.padding ?? PaddingEnum.paddingHalf)
    className += " " + useClasses(props.boxShadow ?? BoxShadowEnum.light)
    className += " " + props.className;

    return <div  className={className}>{props.children}</div>
}

type CardProps = {
    shape?: CardShape,
    color?: CardColors,
    children?: any,
    className?: string,
    padding?: PaddingEnum,
    boxShadow?: BoxShadowEnum,
}

export enum CardShape{
    sharp = "sharp",
    roundedCorners = "roundedCorners"
}

export enum CardColors{
    white= "white",
    grey= "grey",
    green= "green",
    transparent="transparent"
}


export default Card;