import classes from './Card.module.css'

const Card = (props: CardProps) => {
    let className = classes.base;
    className += " " + classes[props.color ?? CardColors.white]
    className += " " + classes[props.shape ?? CardShape.sharp]
    className += " " + props.className;

    return <div  className={className}>{props.children}</div>
}

type CardProps = {
    shape?: CardShape,
    color?: CardColors,
    children?: any,
    className?: string,
}

export enum CardShape{
    sharp = "sharp",
    roundedCorners = "roundedCorners"
}

export enum CardColors{
    white= "white",
    grey= "grey",
    green= "green",
}


export default Card;