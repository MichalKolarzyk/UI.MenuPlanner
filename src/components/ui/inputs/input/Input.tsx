import EnumInput from "./enumInput/EnumInput";
import classes from "./Input.module.css";
import TextareaInput from "./textareaInput/TextareaInput";

const Input = (props: InputProps) => {
    let className = classes.base;
    className += " " + classes[(props.isValid ?? true) ? "valid" : "invalid"]

    if(props.type === InputType.enum){
        return <EnumInput disabled={props.disabled} className={className} options={props.options} onChange={props.onChange} value={props.value}/>
    }
    else if(props.type === InputType.textarea){
        return <TextareaInput disabled={props.disabled} className={className} onChange={props.onChange} value={props.value}/>
    }

    return <input disabled={props.disabled} onChange={props.onChange} value={props.value} className={className} type={props.type}/>;
};

type InputProps = {
    type?: InputType;
    isValid?: boolean;
    value?: string;
    options?: Array<string>
    onChange?: (event: any) => void
    disabled?: boolean;
};

export enum InputType {
    enum = "enum",
    number = "number",
    date = "date",
    password = "password",
    email = "email",
    text = "text",
    textarea = "textarea",
}

export default Input;
