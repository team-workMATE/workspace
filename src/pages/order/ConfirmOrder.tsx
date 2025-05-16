import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useState } from "react";
import CenteredCardHeader from "../../components/card/CenteredCardHeader";
import GridContainer from "../../components/grid/GridContainer";
import { Order } from "../../model/Order";
import OrderDetails from "./OrderDetails";
import SuccessfulSnackBar from "../../components/snackbar/SuccessfulSnackBar";

type Props = {
    order: Order
};

const ConfirmOrder: React.FC<Props> = ({ order }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    return (
        <Card>
            <CenteredCardHeader title={"Order #" + order.id} />
            <CardContent>
                <OrderDetails order={order} />
            </CardContent>
            <CardActions>
                <GridContainer centered>
                    <Button color="primary" onClick={() => setOpenSnackBar(true)}>Confirm Order</Button>
                    {openSnackBar && <SuccessfulSnackBar open={openSnackBar}
                        onClose={() => setOpenSnackBar(false)} />}
                </GridContainer>
            </CardActions>
        </Card>
    );
};

export default ConfirmOrder;