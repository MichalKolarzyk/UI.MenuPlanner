import { useState } from "react";
import classes from "./Table.module.css";

const Table = (props: TableProps) => {
    const [items, setItems] = useState(props.items);

    const columnSort = (column: Column, a: any, b: any) => {
        if (column.sorter === undefined || column.sorter === null) {
            return props.defaultSorter(a[column.property], b[column.property]);
        }
        return column.sorter(a[column.property], b[column.property]);
    };

    const sortHandler = (column: Column) => {
        const newItems = [...items.sort((a, b) => columnSort(column, a, b))];
        setItems(newItems);
    };

    const header = props.columns.map((col, index) => (
        <th onClick={() => sortHandler(col)} className={classes.header} key={index}>
            {col.name}
        </th>
    ));
    return (
        <>
            <table className={classes.table}>
                <thead>
                    <tr>{header}</tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <TableRow key={index} item={item} onRowClick={props.onRowClick} columns={props.columns} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

const TableRow = (props: RowProps) => {
    const onClickHandler = () => {
        props.onRowClick?.(props.item);
    };
    return (
        <tr onClick={onClickHandler}>
            {props.columns.map((col, index) => (
                <td className={classes.row} key={index}>
                    {props.item[col.property]}
                </td>
            ))}
        </tr>
    );
};

type TableProps = {
    items: Array<any>;
    columns: Array<Column>;
    defaultSorter: (a: any, b: any) => number;
    onRowClick?: (row: any) => void;
};

type RowProps = {
    item: any;
    columns: Array<Column>;
    onRowClick?: (row: any) => void;
};

type Column = {
    name: string;
    property: string;
    sorter?: (a: any, b: any) => number;
};

export default Table;
