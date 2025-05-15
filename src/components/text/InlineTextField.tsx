import { ClickAwayListener, TextField, Typography } from "@mui/material";
import React, { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import EditField from "./EditField";

type Props = {
    defaultValue: string;
    defaultEdit?: boolean;
    editable?: boolean;
    onChange?: (value: string) => void;
    onCommit: (value: string) => void;
    helperText?: string;
    disabled?: boolean;
    placeholder?: string;
    errorText?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    required?: boolean;
    fullwidth?: boolean;
};

const InlineTextField: React.FC<Props> = ({
    defaultValue, defaultEdit,
    editable, onChange,
    onCommit, helperText,
    disabled, placeholder,
    errorText, inputProps,
    required, fullwidth,

}) => {
    const [textValue, setTextValue] = useState(defaultValue);
    const [edit, setEdit] = useState(defaultEdit ?? false);
    const [error, setError] = useState(false);

    const handleOnCommit = () => {
        setEdit(false);

        if (!error) {
            onCommit(textValue);
        }

        setError(false);
    };

    const handleOnCancel = () => {
        setTextValue(textValue);
        setEdit(!edit);
    };

    const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        let isValid = value.trim() !== '';

        setError(!isValid);
        setTextValue(isValid ? value : defaultValue);

        if (onChange) {
            onChange(value);
        }
    };

    const editElement = (
        <ClickAwayListener onClickAway={handleOnCommit}>
            <TextField defaultValue={textValue} onChange={inputOnChange} helperText={error ? errorText : helperText}
                disabled={disabled} placeholder={placeholder} error={error} required={required}
                slotProps={{ htmlInput: { autoFocus: true, ...inputProps } }} fullWidth={fullwidth} />
        </ClickAwayListener>
    );

    const viewElement = <Typography>{textValue}</Typography>;

    return (
        <EditField edit={edit} editable={true} viewElement={viewElement} editElement={editElement}
            onEdit={() => setEdit(!edit)} onCancel={handleOnCancel} onCommit={handleOnCommit} />
    );
};

export default InlineTextField;