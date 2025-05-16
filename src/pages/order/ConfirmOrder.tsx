import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useState } from "react";
import CenteredCardHeader from "../../components/card/CenteredCardHeader";
import GridContainer from "../../components/grid/GridContainer";
import { Order } from "../../model/Order";
import OrderDetails from "./OrderDetails";
import OrderConfirmationDialog from "../../components/dialog/OrderConfirmationDialog";

type Props = {
    order: Order
};

const ConfirmOrder: React.FC<Props> = ({ order }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const placeOrder = () => {
        localStorage.setItem('order-placed', 'true');
        setOpenDialog(true);
    };

    return (
        <Card>
            <CenteredCardHeader title={"Order #" + order.id} />
            <CardContent>
                <OrderDetails order={order} />
            </CardContent>
            <CardActions>
                <GridContainer centered>
                    <Button color="primary" onClick={placeOrder}>Confirm Order</Button>
                    {openDialog && <OrderConfirmationDialog open={openDialog} onClose={() => setOpenDialog(false)}/>}
                </GridContainer>
            </CardActions>
        </Card>
    );
};

export default ConfirmOrder;