import Card from "@mui/material/Card";
import CenteredCardHeader from "../components/card/CenteredCardHeader";
import { CardContent } from "@mui/material";
import { useState } from "react";
import InlineTextField from "../components/text/InlineTextField";
import EmployeesPage from "./EmployeesPage";

type Props = {

};

const ContactCard: React.FC<Props> = () => {
    const [name, setName] = useState('');

    return (
        <Card>
            <CenteredCardHeader title={"Employee"}/>
            <CardContent>
                <InlineTextField disabled={false} defaultValue={name} onCommit={(value: string): void => {setName(value)}}/>
            </CardContent>
        </Card>
    );
};

export default ContactCard;