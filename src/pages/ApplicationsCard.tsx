import Card from "@mui/material/Card";
import CenteredCardHeader from "../components/card/CenteredCardHeader";
import { CardContent } from "@mui/material";
import { useState } from "react";
import InlineTextField from "../components/text/InlineTextField";

type Props = {

};

const ApplicationsCard: React.FC<Props> = () => {
    const [name, setName] = useState('');

    return (
        <Card>
            <CenteredCardHeader title={"Applications to download"}/>
            <CardContent>
                <InlineTextField defaultValue={name} onCommit={(value: string): void => {setName(value)}}/>
            </CardContent>
        </Card>
    );
};

export default ApplicationsCard;