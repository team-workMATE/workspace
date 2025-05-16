import CenteredCardHeader from "../../components/card/CenteredCardHeader";
import GridContainer from "../../components/grid/GridContainer";
import { Order } from "../../model/Order";
import { Button, Card, CardContent } from "@mui/material";

type Props = {
    updateStep: (step: number) => void;
};

const CreateOrder: React.FC<Props> = ({updateStep}) => {

    const handleClick = () => {
        updateStep(1);
    };

    return (
        <Card>
            <CenteredCardHeader title="Create Order"/>
            <CardContent>
                <GridContainer centered>
                    <Button onClick={handleClick}>Start Order Selection</Button>
                </GridContainer>
            </CardContent>
        </Card>
    );
};

export default CreateOrder;