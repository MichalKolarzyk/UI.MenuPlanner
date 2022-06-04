import { useState } from "react";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import Flex, { FlexJustify } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label, { LabelSize } from "../../labels/label/Label";
import classes from "./Table.module.css";

const Table = (props: TableProps) => {
    const items = props.items;
    const [columns, setColumns] = useState(props.columns);

    const sortHandler = (column: Column) => {
        if(!items){
            return;
        }
        const newColumns = [...columns];
        newColumns.map((c) => (c.name == column.name ? (c.sorted = true) : (c.sorted = false)));
        setColumns(newColumns);

        props.onColumnSort?.(column);
    };

    if(!items){
        return <div>Loading...</div>
    }

    const header = columns.map((col, index) => (
        <th className={classes.headerCell} key={index}>
            <Flex>
                <Label size={LabelSize.medium} bold italic>
                    {col.name}
                </Label>
                <IconButton
                    onClick={() => sortHandler(col)}
                    image={col.sorted ? IconImage.sortDown : IconImage.sort}
                    style={ButtonStyle.transparent}
                />
            </Flex>
        </th>
    ));
    return (
        <table className={classes.table}>
            <thead className={classes.header}>{header}</thead>
            <tbody>
                {items.map((item, index) => (
                    <TableRow key={index} item={item} onRowClick={props.onRowClick} columns={props.columns} />
                ))}
            </tbody>
        </table>
    );
};

const TableRow = (props: RowProps) => {
    const onClickHandler = () => {
        props.onRowClick?.(props.item);
    };
    return (
        <tr className={classes.row} onClick={onClickHandler}>
            {props.columns.map((col, index) => (
                <td className={classes.cell} key={index}>
                    <Label size={LabelSize.medium}>{props.item[col.property]}</Label>
                </td>
            ))}
        </tr>
    );
};

type TableProps = {
    items?: Array<any>;
    columns: Array<Column>;
    onRowClick?: (row: any) => void;
    onColumnSort?: (column: Column) => void;
};

type RowProps = {
    item: any;
    columns: Array<Column>;
    onRowClick?: (row: any) => void;
};

export type Column = {
    name: string;
    property: string;
    sorted?: boolean;
};

export default Table;
