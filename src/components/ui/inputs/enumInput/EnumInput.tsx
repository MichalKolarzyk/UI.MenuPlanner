const EnumInput = (props: EnumInputProps) => {
    const onChangeHandler = (event: any) => {
        props.onChange(event)
    }

    const options = props.options?.map((o, index) => <option key={index}>{o}</option>);

    return <select className={props.className} onChange={onChangeHandler} value={props.value}>{options}</select>;
};

type EnumInputProps = {
    value?: string;
    options?: Array<string>;
    onChange: (value: string) => void;
    className: string;
};

export default EnumInput;
