const SimpleForm = (props: SimpleFormProps) => {
    const fields = props.fields.map(f => <input type={f.type}/>)
    return <form>{fields}</form>
};

type SimpleFormProps = {
    item: any;
    fields: Array<FormField>;
};

type FormField = {
    text: string;
    property: string;
    type?: string;
    validator?: (item: any) => string;
};

export default SimpleForm;
