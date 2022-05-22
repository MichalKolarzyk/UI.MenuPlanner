import LabelFrame from "../../frames/labelFrame/LabelFrame";
import { LabelStyle } from "../../labels/label/Label";
import Input, { InputType } from "../input/Input";

const LabelInput = (props: LabelInputProps) => {
    return (
        <LabelFrame bottomLabelStyle={LabelStyle.red} bottomLabel={props.errorMessage} upperLabel={props.label}>
            <Input onChange={props.onChange} options={props.options} type={props.type} isValid={props.isValid}></Input>
        </LabelFrame>
    );
};

type LabelInputProps = {
    type?: InputType ;
    isValid?: boolean;
    options?: Array<string>;
    label?: string;
    errorMessage?: string;
    value?: string;
    onChange?: (event: any) => void;
};

export default LabelInput;
