import { DataModelId, List, PageContainer } from "@toolpad/core";
import React from "react";
import { Order } from "../../model/Order";
import { Hardware } from "../../model/Hardware";
import { hardwareDataSourceList } from "../../data-source/Hardware";

type Props = {
    order: Order;
    step: number;
    updateOrderFlow: (order: Order, step: number) => void;
};

const HardwareList: React.FC<Props> = ({order, step, updateOrderFlow}) => {
    const handleRowClick = React.useCallback((id: DataModelId) => {
        updateOrderFlow({...order, hardwareId: id}, step + 1)
    }, []);

    return (
            <List<Hardware>
                dataSource={hardwareDataSourceList}
                initialPageSize={25}
                onRowClick={handleRowClick}
            />
    );
};

export default HardwareList;