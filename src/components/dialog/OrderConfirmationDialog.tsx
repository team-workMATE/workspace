import { Dialog, DialogContent } from "@mui/material";
import CenteredDialogTitle from "./CenteredDialogTitle";

type Props = {
open: boolean;
    onClose: () => void;
};

const OrderConfirmationDialog:React.FC<Props> = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <CenteredDialogTitle title={"Order Status"}/>
            <DialogContent>
                
            </DialogContent>
        </Dialog>
    );
};

export default OrderConfirmationDialog;