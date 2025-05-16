import { Show } from "@toolpad/core";
import { Order } from "../../model/Order";
import { orderDataSource } from "../../data-source/Order";

type Props = {
    order: Order
};

const ConfirmOrder: React.FC<Props> = ({ order }) => {
    return (
        <Show<Order> id={order.id}
            dataSource={orderDataSource} />
    );
};

export default ConfirmOrder;