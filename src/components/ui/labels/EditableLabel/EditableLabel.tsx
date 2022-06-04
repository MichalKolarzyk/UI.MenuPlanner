import { InputType } from "zlib";
import LabelInput, { LabelInputProps } from "../../inputs/labelInput/LabelInput";

const EditableLabel = (props: EditableLabelProps) => { 
    if(props.inEditMode){
        return <LabelInput {...props}/>
    }
    else{
        
    }
}


export interface EditableLabelProps extends LabelInputProps{
    inEditMode?: boolean
}