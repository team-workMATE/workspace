import { Dialog, DialogContent } from "@mui/material";
import CenteredDialogTitle from "./CenteredDialogTitle";
import LinearProgressBar from "../progress/LinearProgressBar";

type Props = {
    open: boolean;
    onClose: () => void;
};

const InstallationDialog: React.FC<Props> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <CenteredDialogTitle title={"Installation"} />
            <DialogContent>
                <LinearProgressBar start={false} onComplete={function (): void {
                    throw new Error("Function not implemented.");
                } } />
            </DialogContent>
        </Dialog>
    );
};

export default InstallationDialog;