import classes from "./Grid.module.css";

const Grid = (props: GridProps) => {
    let className = classes.base;

    const style : React.CSSProperties = {
        gridTemplateColumns:(`repeat(${props.columns ?? 7}, ${props.cellWidth ?? "100px"})`),
        gridTemplateRows: (`repeat(${props.rows ?? 2}, ${props.cellHeight ?? "100px"})`),
    
    }

    return (
        <div style={style} className={className}>
            {props.children}
        </div>
    );
};

export class GridProps {
    children?: any;
    columns?: number;
    rows?: number;
    cellWidth?: string
    cellHeight?: string
}

export default Grid;
