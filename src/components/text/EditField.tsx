import { Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import type { ReactNode } from "react";
import GridItem from "../grid/GridItem";
import GridContainer from "../grid/GridContainer";

type Props = {
    edit: boolean;
    editable?: boolean;
    viewElement: ReactNode | null;
    editElement: ReactNode | null;
    onEdit: () => void;
    onCancel: () => void;
    onCommit: () => void;
};

const EditField: React.FC<Props> = ({ edit, editable, viewElement, editElement, onEdit, onCancel, onCommit }) => {
    let isEditable = editable ?? true;

    const editButton = (
        <IconButton title='Edit' size='small' onClick={(): void => onEdit()}>
            <EditIcon color='primary' fontSize='small' />
        </IconButton>
    );

    const commitButton = (
        <Box component='span'>
            <IconButton title='Commit' size='small' onClick={(): void => onCommit()}>
                <CheckIcon color='primary' fontSize='small' />
            </IconButton>
            <IconButton title='Cancel' size='small' onClick={(): void => onCancel()}>
                <CancelIcon color='primary' fontSize='small' />
            </IconButton>
        </Box>
    );

    if (!isEditable) {
        return (
            <GridItem>
                {viewElement}
            </GridItem>
        )
    };

    return (
        <GridContainer spacing={1}>
            <GridItem>
                {edit ? editElement : viewElement}
            </GridItem>
            <GridItem>
                {edit ? commitButton : editButton}
            </GridItem>
        </GridContainer>
    );
};

export default EditField;