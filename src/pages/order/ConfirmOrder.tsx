import { Show } from "@toolpad/core";
import { Order } from "../../model/Order";
import { orderDataSource } from "../../data-source/Order";
import { Box, Card, CardContent } from "@mui/material";
import OrderDetails from "./OrderDetails";
import CenteredCardHeader from "../../components/card/CenteredCardHeader";

type Props = {
    order: Order
};

const ConfirmOrder: React.FC<Props> = ({ order }) => {
    return (
        <Card>
            <CenteredCardHeader title={"Order #" + order.id} />
            <CardContent>
                <OrderDetails order={order} />
            </CardContent>
        </Card>
    );
};

export default ConfirmOrder;