import EnumInput from "./enumInput/EnumInput";
import classes from "./Input.module.css";
import TextareaInput from "./textareaInput/TextareaInput";

const Input = (props: InputProps) => {
    let className = classes.base;
    className += " " + classes[props.style ?? InputStyle.default]
    className += " " + classes[(props.isValid ?? true) ? "" : "invalid"]

    if(props.type === InputType.enum){
        return <EnumInput disabled={props.disabled} className={className} options={props.options} onChange={props.onChange} value={props.value}/>
    }
    else if(props.type === InputType.textarea){
        return <TextareaInput disabled={props.disabled} className={className} onChange={props.onChange} value={props.value}/>
    }

    return <input disabled={props.disabled} onChange={props.onChange} value={props.value} className={className} type={props.type}/>;
};

export interface InputProps {
    type?: InputType;
    style?: InputStyle;
    isValid?: boolean;
    value?: string;
    options?: Array<string>
    disabled?: boolean;
    onChange?: (event: any) => void
};

export enum InputStyle{
    default= "default",
    transparent="transparent"
}

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
