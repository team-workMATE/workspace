import { DataModelId, List } from "@toolpad/core";
import React from "react";
import { Order } from "../../model/Order";
import { Software } from "../../model/Software";
import { softwareDataSourceList } from "../../data-source/software";
import { Box } from "@mui/material";

type Props = {
    order: Order;
    step: number;
    updateOrderFlow: (order: Order, step: number) => void;
};

const SoftwareList: React.FC<Props> = ({ order, step, updateOrderFlow }) => {
    const handleRowClick = React.useCallback((id: DataModelId) => {
        updateOrderFlow({ ...order, softwareId: id }, step + 1)
    }, []);

    return (
        <Box>
            <List<Software>
                dataSource={softwareDataSourceList}
                initialPageSize={25}
                onRowClick={handleRowClick}
            />
        </Box>
    );
};

export default SoftwareList;