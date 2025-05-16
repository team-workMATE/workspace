import { Fragment, ReactNode, useEffect, useState } from "react";
import EmployeeList from "./order/EmployeeList";
import { Order } from "../model/Order";
import { v4 as uuidv4 } from 'uuid';
import HardwareList from "./order/hardwareList";
import SoftwareList from "./order/SoftwareList";
import PermissionList from "./order/PermissionList";
import ConfirmOrder from "./order/ConfirmOrder";
import { Box } from "@mui/material";
import CustomizedSteppers from "./CustomizedSteppers";
import CreateOrder from "./order/CreateOrder";

const OrderStepFlow: React.FC = () => {
    const [order, setOrder] = useState<Order>({ id: uuidv4() } as Order);
    const [page, setPage] = useState(0);

    useEffect(() => console.log(page))

    const updateOrder = (updatedOrder: Order, updatedStep: number) => {
        setPage(updatedStep);
        setOrder(updatedOrder);
        console.log(order);
    };

    const OrderFlowPage = () => {
        switch (page) {
            case 1:
                return <EmployeeList order={order} step={page} updateOrderFlow={updateOrder} />
            case 2:
                return <HardwareList order={order} step={page} updateOrderFlow={updateOrder} />
            case 3:
                return <SoftwareList order={order} step={page} updateOrderFlow={updateOrder} />
            case 4:
                return <PermissionList order={order} step={page} updateOrderFlow={updateOrder} />
            case 5:
                return <ConfirmOrder order={order} />
            default:
                return <Fragment />
        }
    };

    return (
        <Box>
            {page === 0 && <CreateOrder updateStep={(step) => setPage(step)}/>}
            {page !== 0 && <CustomizedSteppers activeStep={page - 1} />}
            {page === 1 && <EmployeeList order={order} step={page} updateOrderFlow={updateOrder} />}
            {page === 2 && <HardwareList order={order} step={page} updateOrderFlow={updateOrder} />}
            {page === 3 && <SoftwareList order={order} step={page} updateOrderFlow={updateOrder} />}
            {page === 4 && <PermissionList order={order} step={page} updateOrderFlow={updateOrder} />}
            {page === 5 && <ConfirmOrder order={order} />}
        </Box>
    )
};

export default OrderStepFlow;