import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CenteredCardHeader from "../components/card/CenteredCardHeader";
import { getOrderStore, setOrderStore } from "../data-store/OrderStore";
import { Order } from "../model/Order";
import CustomizedSteppers from "./CustomizedSteppers";
import ConfirmOrder from "./order/ConfirmOrder";
import CreateOrder from "./order/CreateOrder";
import EmployeeList from "./order/EmployeeList";
import HardwareList from "./order/HardwareList";
import PermissionList from "./order/PermissionList";
import SoftwareList from "./order/SoftwareList";

const OrderStepFlow: React.FC = () => {
    const [order, setOrder] = useState<Order>({ id: uuidv4() } as Order);
    const orderStore = getOrderStore();
    setOrderStore([...orderStore, order]);
    const [page, setPage] = useState(0);

    const updateOrder = (updatedOrder: Order, updatedStep: number) => {
        setPage(updatedStep);
        setOrder(updatedOrder);
        setOrderStore([...orderStore, order]);
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
        </Card>
    )
};

export default OrderStepFlow;