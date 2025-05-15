import {Card, CardContent} from "@mui/material"
import React from "react";
import GridItem from "../grid/GridItem";
import CenteredCardHeader from "./CenteredCardHeader";
import InlineTextField from "../text/InlineTextField";

type Props = {
    defaultValue: string;
    onCommit: (value: string) => void;
    title: string;
    helperText: string;
    placeholder: string;
    errorText?: string;
};

const InputTextFieldCard: React.FC<Props> = ({defaultValue, onCommit, title, helperText, placeholder, errorText}) => {
    return (
        <GridItem>
            <Card>
                <CenteredCardHeader title={title}/>
                <CardContent>
                    <InlineTextField defaultValue={defaultValue} editable={true} onCommit={onCommit}
                                     helperText={helperText}
                                     placeholder={placeholder} errorText={errorText} fullwidth/>
                </CardContent>
            </Card>
        </GridItem>
    );
};

export default InputTextFieldCard;