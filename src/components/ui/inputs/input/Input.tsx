import EnumInput from "./enumInput/EnumInput";
import classes from "./Input.module.css";

const Input = (props: InputProps) => {
    let className = classes.base;
    className += " " + classes[props.isValid ? "valid" : "invalid"]

    if(props.type === InputType.enum){
        return <EnumInput className={className} options={props.options} onChange={props.onChange} value={props.value}/>
    }

    return <input onChange={props.onChange} value={props.value} className={className} type={props.type}/>;
};

type InputProps = {
    type?: InputType | string;
    isValid?: boolean;
    value?: string;
    options?: Array<string>
    onChange?: (event: any) => void
};

export enum InputType {
    enum = "enum",
    number = "number",
    date = "date",
    password = "password",
    email = "email",
    text = "text",
}

export default Input;
