import { Dialog, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import LinearProgressBar from "../progress/LinearProgressBar";
import CenteredDialogTitle from "./CenteredDialogTitle";

interface RowProps {
    name: string;
    start: boolean;
}

function Row(props: RowProps) {
    const { name, start } = props;
    const [install, setInstall] = useState(false);

    return (
            <TableRow>
                <TableCell sx={{width: .25}}>
                    <Typography>{name}</Typography>
                </TableCell>
                <TableCell>
                    <LinearProgressBar start={start} onComplete={() => setInstall(false)} />
                </TableCell>
            </TableRow>
    );
}

type Props = {
open: boolean;
    onClose: () => void;
};

const OrderConfirmationDialog:React.FC<Props> = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <CenteredDialogTitle title={"Order Status"}/>
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <Row name={'Hardware Request'} start={true}/>
                            <Row name={'Software Request'} start={true}/>
                            <Row name={'Permission Request'} start={true}/>
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
        </Dialog>
    );
};

export default OrderConfirmationDialog;