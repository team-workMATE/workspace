import { useState } from "react";
import EmployeeList from "./order/EmployeeList";
import { Order } from "../model/Order";
import { v4 as uuidv4 } from 'uuid';
import SoftwareList from "./order/SoftwareList";
import PermissionList from "./order/PermissionList";
import ConfirmOrder from "./order/ConfirmOrder";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import CustomizedSteppers from "./CustomizedSteppers";
import CreateOrder from "./order/CreateOrder";
import { getOrderStore, setOrderStore } from "../data-store/OrderStore";
import HardwareList from "./order/HardwareList";
import CenteredCardHeader from "../components/card/CenteredCardHeader";
import GridContainer from "../components/grid/GridContainer";

const OrderStepFlow: React.FC = () => {
    const [order, setOrder] = useState<Order>({ id: uuidv4() } as Order);
    const orderStore = getOrderStore();
    setOrderStore([...orderStore, order]);
    const [page, setPage] = useState(0);

    const updateOrder = (updatedOrder: Order, updatedStep: number) => {
        setPage(updatedStep);
        setOrder(updatedOrder);
        setOrderStore([...orderStore, order]);
        console.log(order);
    };

    return (
        <Card>
            <CenteredCardHeader title="Order Creation" />
            <CardContent>
                {page === 0 && <CreateOrder updateStep={(step) => setPage(step)} />}
                {page !== 0 && <CustomizedSteppers activeStep={page - 1} />}
                {page === 1 && <EmployeeList order={order} step={page} updateOrderFlow={updateOrder} />}
                {page === 2 && <HardwareList order={order} step={page} updateOrderFlow={updateOrder} />}
                {page === 3 && <SoftwareList order={order} step={page} updateOrderFlow={updateOrder} />}
                {page === 4 && <PermissionList order={order} step={page} updateOrderFlow={updateOrder} />}
                {page === 5 && <ConfirmOrder order={order} />}
            </CardContent>
            <CardActions>
                <GridContainer centered>
                    <Button color="primary">Confirm Order</Button>
                </GridContainer>
            </CardActions>
        </Card>
    )
};

export default OrderStepFlow;