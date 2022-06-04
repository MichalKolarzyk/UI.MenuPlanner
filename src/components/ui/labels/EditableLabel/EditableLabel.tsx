import { InputType } from "zlib";
import { LabelProps } from "../label/Label";

const EditableLabel = () => { 

}


export class EditableLabelProps extends LabelProps{
    inputType?: InputType
    inEditMode?: boolean
    onChange?: (event: any) => void
    value?: string
}