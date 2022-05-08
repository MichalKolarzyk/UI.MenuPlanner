import { ChangeEventHandler, useState } from 'react';
import classes from './EditableTextInput.module.css'

const EditableTextInput = (props: EditableTextInputProps) => {
    const [value, setValue] = useState(props.value);

    const [editMode, setEditMode] = useState(true);

    if (editMode) {
        return <input 
            className={classes.editableInput}
            onChange={props.onChange}
            value={value} 
            type="text" 
        />;
    }

    return <div>{value}</div>
};

type EditableTextInputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>
};

export default EditableTextInput;
